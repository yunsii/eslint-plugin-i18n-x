import type { Rule } from 'eslint'

export interface DefineRuleOptions {
  name: string
  module: Rule.RuleModule
}

export function defineRule(options: DefineRuleOptions) {
  return options
}
