module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: { 
    project: './tsconfig.json', 
    sourceType: 'module' 
  },
  "env": {
    "node": true, 
    "browser": true,
    "es2020": true,
  },
  plugins: ['react', '@typescript-eslint'],
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": ["ts", "tsx"] }],
    "arrow-parens": ["warn", "as-needed"],
    "no-unused-vars": ["off"],
    "no-console": ["off"],
    "import/prefer-default-export": ["off"],
    "react-hooks/exhaustive-deps": ["warn"],
    "react/jsx-props-no-spreading": ["warn"],
    "react/prop-types": ["off"],
    'no-underscore-dangle': ['off'],
    "indent": ['error', 2],
  },
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": ["node_modules", "."]
      },
      "typescript": {} // ts import issue fix
    }
  }
};