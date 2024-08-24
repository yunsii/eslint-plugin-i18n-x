import { defineRule } from '../helpers'

let warnedForMissingVersion = false

export default defineRule({
  name: 'hello',
  module: {
    meta: {
      type: 'suggestion',
      docs: {
        description: 'Hello world',
      },
    },
    create() {
      if (!warnedForMissingVersion) {
        console.warn('Warning: eslint plugin starter created')
        warnedForMissingVersion = true
      }
      return {
        Program() {},
      }
    },
  },
})
