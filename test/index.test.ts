import { $, createRuleTester } from 'eslint-vitest-rule-tester'
import { describe, it } from 'vitest'

import hello from '../src/rules/hello'

describe(hello.name, () => {
  const { valid } = createRuleTester({
    name: hello.name,
    rule: hello.module,
  })

  it('valid case 1', () => {
    valid($`
      const foo = 1
    `)
  })
})
