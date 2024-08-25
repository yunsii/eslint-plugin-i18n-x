import { rules } from './rules/index.js'

const { name, version }
  // `import`ing here would bypass the TSConfig's `"rootDir": "src"`
  // eslint-disable-next-line ts/no-require-imports
  = require('../package.json') as typeof import('../package.json')

const plugin = {
  configs: {
    get recommended() {
      // eslint-disable-next-line ts/no-use-before-define
      return recommended
    },
  },
  meta: { name, version },
  rules,
}

const recommended = {
  plugins: {
    'eslint-plugin-i18n-x': plugin,
  },
  rules,
}

export default plugin
