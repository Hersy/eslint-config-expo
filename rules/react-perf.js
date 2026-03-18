module.exports = {
  extends: ['plugin:react-perf/recommended'],
  rules: {
    'react-perf/jsx-no-jsx-as-prop': 'error',
    'react-perf/jsx-no-new-array-as-prop': [
      'warn',
      {
        nativeAllowList: 'all',
      },
    ],
    'react-perf/jsx-no-new-function-as-prop': [
      'warn',
      {
        nativeAllowList: 'all',
      },
    ],
    'react-perf/jsx-no-new-object-as-prop': [
      'warn',
      {
        nativeAllowList: 'all',
      },
    ],
  },
};
