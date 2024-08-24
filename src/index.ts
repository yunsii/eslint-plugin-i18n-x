import hello from './rules/hello'

import type { ESLint } from 'eslint'

export default {
  rules: {
    [hello.name]: hello.module,
  },
} satisfies ESLint.Plugin
