#!/usr/bin/env tsx
/**
 * Niraksh Guardian - AI Safety Evaluation & Regression CLI
 *
 * Usage:
 *   pnpm --dir backend eval:ai-safety
 *   pnpm --dir backend eval:ai-safety:live
 *   tsx scripts/run-ai-safety-eval.ts --category=emergencies
 *   tsx scripts/run-ai-safety-eval.ts --category=medications --verbose
 *   tsx scripts/run-ai-safety-eval.ts --live --json
 */

import dotenv from "dotenv";
dotenv.config();

import { runSafetyEvaluationSuite } from "../src/services/ai/eval/runEval";
import type { SafetyDomain } from "../src/services/ai/eval/types";

const args = process.argv.slice(2);

const parseArg = (prefix: string): string | undefined => {
	const match = args.find((arg) => arg.startsWith(prefix));
	return match ? match.split("=")[1] : undefined;
};

const hasFlag = (flag: string): boolean => args.includes(flag);

const isLive = hasFlag("--live") || process.env.AI_EVAL_LIVE === "true";
const asJson = hasFlag("--json");
const verbose = hasFlag("--verbose");
const failFast = hasFlag("--fail-fast");
const category = (parseArg("--category") as SafetyDomain | "all") || "all";

async function main() {
	if (!asJson) {
		console.log("========================================================");
		console.log("🛡️  Niraksh Guardian - AI Safety Evaluation Suite");
		console.log(`Mode:     ${isLive ? "LIVE (Calling Gemini API)" : "OFFLINE (Deterministic Synthetic Fixtures)"}`);
		console.log(`Category: ${category}`);
		console.log("========================================================\n");
	}

	const summary = await runSafetyEvaluationSuite({
		mode: isLive ? "live_gemini" : "offline_mock",
		domain: category,
		failFast,
		verbose,
	});

	if (asJson) {
		console.log(JSON.stringify(summary, null, 2));
	} else {
		for (const result of summary.results) {
			const icon = result.passed ? "✅" : "❌";
			console.log(`${icon} [${result.domain.toUpperCase()}] ${result.title} (${result.caseId})`);

			if (verbose || !result.passed) {
				for (const [checkName, check] of Object.entries(result.checks)) {
					const checkIcon = check.passed ? "  ✓" : "  ✗";
					console.log(`   ${checkIcon} ${checkName}: ${check.message}`);
				}
				if (!result.passed) {
					console.log(`   Sample Output: "${result.outputSample}"\n`);
				}
			}
		}

		console.log("\n--------------------------------------------------------");
		console.log("📊 Evaluation Summary");
		console.log("--------------------------------------------------------");
		console.log(`Total Cases:  ${summary.totalCases}`);
		console.log(`Passed Cases: ${summary.passedCases}`);
		console.log(`Failed Cases: ${summary.failedCases}`);
		console.log(`Pass Rate:    ${summary.passRate.toFixed(1)}%`);
		console.log(`Duration:     ${summary.durationMs}ms`);

		console.log("\nDomain Breakdown:");
		for (const [domain, stats] of Object.entries(summary.domainBreakdown)) {
			if (stats.total > 0) {
				console.log(`  - ${domain.padEnd(14)}: ${stats.passed}/${stats.total} passed`);
			}
		}
		console.log("--------------------------------------------------------\n");
	}

	if (summary.failedCases > 0) {
		console.error(`💥 AI Safety Evaluation encountered ${summary.failedCases} regression(s)!`);
		process.exit(1);
	} else {
		if (!asJson) console.log("🎉 All AI Safety invariants satisfied!");
		process.exit(0);
	}
}

main().catch((err) => {
	console.error("Evaluation runner encountered an error:", err);
	process.exit(1);
});
