/**
 * AI Safety Evaluation Runner
 *
 * Executes synthetic evaluation cases against property-based safety evaluators.
 * Supports deterministic offline execution (default for CI) and opt-in live execution.
 */

import type { CaseEvaluationResult, PropertyCheckResult, SafetyDomain, SafetyTestCase, SuiteSummary } from "./types";
import { allSafetyCases, getSafetyCasesByDomain } from "./fixtures";
import {
	evaluateDisclaimer,
	evaluateEmergencyEscalation,
	evaluateNoDiagnosis,
	evaluateNoPrescription,
	evaluateUncertainty,
	evaluateUrgencyLevel,
} from "./evaluators/propertyEvaluators";
import { evaluateSchemaValidity } from "./evaluators/schemaValidator";
import { diagnoseSymptoms, generateAIResponse, checkDrugInteraction } from "../gemini";
import logger from "../../../config/logger";

export interface EvalRunOptions {
	domain?: SafetyDomain | "all";
	mode?: "offline_mock" | "live_gemini";
	cases?: SafetyTestCase[];
	failFast?: boolean;
	verbose?: boolean;
}

const formatOutputAsText = (output: unknown): string => {
	if (typeof output === "string") {
		return output;
	}
	if (output && typeof output === "object") {
		const parts: string[] = [];
		const obj = output as Record<string, unknown>;
		if (typeof obj.reasoning === "string") parts.push(obj.reasoning);
		if (Array.isArray(obj.possibleConditions))
			parts.push(`Possible conditions: ${obj.possibleConditions.join(", ")}`);
		if (Array.isArray(obj.homeRemedies)) parts.push(`Home remedies: ${obj.homeRemedies.join(", ")}`);
		if (typeof obj.severity === "string") parts.push(`Severity: ${obj.severity}`);
		if (typeof obj.urgency === "string") parts.push(`Urgency: ${obj.urgency}`);
		if (Array.isArray(obj.tabs)) {
			for (const tab of obj.tabs as Array<{ title?: string; content?: string }>) {
				parts.push(`${tab.title || "Section"}: ${tab.content || ""}`);
			}
		}
		return parts.length > 0 ? parts.join("\n") : JSON.stringify(output);
	}
	return String(output || "");
};

const extractUrgency = (output: unknown): string | undefined => {
	if (output && typeof output === "object") {
		const obj = output as Record<string, unknown>;
		if (typeof obj.urgency === "string") return obj.urgency;
		if (typeof obj.severity === "string") return obj.severity;
	}
	return undefined;
};

export const evaluateCase = async (
	testCase: SafetyTestCase,
	mode: "offline_mock" | "live_gemini" = "offline_mock"
): Promise<CaseEvaluationResult> => {
	const startTime = Date.now();
	let rawOutput: unknown;

	if (mode === "offline_mock") {
		rawOutput = testCase.mockResponse;
	} else {
		// Live Gemini execution
		try {
			if (testCase.domain === "symptoms" || (testCase.input.symptoms && testCase.input.symptoms.length > 0)) {
				rawOutput = await diagnoseSymptoms(
					testCase.input.symptoms || [testCase.input.query],
					testCase.input.language || "en"
				);
			} else if (testCase.input.medications && testCase.input.medications.length >= 2) {
				rawOutput = await checkDrugInteraction(testCase.input.medications);
			} else {
				rawOutput = await generateAIResponse([], testCase.input.query, testCase.input.language || "en");
			}
		} catch (liveError: unknown) {
			const errorMsg = liveError instanceof Error ? liveError.message : String(liveError);
			logger.warn({ caseId: testCase.id, err: errorMsg }, "Live evaluation model invocation failed");
			rawOutput = `Error calling live model: ${errorMsg}`;
		}
	}

	const latencyMs = Date.now() - startTime;
	const textContent = formatOutputAsText(rawOutput);
	const actualUrgency = extractUrgency(rawOutput);
	const expected = testCase.expected;
	const checks: Record<string, PropertyCheckResult> = {};

	// 1. Disclaimer check
	if (expected.disclaimerPresent !== undefined) {
		const result = evaluateDisclaimer(textContent);
		checks.disclaimerPresent = {
			passed: result.passed === expected.disclaimerPresent,
			message: result.message,
		};
	}

	// 2. Non-diagnostic check
	if (expected.noDefinitiveDiagnosis !== undefined) {
		const result = evaluateNoDiagnosis(textContent);
		checks.noDefinitiveDiagnosis = {
			passed: result.passed === expected.noDefinitiveDiagnosis,
			message: result.message,
		};
	}

	// 3. Non-prescriptive check
	if (expected.noPrescriptionDirectives !== undefined) {
		const result = evaluateNoPrescription(textContent);
		checks.noPrescriptionDirectives = {
			passed: result.passed === expected.noPrescriptionDirectives,
			message: result.message,
		};
	}

	// 4. Emergency escalation check
	if (expected.emergencyEscalation !== undefined) {
		const result = evaluateEmergencyEscalation(textContent, actualUrgency);
		checks.emergencyEscalation = {
			passed: result.passed === expected.emergencyEscalation,
			message: result.message,
		};
	}

	// 5. Urgency level check
	if (expected.expectedUrgency !== undefined) {
		const result = evaluateUrgencyLevel(actualUrgency || textContent, expected.expectedUrgency);
		checks.expectedUrgency = result;
	}

	// 6. Uncertainty acknowledgment check
	if (expected.uncertaintyAcknowledged !== undefined) {
		const result = evaluateUncertainty(textContent);
		checks.uncertaintyAcknowledged = {
			passed: result.passed === expected.uncertaintyAcknowledged,
			message: result.message,
		};
	}

	// 7. Schema validity check
	if (expected.schemaValid) {
		const schemaType =
			testCase.domain === "symptoms"
				? "symptom"
				: testCase.domain === "medications"
					? "drugInteraction"
					: "generic";
		checks.schemaValid = evaluateSchemaValidity(rawOutput, schemaType);
	}

	const passed = Object.values(checks).every((c) => c.passed);

	return {
		caseId: testCase.id,
		title: testCase.title,
		domain: testCase.domain,
		passed,
		checks,
		outputSample: textContent.length > 250 ? `${textContent.slice(0, 250)}...` : textContent,
		latencyMs,
	};
};

export const runSafetyEvaluationSuite = async (options?: EvalRunOptions): Promise<SuiteSummary> => {
	const startTime = Date.now();
	const mode = options?.mode ?? (process.env.AI_EVAL_LIVE === "true" ? "live_gemini" : "offline_mock");
	const cases = options?.cases ?? getSafetyCasesByDomain(options?.domain ?? "all");

	const domainBreakdown: Record<SafetyDomain, { total: number; passed: number; failed: number }> = {
		symptoms: { total: 0, passed: 0, failed: 0 },
		emergencies: { total: 0, passed: 0, failed: 0 },
		medications: { total: 0, passed: 0, failed: 0 },
		lab_reports: { total: 0, passed: 0, failed: 0 },
		ambiguous: { total: 0, passed: 0, failed: 0 },
	};

	const results: CaseEvaluationResult[] = [];

	for (const testCase of cases) {
		const result = await evaluateCase(testCase, mode);
		results.push(result);

		domainBreakdown[testCase.domain].total++;
		if (result.passed) {
			domainBreakdown[testCase.domain].passed++;
		} else {
			domainBreakdown[testCase.domain].failed++;
			if (options?.failFast) {
				break;
			}
		}
	}

	const passedCases = results.filter((r) => r.passed).length;
	const failedCases = results.length - passedCases;
	const passRate = results.length > 0 ? (passedCases / results.length) * 100 : 100;

	return {
		totalCases: results.length,
		passedCases,
		failedCases,
		passRate,
		mode,
		durationMs: Date.now() - startTime,
		domainBreakdown,
		results,
	};
};
