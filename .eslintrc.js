module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 0,
    'no-use-before-define': 1,
    'no-underscore-dangle': 0,
    'no-unused-vars': 1,
    'class-methods-use-this': 0,
  },
};
