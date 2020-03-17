module.exports = {
  root: true,
  extends: [
    'standard-with-typescript',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/standard'
  ],
  parserOptions: {
    project: './tsconfig.json'
  }
}
