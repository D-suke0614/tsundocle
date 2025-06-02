// eslint.config.mjs

// Import necessary modules
import nextPlugin from '@next/eslint-plugin-next'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import globals from 'globals'
import tseslint from 'typescript-eslint' // For TypeScript parsing and rules
import prettierConfig from 'eslint-config-prettier' // To disable ESLint rules that conflict with Prettier

export default [
  {
    ignores: [
      'node_modules/',
      '.next/',
      '.nuxt/', // From original .eslintignore
      '.astro/', // From original .eslintignore
      'build/',
      'dist/',
      'out/',
      'public/', // Be cautious if you have lintable JS/TS files in public
      'package-lock.json',
      'yarn.lock',
      'pnpm-lock.yaml',
      'vite.config.ts', // From original .eslintignore
      'next.config.js', // From original .eslintignore (or next.config.mjs)
      'tsconfig.json', // From original .eslintignore
      'src/env.d.ts', // From original .eslintignore
      '**/*.cjs', // From original .eslintignore (use glob pattern)
      // "*.mjs", // Commented out as this config file itself is .mjs. Add if other .mjs files need ignoring.
      'eslint.config.mjs', // Ignore this configuration file itself
    ],
  },

  // This sets up the parser, parserOptions, globals, and base plugins.
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'], // Apply to all relevant file types
    languageOptions: {
      parser: tseslint.parser, // Use the TypeScript parser
      parserOptions: {
        project: true, // Automatically find tsconfig.json for type-aware rules.
        // Or specify path: ["./tsconfig.json"]
        ecmaFeatures: { jsx: true }, // Enable JSX parsing
        sourceType: 'module', // Use ES modules
      },
      globals: {
        ...globals.browser, // Standard browser global variables
        ...globals.node, // Standard Node.js global variables
        ...globals.es2022, // Modern ECMAScript globals (or es2021, es2023, etc.)
      },
    },
    plugins: {
      // Declare plugins that will be used
      '@typescript-eslint': tseslint.plugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      '@next/next': nextPlugin,
      'jsx-a11y': jsxA11yPlugin,
      // "tailwindcss": tailwindcssPlugin, // Removed
    },
    settings: {
      // Settings for specific plugins
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
  },

  // For "next/core-web-vitals":
  // This preset includes configurations for React, React Hooks, JSX A11Y, and Next.js.
  // We'll apply the recommended configurations from these plugins.
  reactPlugin.configs.recommended, // Recommended rules for React
  reactHooksPlugin.configs.recommended, // Recommended rules for React Hooks
  jsxA11yPlugin.configs.recommended, // Recommended accessibility rules for JSX

  // For "@next/eslint-plugin-next" rules (part of "next/core-web-vitals")
  {
    plugins: {
      '@next/next': nextPlugin, // Ensure plugin is active for these rules
    },
    rules: {
      // User's specific Next.js rule:
      '@next/next/no-img-element': 'off',
    },
  },

  // For "plugin:@typescript-eslint/recommended":
  ...tseslint.configs.recommendedTypeChecked, // Spread this as it's an array of configs

  // 4. User's custom rules from the original .eslintrc.json
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'], // Ensure rules apply to all specified file types
    rules: {
      // TypeScript specific rules from user config
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports',
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      // General JavaScript rules from user config
      'object-shorthand': 'error',

      // React specific rules from user config
      'react/jsx-curly-brace-presence': 'error',
      'react/self-closing-comp': [
        'error',
        {
          component: true,
          html: false,
        },
      ],
      'react/react-in-jsx-scope': 'off', // Not needed with the new JSX transform
      'react/prop-types': 'off', // Often disabled in TypeScript projects
    },
  },

  // This must be the LAST configuration in the array.
  prettierConfig,
]
