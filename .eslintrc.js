module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: ['error', 'single'],
    'semi-spacing': ['error', { after: false, before: false }],
    'semi-style': ['error', 'last'],
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'space-in-parens': ['error', 'never'],
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    semi: 'off',
    '@typescript-eslint/semi': ['error'],
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': ['error'],
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': ['error', 'never'],
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      { accessibility: 'explicit' }
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/member-delimiter-style': ['error'],
    'no-restricted-syntax': [
      'error',
      'TSEnumDeclaration',
      'ForInStatement',
      'ForOfStatement',
      'LabeledStatement',
      'WithStatement'
    ]
  }
};
