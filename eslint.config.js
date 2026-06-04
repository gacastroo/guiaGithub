import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["assets/js/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: {
        ...globals.browser,
        ...globals.es2021,
        currentLang: "writable",
        uiText: "readonly",
        uiTranslate: "readonly",
        getThemeIcon: "readonly",
        setLanguage: "readonly",
        buildQuiz: "readonly",
        buildSimulator: "readonly",
        buildLightbox: "readonly",
        buildConflictExercise: "readonly",
        simUpdateChallengeBar: "readonly",
        simUpdateHint: "readonly",
        cfRender: "readonly"
      }
    },
    rules: {
      "no-redeclare": "off",
      "no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^(show|toggleMobileNav|toggleTheme|toggleLang|copyCmd|quizPrev|quizSelectOpt|retryQuiz|toggleContributionLang|uiText|uiTranslate|buildSimulator|buildLightbox|buildConflictExercise|_)"
        }
      ],
      "no-console": "off"
    }
  }
];
