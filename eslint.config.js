import antfu from '@antfu/eslint-config'

export default antfu({
  vue: {
    overrides: {
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: { max: 1 },
          multiline: { max: 1 },
        },
      ],
      'vue/no-restricted-syntax': [
        'error',
        {
          selector: 'VElement[name="a"]',
          message: 'Use NuxtLink instead.',
        },
      ],
    },
  },
  ignores: [
    'public',
    'dist',
    '*.css',
    'node_modules/',
  ],
}, {
  rules: { 'no-console': ['warn', { allow: ['info'] }] },
})
