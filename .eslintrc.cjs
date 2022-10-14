module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  'overrides': [
    {
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/no-namespace': 'off'
      }
    },
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint',
    'grouped-import'

  ],
  'rules': {
    'indent': [
      'error',
      'tab',

    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'grouped-import/group': [
      'error',
      {
        hooks: [{path: '~hooks'}, {path: './hooks'}],
        pages: [{path: '~pages'}, {path: './pages'}],
        elements: [{path: '~elements'}, {path: './elements'}],
        components: [{path: '~components'}, {path: './components'}],
        ui: [{path: '~ui'}, {path: './ui'}],
        ux: [{path: '~ux'}, {path: './ux'}],
        types: [{path: '~types'}, {path: './types'}],
        sections: [{path: '~sections'}, {path: './sections'}],
        seo: [{path: '~seo'}, {path: './seo'}],
      }
  ]
      }
  }
