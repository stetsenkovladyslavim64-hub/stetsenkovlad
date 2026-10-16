"use strict";

module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
    },
    rules: {
      "no-var": "error",
      "block-scoped-var": "error",
      "no-use-before-define": "error",
      "prefer-const": "error",
    },
  },
];
