module.exports = {
  "env": {
    "node": true,
    "browser": true,
    "es2020": true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    // 'next' // FIXME: add for build project but not sure 
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    'import/extensions': 'off',
    'react/function-component-definition': 'off',
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-props-no-spreading': 'warn',
    'react/require-default-props': 'off'
  },
};

