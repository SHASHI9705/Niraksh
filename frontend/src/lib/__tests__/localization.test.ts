/**
 * Localization & 11-Language Workflow Specification & Verification Suite
 *
 * Verifies:
 * - 11 supported Indian languages metadata consistency (FRD 17.3)
 * - RTL direction for Urdu and LTR for other 10 languages
 * - Speech-to-Text & Text-to-Speech locale tag mapping with fallback
 * - Safe fallback to English for missing dictionary keys
 * - Medical safety framing preservation across all languages
 */

import {
	SUPPORTED_LANGUAGES,
	LANGUAGE_METADATA,
	CHAT_LANGUAGES,
	isSupportedLanguage,
	getLanguageInfo,
	getSpeechRecognitionLocale,
	getLanguageDirection,
	isRTL,
	type SupportedLanguage,
} from "../languages";

import { t, TRANSLATIONS, type TranslationKey } from "../i18n";

export const EXPECTED_LANGUAGES: readonly SupportedLanguage[] = [
	"en",
	"hi",
	"bn",
	"te",
	"mr",
	"ta",
	"ur",
	"gu",
	"kn",
	"ml",
	"pa",
] as const;

type CaseCheck = (condition: boolean, message: string) => void;

function runCase(name: string, run: (check: CaseCheck) => void): boolean {
	const failures: string[] = [];

	console.log(`\nCASE: ${name}`);

	const check: CaseCheck = (condition, message) => {
		if (condition) {
			console.log(`  PASS: ${message}`);
			return;
		}

		console.log(`  FAIL: ${message}`);
		failures.push(message);
	};

	try {
		run(check);
	} catch (error) {
		const message = error instanceof Error ? error.message : String(error);
		console.log(`  ERROR: ${message}`);
		failures.push(message);
	}

	if (failures.length === 0) {
		console.log(`RESULT: PASS - ${name}`);
		return true;
	}

	console.log(`RESULT: FAIL - ${name} (${failures.length} failure(s))`);
	return false;
}

export function verifyLanguageMetadata(): void {
	const results = [
		runCase("1. Supported language metadata", (check) => {
			check(
				SUPPORTED_LANGUAGES.length === 11,
				`Expected exactly 11 supported languages; received ${SUPPORTED_LANGUAGES.length}`,
			);
			check(CHAT_LANGUAGES.length === 11, "CHAT_LANGUAGES contains exactly 11 entries");

			const enInfo = getLanguageInfo("en");
			check(enInfo.code === "en" && enInfo.dir === "ltr", "English metadata is valid and LTR");

			for (const code of EXPECTED_LANGUAGES) {
				check(SUPPORTED_LANGUAGES.includes(code), `${code}: included in supported languages`);
				check(isSupportedLanguage(code), `${code}: accepted by isSupportedLanguage`);
				check(LANGUAGE_METADATA[code] !== undefined, `${code}: metadata exists`);
				check(LANGUAGE_METADATA[code].code === code, `${code}: metadata code matches`);
			}
		}),

		runCase("2. Unsupported language rejection", (check) => {
			const unsupportedInputs: readonly [string, unknown][] = [
				["French", "fr"],
				["Spanish", "es"],
				["empty string", ""],
				["null", null],
				["undefined", undefined],
			];

			for (const [label, value] of unsupportedInputs) {
				check(!isSupportedLanguage(value), `${label}: safely rejected`);
			}
		}),

		runCase("3. Language directionality", (check) => {
			check(getLanguageDirection("ur") === "rtl", "Urdu direction is RTL");
			check(isRTL("ur") === true, "isRTL('ur') returns true");

			const ltrLanguages: SupportedLanguage[] = [
				"en",
				"hi",
				"bn",
				"te",
				"mr",
				"ta",
				"gu",
				"kn",
				"ml",
				"pa",
			];
			for (const lang of ltrLanguages) {
				check(getLanguageDirection(lang) === "ltr", `${lang}: direction is LTR`);
				check(isRTL(lang) === false, `${lang}: isRTL() returns false`);
			}
		}),

		runCase("4. Speech recognition locale mapping", (check) => {
			const expectedLocales: readonly [SupportedLanguage | string | null, string][] = [
				["en", "en-US"],
				["hi", "hi-IN"],
				["bn", "bn-IN"],
				["te", "te-IN"],
				["mr", "mr-IN"],
				["ta", "ta-IN"],
				["ur", "ur-IN"],
				["gu", "gu-IN"],
				["kn", "kn-IN"],
				["ml", "ml-IN"],
				["pa", "pa-IN"],
				["unsupported", "en-US"],
				[null, "en-US"],
			];

			for (const [input, expected] of expectedLocales) {
				const actual = getSpeechRecognitionLocale(input);
				check(actual === expected, `${String(input)}: expected ${expected}, received ${actual}`);
			}
		}),

		runCase("5. Translation lookup and fallback", (check) => {
			const hiDoctor = t("common.consultDoctor", "hi");
			check(
				hiDoctor === "हमेशा डॉक्टर से सलाह लें",
				`Hindi consult-doctor translation is correct: ${hiDoctor}`,
			);

			const fallbackEn = t("common.consultDoctor", "en");
			check(
				fallbackEn === "Always consult a doctor",
				`English consult-doctor translation is correct: ${fallbackEn}`,
			);

			const missingKey = "nonexistent.key" as TranslationKey;
			check(
				t(missingKey, "hi") === "nonexistent.key",
				"Missing translation keys safely return the key name",
			);
		}),

		runCase("6. Medical safety translations", (check) => {
			for (const lang of EXPECTED_LANGUAGES) {
				const dict = TRANSLATIONS[lang];
				check(dict !== undefined, `${lang}: translation dictionary exists`);
				check(
					Boolean(dict?.["common.medicalDisclaimer"]),
					`${lang}: medical disclaimer exists`,
				);
				check(
					Boolean(dict?.["common.emergencyAlert"]),
					`${lang}: emergency alert exists`,
				);
				check(
					dict?.["common.emergencyAlert"]?.includes("112") === true,
					`${lang}: emergency alert contains emergency number 112`,
				);
			}
		}),
	];

	const passed = results.filter(Boolean).length;
	const failed = results.length - passed;

	console.log(`\nSUMMARY: ${passed}/${results.length} cases passed`);
	if (failed > 0) {
		throw new Error(`Localization verification failed: ${failed} case(s) failed`);
	}
}

// Self-executing verification on build
verifyLanguageMetadata();
