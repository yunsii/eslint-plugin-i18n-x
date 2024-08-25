# eslint-plugin-i18n-x

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

Starter template for eslint plugin

## Usages

### Install

```bash
npm i -D eslint-plugin-i18n-x
```

### Configure

We recommend using [ESLint's Flat Config format](https://eslint.org/docs/latest/use/configure/configuration-files-new).

```ts
// eslint.config.js
import i18nX from 'eslint-plugin-i18n-x'

export default [
  {
    plugins: {
      'i18n-x': i18nX,
    },
    rules: {
      'i18n-x/lingui-style': 'warn',
    },
  },
]
```

## Rules

| Name                                       | Description                 |
| :----------------------------------------- | :-------------------------- |
| [lingui-style](docs/rules/lingui-style.md) | I18n message Lingui checker |

## ASTs and typescript-eslint

[Typescript-eslint playground](https://typescript-eslint.io/play#showAST=es)

## License

[MIT](./LICENSE) License © 2024-PRESENT [Yuns](https://github.com/yunsii)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/eslint-plugin-i18n-x?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/eslint-plugin-i18n-x
[npm-downloads-src]: https://img.shields.io/npm/dm/eslint-plugin-i18n-x?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/eslint-plugin-i18n-x
[bundle-src]: https://img.shields.io/bundlephobia/minzip/eslint-plugin-i18n-x?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=eslint-plugin-i18n-x
[license-src]: https://img.shields.io/github/license/antfu/eslint-plugin-i18n-x.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/antfu/eslint-plugin-i18n-x/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/eslint-plugin-i18n-x
