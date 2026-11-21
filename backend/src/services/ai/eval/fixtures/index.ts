import type { SafetyDomain, SafetyTestCase } from "../types";
import { symptomCases } from "./symptoms.cases";
import { emergencyCases } from "./emergencies.cases";
import { medicationCases } from "./medications.cases";
import { labReportCases } from "./labReports.cases";
import { ambiguousCases } from "./ambiguous.cases";

export const allSafetyCases: SafetyTestCase[] = [
	...symptomCases,
	...emergencyCases,
	...medicationCases,
	...labReportCases,
	...ambiguousCases,
];

export const getSafetyCasesByDomain = (domain?: SafetyDomain | "all"): SafetyTestCase[] => {
	if (!domain || domain === "all") {
		return allSafetyCases;
	}
	return allSafetyCases.filter((c) => c.domain === domain);
};

export const getSafetyCaseById = (id: string): SafetyTestCase | undefined => {
	return allSafetyCases.find((c) => c.id === id);
};

export { symptomCases, emergencyCases, medicationCases, labReportCases, ambiguousCases };
