import { AST_NODE_TYPES } from '@typescript-eslint/utils'

import { createRule, getTaggedTemplateExpressionTag, isExcludeCommentInside } from '../helpers'

// ref: https://github.com/typescript-eslint/examples/blob/main/packages/eslint-plugin-example-typed-linting/src/rules/no-loop-over-enum.ts
export const rule = createRule({
  create(context) {
    return {
      TemplateLiteral(node) {
        const parentNode = node.parent
        if (parentNode.type === AST_NODE_TYPES.TaggedTemplateExpression) {
          const tag = getTaggedTemplateExpressionTag(parentNode)

          if (!tag) {
            return
          }

          if (typeof tag === 'string') {
            if (tag === 't' && node.quasis.every((item) => !item.value.raw.trim())) {
              return context.report({
                messageId: 'uselessI18nMessage',
                node,
              })
            } else {
              // ignore
              return
            }
          }
          if (tag.name === 't' && node.quasis.every((item) => !item.value.raw.trim())) {
            return context.report({
              messageId: 'uselessI18nMessage',
              node,
            })
          }
        } else if (isExcludeCommentInside(parentNode, context)) {
          // ignore
        } else {
          return context.report({
            messageId: 'i18nMessage',
            node,
          })
        }
      },
    }
  },
  meta: {
    docs: {
      description: 'Lingui style checker',
    },
    messages: {
      i18nMessage: 'Need transform to lingui style',
      uselessI18nMessage: 'Useless lingui style',
    },
    type: 'problem',
    schema: [],
  },
  name: 'lingui-style',
  defaultOptions: [],
})
