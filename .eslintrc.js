module.exports = {
  extends: [
    '@mate-academy/eslint-config-react-typescript',
    'plugin:react/recommended',
  ],
  rules: {
    // React
    'react/prop-types': 0,
    'react/self-closing-comp': 0,
    'react/display-name': 0,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [0],
    'import/extensions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',

    // JavaScript
    semi: 0,
    'no-proto': 0,
    'no-unused-vars': 0,

    // TypeScript
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/semi': ['error'],
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
};
