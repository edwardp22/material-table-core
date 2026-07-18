const path = require('path');

module.exports = {
  entry: [path.resolve(__dirname, './demo.js')],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname)
    },
    hot: true,
    allowedHosts: 'all',
    port: 8080,
    open: false
  }
};
