module.exports = {
  extends: 'airbnb-base',
  env: {
    'jest/globals': true
  },
  parser: 'typescript-eslint-parser',
  plugins: [
    'typescript',
    'jest',
  ],
  rules: {
    semi: ['error', 'never'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts'
        ]
      }
    }
  }
};