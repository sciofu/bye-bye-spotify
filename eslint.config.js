import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
// import tsSortKeys from 'typescript-sort-keys'
// import importSort from 'eslint-plugin-simple-import-sort'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      // 'simple-import-sort': importSort,
      // 'typescript-sort-keys': tsSortKeys
    },
    // rules: {
    //   ...reactHooks.configs.recommended.rules,
    //   'import/first': 'error',
    //   'import/newline-after-import': 'error',
    //   'import/no-duplicates': 'error',
    //   'react/self-closing-comp': [
    //     'warn',
    //     {
    //       component: true,
    //       html: true,
    //     },
    //   ],
    //   'arrow-body-style': ['warn', 'as-needed'],
    // },
  },
)
