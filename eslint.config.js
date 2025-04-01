import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { ESLint } from 'eslint';
import tseslint from '@typescript-eslint/eslint-plugin';
import tseslintParser from '@typescript-eslint/parser';

export default new ESLint({
    overrideConfig: {
        ignorePatterns: ['dist'],
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
        ],
        parser: tseslintParser,
        parserOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
        },
        env: {
            browser: true,
            es6: true,
        },
        globals: globals.browser,
        plugins: ['react-hooks', 'react-refresh', '@typescript-eslint'],
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
        },
    },
});
