const tsParser = require("@typescript-eslint/parser");
const tsPlugin = require("@typescript-eslint/eslint-plugin");
const reactPlugin = require("eslint-plugin-react");
const prettierPlugin = require("eslint-plugin-prettier");

module.exports = [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ignores: ["node_modules", "dist"], // Ignore unnecessary files
    languageOptions: {
      parser: tsParser,
      globals: {
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      react: reactPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error", // Prettier as an ESLint rule
      "react/react-in-jsx-scope": "off", // React 17+ doesn't require import React
      "@typescript-eslint/no-unused-vars": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
