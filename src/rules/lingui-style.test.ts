/* eslint-disable no-template-curly-in-string */
import { run } from 'eslint-vitest-rule-tester'
import * as tsParser from '@typescript-eslint/parser'

import { rule } from './lingui-style'

run({
  name: 'lingui-style TemplateLiteral',
  rule,
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    } satisfies tsParser.ParserOptions,
  },
  valid: [
    'const str = t`hello`',
    'const str = t`${name} hello`',
    'const str = t()`hello`',
    'const str = t`${bool ? t`${name} hello` : 2} hello`',

    'const str = /* i18n-exclude */ `hello`',
    'const str = cls`hello`',
    'const str = cls()`hello`',
    'const str = cls`hello ${name}`',
    'const str = cls()`hello ${name}`',

    'const dom = <div>{t`hello`}</div>',
    'const dom = <div>{t()`hello`}</div>',

    'const dom = <div>{/* i18n-exclude */ `hello`}</div>',
    'const dom = <div>{t`hello`}</div>',
    // 'const dom = <div className={`hello`}>{t`hello`}</div>',  // todo
    'const dom = <div className={cls`hello`}>{t`hello`}</div>',
    'const dom = <div className={cls()`hello`}>{t`hello`}</div>',
    'const dom = <div className={cls`hello ${name}`}>{t`hello`}</div>',
    'const dom = <div className={cls()`hello ${name}`}>{t`hello`}</div>',
  ],
  invalid: [
    { code: 'const str = t`${name}`', errors: [{ messageId: 'uselessI18nMessage' }] },
    { code: 'const str = t` ${name} `', errors: [{ messageId: 'uselessI18nMessage' }] },
    { code: 'const str = t`${name} ${name}`', errors: [{ messageId: 'uselessI18nMessage' }] },
    { code: 'const str = t`${bool ? 1 : 2}`', errors: [{ messageId: 'uselessI18nMessage' }] },
    { code: 'const str = t`${bool ? t`${name} hello` : 2}`', errors: [{ messageId: 'uselessI18nMessage' }] },
    { code: 'const str = t`${bool ? t`${name}` : 2}`', errors: [{ messageId: 'uselessI18nMessage' }, { messageId: 'uselessI18nMessage' }] },
    { code: 'const str = t()`${name}`', errors: [{ messageId: 'uselessI18nMessage' }] },
    { code: 'const str = `hello`', errors: [{ messageId: 'i18nMessage' }] },
    { code: 'const str = `hello ${name}`', errors: [{ messageId: 'i18nMessage' }] },
    { code: 'const dom = <div>{`hello`}</div>', errors: [{ messageId: 'i18nMessage' }] },
    { code: 'const dom = <div>{`hello ${name}`}</div>', errors: [{ messageId: 'i18nMessage' }] },
  ],
})
