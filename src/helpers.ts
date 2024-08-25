import { AST_NODE_TYPES, ESLintUtils } from '@typescript-eslint/utils'

import { i18nExcludeCommand } from './constants'

import type { TSESTree } from '@typescript-eslint/utils'
import type { RuleContext } from '@typescript-eslint/utils/ts-eslint'

export interface ExampleTypedLintingRuleDocs {
  description: string
  recommended?: boolean
  requiresTypeChecking?: boolean
}

export const createRule = ESLintUtils.RuleCreator<ExampleTypedLintingRuleDocs>(
  (name) =>
    `https://github.com/yunsii/eslint-plugin-i18n-x/blob/main/docs/rules/${name}.md`,
)

export function isExcludeCommentInside(node: TSESTree.Node, context: RuleContext<any, []>) {
  const insideComments = context.sourceCode.getCommentsInside(node)
  return insideComments.some((item) => {
    return item.value.split(' ').some((item) => {
      return i18nExcludeCommand === item.trim()
    })
  })
}

export function getCalleeMeta(node: TSESTree.CallExpression, depth = 0) {
  if (node.callee.type === AST_NODE_TYPES.Identifier) {
    return {
      name: node.callee.name,
      depth,
    }
  }
  if (node.callee.type === AST_NODE_TYPES.CallExpression) {
    return getCalleeMeta(node.callee, depth + 1)
  }
  throw new Error(`Unexpected callee type: ${node.callee.type}`)
}

export function getTaggedTemplateExpressionTag(node: TSESTree.TaggedTemplateExpression) {
  if (node.tag.type === AST_NODE_TYPES.Identifier) {
    return node.tag.name
  }
  if (node.tag.type === AST_NODE_TYPES.CallExpression) {
    const calleeMeta = getCalleeMeta(node.tag)
    return calleeMeta
  }
  return null
}
