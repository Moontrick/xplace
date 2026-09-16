// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const prettierRecommended = require('eslint-plugin-prettier/recommended');
const tsPlugin = require('@typescript-eslint/eslint-plugin');

module.exports = defineConfig([
  expoConfig,
  prettierRecommended,
  {
    ignores: ['dist/*', '.expo/*', 'node_modules/*', 'docs/*'],
  },
  {
    plugins: { '@typescript-eslint': tsPlugin },
    rules: {
      'no-empty-pattern': 'off',
      'no-useless-catch': 'off',
      '@typescript-eslint/no-explicit-any': ['warn', { ignoreRestArgs: false }],
      '@typescript-eslint/no-duplicate-enum-values': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
      ],
    },
  },
]);
