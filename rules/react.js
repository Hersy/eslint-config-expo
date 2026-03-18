module.exports = {
  extends: ['airbnb/hooks', 'expo'],
  rules: {
    'react/checked-requires-onchange-or-readonly': 'warn',
    'react/forbid-prop-types': [
      'warn',
      {
        forbid: ['any', 'array', 'object'],
        checkContextTypes: true,
        checkChildContextTypes: true,
      },
    ],
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/forward-ref-uses-ref': 'warn',
    'react/hook-use-state': ['warn', { allowDestructuredState: true }],
    'react/iframe-missing-sandbox': 'warn',
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-no-leaked-render': ['error', { validStrategies: ['coerce'] }],
    'react/jsx-props-no-spread-multi': 'warn',
    'react/no-object-type-as-default-prop': 'warn',
    'react/sort-default-props': ['warn', { ignoreCase: true }],
  },
};
