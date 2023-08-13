module.exports = {
  root: true,
  ignorePatterns: ['**/*/*.d.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./tsconfig.json'],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'prettier',
    'plugin:sonarjs/recommended',
  ],
  plugins: [
    'react-hooks',
    '@typescript-eslint',
    'jest',
    'testing-library',
    'sonarjs',
    'prettier',
  ],
  rules: {
    'no-new': 0,
    'no-template-curly-in-string': 0,
    'prettier/prettier': ['error'],
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/return-await': 2,
    'import/extensions': 0,
    'import/no-default-export': 0,
    'import/no-named-as-default': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-no-useless-fragment': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/function-component-definition': 0,
    'react/require-default-props': 0,
    'react-hooks/exhaustive-deps': 2,
    'react-hooks/rules-of-hooks': 2,
    'react/no-danger': 0,
    'jsx-a11y/anchor-is-valid': [
      2,
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    semi: 0,
    '@typescript-eslint/semi': 2,
    'no-param-reassign': ['error', { props: false }],
    'sonarjs/cognitive-complexity': ['error', 5],
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'enumMember',
        format: ['UPPER_CASE'],
      },
    ],
  },
};
