import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-config-prettier';
import unusedImports from 'eslint-plugin-unused-imports';

export default {
  ignores: ['dist', 'build'], // Ignore build directories
  extends: [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    'plugin:react/recommended', // React recommended rules
    'plugin:react-hooks/recommended', // React hooks rules
    prettier, // Prettier integration
  ],
  files: ['**/*.{js,jsx,ts,tsx}'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: {
      ...globals.node, // Node.js globals
    },
    parser: '@typescript-eslint/parser', // Use TypeScript parser
    parserOptions: {
      ecmaFeatures: {
        jsx: true, // Enable JSX parsing
      },
    },
  },
  plugins: {
    'react-hooks': reactHooks, // React Hooks plugin
    'react-refresh': reactRefresh, // React Refresh plugin
    'unused-imports': unusedImports, // Unused Imports plugin
  },
  rules: {
     // React Hooks rules
    ...reactHooks.configs.recommended.rules,

    // React Refresh rule
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],

    // Unused variables and imports
    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': [
      'warn',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
    ],
    'unused-imports/no-unused-imports': 'warn', // Remove unused imports
    'unused-imports/no-unused-vars': 'off',

    // Turn off strict TypeScript rules
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/dot-notation': 'off',
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-object-literal-type-assertion": "off",
    "@typescript-eslint/no-extra-semi": "off",

    // General JavaScript/TypeScript rules
    'no-param-reassign': 'off',
    'prefer-spread': 'off',
    'prefer-const': 'off',
    'no-underscore-dangle': 'off',
    'no-shadow': 'off',
    'no-plusplus': 'off',
    'spaced-comment': 'off',
    'consistent-return': 'off',
    'no-restricted-syntax': 'off',
    'no-continue': 'off',
    'no-console': 'off',
    'no-bitwise': 'off',
    'no-redeclare': 'off',
    'default-case': 'off',

    // Import rules
    'import/named': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'import/namespace': 'off',
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
};




// import tsParser from "@typescript-eslint/parser"
// import tsPlugin from "@typescript-eslint/eslint-plugin"
// import globals from 'globals';
//
// /** @type {import('eslint').Linter.Config[]} */
// export default [
//   {
//     languageOptions: {
//       parser: tsParser,
//       globals: {
//         node: true,
//       },
//     },
//     plugins: {
//       "@typescript-eslint": tsPlugin,
//     },
//     files: ["**/*.ts", "**/*.tsx"],
//     ignores: ["dist", "node_modules", "coverage", ".next", "build", "plop-templates", "**/*.d.ts"],
//
//     rules: {
//       "@typescript-eslint/ no-empty-object-type": "off",
//       "@typescript-eslint/ no-unused-vars": "off",
//       "no-unused-vars": "off",
//       "@typescript-eslint/ban-ts-comment": "off",
//       "@typescript-eslint/no-use-before-define": "off",
//       "@typescript-eslint/no-explicit-any": "off",
//       "@typescript-eslint/no-non-null-assertion": "off",
//       "no-param-reassign": "off",
//       "prefer-spread": "off",
//       "no-console": "off",
//       "prefer-const": "off",
//       "jsx-a11y/no-autofocus": "off",
//       "import/named": "off",
//       "import/prefer-default-export": "off",
//       "no-underscore-dangle": "off",
//       "no-shadow": "off",
//       "no-plusplus": "off",
//       "spaced-comment": "off",
//       "guard-for-in": "off",
//       "operator-assignment": "off",
//       "prefer-destructuring": "off",
//       "consistent-return": "off",
//       "no-restricted-syntax": "off",
//       "no-continue": "off",
//       eqeqeq: "off",
//       "@typescript-eslint/dot-notation": "off",
//       "no-bitwise": "off",
//       "no-redeclare": "off",
//       "@typescript-eslint/naming-convention": "off",
//       "import/no-extraneous-dependencies": "off",
//       "@typescript-eslint/lines-between-class-members": "off",
//       "no-alert": "off",
//       "@typescript-eslint/no-shadow": "off",
//       "import/no-named-as-default": "off",
//       "prefer-object-spread": "off",
//       "arrow-body-style": "off",
//       "import/namespace": "off",
//       "jsx-a11y/label-has-associated-control": "off",
//       "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],
//       "default-case": "off",
//     },
//   },
//
//   {
//     files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
//     parserOptions: {
//       project: "tsconfig.eslint.json",
//     },
//   },
// ]



