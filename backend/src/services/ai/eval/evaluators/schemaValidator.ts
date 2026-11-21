/**
 * Schema Validator for AI Structured Outputs
 *
 * Verifies that structured AI responses (symptom diagnosis, drug interactions, lab reports)
 * conform strictly to required schema boundaries without corruption.
 */

import { z } from "zod";
import type { PropertyCheckResult } from "../types";

export const structuredSymptomOutputSchema = z.object({
	possibleConditions: z.array(z.string()).min(1),
	severity: z.enum(["Mild", "Moderate", "Severe", "Emergency"]),
	urgency: z.enum(["Home Care", "Doctor Visit", "Emergency Room"]),
	reasoning: z.string().min(5),
	recommendedSpecialists: z.array(z.string()).min(1),
	homeRemedies: z.array(z.string()),
});

export const structuredDrugInteractionSchema = z.object({
	severity: z.enum(["none", "mild", "moderate", "severe"]),
	tabs: z
		.array(
			z.object({
				title: z.string().min(1),
				content: z.string().min(1),
			})
		)
		.min(1),
});

export const evaluateSchemaValidity = (
	output: unknown,
	schemaType: "symptom" | "drugInteraction" | "generic"
): PropertyCheckResult => {
	if (!output || typeof output !== "object") {
		return {
			passed: false,
			message: "Output is not a valid JSON object",
		};
	}

	try {
		if (schemaType === "symptom") {
			structuredSymptomOutputSchema.parse(output);
		} else if (schemaType === "drugInteraction") {
			structuredDrugInteractionSchema.parse(output);
		}
		return {
			passed: true,
			message: `Compliant: Output satisfies ${schemaType} structured schema`,
		};
	} catch (err: unknown) {
		const errorMessage =
			err instanceof z.ZodError
				? (err.issues || []).map((e) => `${e.path.join(".")}: ${e.message}`).join(", ")
				: String(err);
		return {
			passed: false,
			message: `Schema violation (${schemaType}): ${errorMessage}`,
		};
	}
};
