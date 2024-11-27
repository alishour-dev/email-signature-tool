import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "typescript-eslint"

export default tseslint.config(
	{ ignores: ["dist"] },
	{
		extends: [
			js.configs.recommended,
			...tseslint.configs.recommended,
			"eslint:recommended",
			"prettier",
			"plugin:prettier/recommended",
			"plugin:perfectionist/recommended-natural-legacy",
			"plugin:import/errors",
			"plugin:import/typescript",
			"plugin:import/warnings",
		],
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		plugins: {
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
			prettier: "prettier",
			import: "import",
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
			"import/default": "off",
			"import/extensions": ["error", "never", { json: "always", svg: "always" }],
			"import/no-named-as-default": "off",
			"import/no-named-as-default-member": "off",
			"import/no-unresolved": [2, { amd: true, commonjs: true }],
			"import/prefer-default-export": "off",
			"no-console": "error",
			"no-else-return": "error",
			"no-unused-vars": "off",
			"padding-line-between-statements": [
				"error",
				{
					blankLine: "always",
					next: "return",
					prev: "*",
				},
				{
					blankLine: "always",
					next: "*",
					prev: ["const", "let", "function"],
				},
				{
					blankLine: "always",
					next: ["if", "switch", "while", "try", "function"],
					prev: ["*"],
				},
				{
					blankLine: "always",
					next: ["*"],
					prev: ["if", "switch", "while", "try", "function"],
				},
				{
					blankLine: "always",
					next: ["*"],
					prev: ["export"],
				},
			],
			"prettier/prettier": ["error", { endOfLine: "auto" }],
			"react/jsx-key": "off",
			"react/jsx-no-useless-fragment": [2, { allowExpressions: true }],
			"react/jsx-props-no-spreading": "off",
			"react/prop-types": "off",
			"react/react-in-jsx-scope": "off",
			"react/require-default-props": ["off"],
		},
		root: true,
	}
)
