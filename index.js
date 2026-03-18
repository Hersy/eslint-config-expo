module.exports = {
  extends: [
    './rules/base',
    './rules/jsx-a11y',
    './rules/react',
    './rules/react-perf',
    './rules/imports',
    './rules/styles',
    './rules/prettier',
  ].map(require.resolve),
  parserOptions: {
    ecmaFeatures: { impliedStrict: true, jsx: true },
    sourceType: 'module',
  },
  env: {
    commonjs: true,
    node: true,
  },
  overrides: [
    {
      files: ['*.test.{js,ts}'],
      extends: './rules/jest',
    },
  ],
};
