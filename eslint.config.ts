import janna from '@jannajs/lint/eslint'
import starter from 'starter-eslint-plugin'

export default janna({}, {
  plugins: {
    starter,
  },
  rules: {
    'starter/hello': 'warn',
  },
})
