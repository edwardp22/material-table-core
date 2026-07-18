/**
 * This file is needed for Jest
 */
module.exports = {
  presets: ['@babel/preset-env', '@babel/react'],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-class-properties',
    '@babel/plugin-transform-object-rest-spread',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@components': './src/components',
          '@store': './src/store',
          '@utils': './src/utils'
        }
      }
    ],
    [
      'import',
      {
        camel2DashComponentName: false,
        libraryDirectory: '',
        libraryName: '@mui/material'
      },
      '@mui/material'
    ],
    [
      'import',
      {
        camel2DashComponentName: false,
        libraryDirectory: '',
        libraryName: '@mui/icons-material'
      },
      '@mui/icons-material'
    ]
  ]
};
