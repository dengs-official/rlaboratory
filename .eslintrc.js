module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
    es6: true
  },

  extends: [
    'eslint:recommended',
    'airbnb',
  ],

  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    }
  },

  plugins: [
    "react"
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "linebreak-style": ["off","unix"],
    "quotes": ["error","single"],
    "semi": ["error","always"],
    "no-tabs": "off",
    "no-underscore-dangle":0,
    "arrow-body-style": [2, "as-needed"],
    "no-alert":"error",
    "no-param-reassign": 0,
    "no-restricted-syntax": 0,
    "guard-for-in": 0,
    "consistent-return":0,
    "prefer-rest-params":0,
    "no-return-await":0,
    "no-use-before-define": 0,
    "no-trailing-spaces": 0,
    "object-curly-newline": 0,
    "jsx-a11y/no-static-element-interactions":0,
    "jsx-a11y/click-events-have-key-events":0,
    "lines-between-class-members":0,
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,
    "react/destructuring-assignment": 0,   
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-closing-bracket-location": [1, "after-props"],
    "react/prefer-stateless-function": 0,
    "react/prop-types": [1, { ignore: ["children"]}],
    "react/forbid-prop-types": 0,
    "react/require-default-props":0
  },

  overrides: [
    {
      files: [
        '**/*.test.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
};