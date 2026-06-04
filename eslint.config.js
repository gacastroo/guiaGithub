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
        ...globals.es2021
      }
    },
    rules: {
      "no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^(show|toggleMobileNav|toggleTheme|toggleLang|copyCmd|quizPrev|quizSelectOpt|retryQuiz|toggleContributionLang|_)"
        }
      ],
      "no-console": "off"
    }
  }
];
