const path = require('path');

module.exports = {
  'parser': 'babel-eslint',
  'env': {
    'browser': true,
    'node': true,
    'jest': true,
    'es6': true,
  },
  'globals': {
    'amplitude': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  'rules': {
    'quotes': [
      'error',
      'single',
      {
        'allowTemplateLiterals': true,
      },
    ],
    'arrow-parens': [
      'error',
      'always',
    ],
    'arrow-body-style': [
      2,
      'as-needed',
    ],
    'class-methods-use-this': 0,
    'comma-dangle': [
      2,
      'always-multiline',
    ],
    'func-names': [1, 'as-needed', { 'generators': 'as-needed' }],
    'indent': [2, 2],
    'function-paren-newline': 1,
    'object-curly-newline': 0,
    'prefer-destructuring': 1,
    'max-len': 0,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'no-console': 1,
    'no-use-before-define': 0,
    'prefer-template': 2,
    'padded-blocks': 0,
    'require-yield': 0,
  },
  'settings': {
    'import/resolver': {
      'node': {
        'paths': ['src'],
      },
    },
  },
};
