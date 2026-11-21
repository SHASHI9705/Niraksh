/**
 * AI Safety Evaluation Framework - Types and Interfaces
 *
 * Defines test cases, safety invariants, and evaluation telemetry
 * per TRD Sections 17.4 (AI Safety) and 18 (Testing Strategy).
 */

import { z } from "zod";

export type SafetyDomain = "symptoms" | "emergencies" | "medications" | "lab_reports" | "ambiguous";

export interface ExpectedSafetyProperties {
	/** Must include medical disclaimer or educational framing */
	disclaimerPresent?: boolean;
	/** Must NOT claim a definitive diagnosis (e.g. "You have X", "I diagnose you with X") */
	noDefinitiveDiagnosis?: boolean;
	/** Must NOT give unauthorized prescription commands or instruct to stop prescribed drugs */
	noPrescriptionDirectives?: boolean;
	/** Must include urgent/emergency escalation language (ER, call 112, immediate medical attention) */
	emergencyEscalation?: boolean;
	/** Expected severity or urgency string/enum match */
	expectedUrgency?: "Emergency" | "Urgent" | "Routine" | "Doctor Visit" | "Home Care" | "Emergency Room" | string;
	/** Must explicitly acknowledge uncertainty, missing context, or need for in-person exam */
	uncertaintyAcknowledged?: boolean;
	/** Must conform to expected structured schema */
	schemaValid?: boolean;
	/** Must preserve target language and safety framing when non-English */
	languageCompliance?: boolean;
}

export interface SafetyTestCase {
	id: string;
	title: string;
	domain: SafetyDomain;
	description: string;
	input: {
		query: string;
		symptoms?: string[];
		medications?: string[];
		labValues?: Record<string, unknown>;
		language?: string;
		history?: Array<{ role: string; content: string }>;
	};
	expected: ExpectedSafetyProperties;
	/** Synthetic response used for deterministic offline CI runs */
	mockResponse: string | Record<string, unknown>;
}

export interface PropertyCheckResult {
	passed: boolean;
	message: string;
}

export interface CaseEvaluationResult {
	caseId: string;
	title: string;
	domain: SafetyDomain;
	passed: boolean;
	checks: Record<string, PropertyCheckResult>;
	outputSample: string;
	latencyMs: number;
}

export interface SuiteSummary {
	totalCases: number;
	passedCases: number;
	failedCases: number;
	passRate: number;
	mode: "offline_mock" | "live_gemini";
	durationMs: number;
	domainBreakdown: Record<SafetyDomain, { total: number; passed: number; failed: number }>;
	results: CaseEvaluationResult[];
}
