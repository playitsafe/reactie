import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import json from '@eslint/json'
import prettierPlugin from 'eslint-plugin-prettier'
import * as prettierConfig from 'eslint-plugin-prettier/recommended'
import { defineConfig } from 'eslint/config'

export default defineConfig([
	// JS/TS base config
	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node,
				...globals.jest,
			},
			parser: tseslint.parser,
		},
		plugins: {
			js,
			'@typescript-eslint': tseslint.plugin,
			prettier: prettierPlugin,
		},
		rules: {
			...js.configs.recommended.rules,
			...tseslint.configs.recommended.rules,
			'prettier/prettier': [
				'error',
				{
					trailingComma: 'all',
				},
			],
			'no-case-declarations': 'off',
			'no-constant-condition': 'off',
			'@typescript-eslint/ban-ts-comment': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
			'@typescript-eslint/no-var-requires': 'off',
			'no-unused-vars': 'off',
		},
	},

	// Prettier recommended config
	prettierConfig.default,

	// JSON files
	{
		files: ['**/*.json'],
		plugins: { json },
		language: 'json',
		extends: ['json/recommended'],
	},
])
