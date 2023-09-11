module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  plugins: ['prettier'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  rules: {
    semi: ['warn', 'never'],
    quotes: ['warn', 'single'],
    'prettier/prettier': ['error'],
    'vue/require-default-prop': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-indent': ['error', 4],
    'vue/singleline-html-element-content-newline': 0,
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'import/newline-after-import': ['error', { count: 1 }],
    'object-shorthand': ['error', 'always'],
    'vue/html-quotes': ['error', 'double', { avoidEscape: false }],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 1,
        multiline: 1,
      },
    ],
  },
  globals: {
    _: true,
  },
}
