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
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
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
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     project: './tsconfig.json',
//     sourceType: 'module'
//   },
//   plugins: ['react', '@typescript-eslint'],
//   extends: [
//     'airbnb-base',
//     'plugin:@typescript-eslint/eslint-recommended',
//   ],
//   "rules": {
//     "import/extensions": ["error", "never"],
//     "react/jsx-filename-extension": [1, { "extensions": ["ts", "tsx"] }],
//     "arrow-parens": ["warn", "as-needed"],
//     "no-unused-vars": ["off"],
//     "no-console": ["off"],
//     "import/prefer-default-export": ["off"],
//     "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
//     "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
//     "react/jsx-props-no-spreading": ["warn"],
//     "react/prop-types": ["off"],
//     'no-underscore-dangle': ['off'],
//     "indent": ['error', 2],
//   },
//   "settings": {
//     "import/resolver": {
//       "node": {
//         "moduleDirectory": ["node_modules", "."]
//       },
//       "typescript": {} // ts import issue fix
//     }
//   }
// };
