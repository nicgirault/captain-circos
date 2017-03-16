const webpack = require('webpack')
const path = require('path')
const buildPath = path.resolve(__dirname, 'build')
const nodeModulesPath = path.resolve(__dirname, 'node_modules')
const TransferWebpackPlugin = require('transfer-webpack-plugin')

const config = {
  entry: [
    'webpack/hot/only-dev-server',
    path.join(__dirname, '/src/app.js')
  ],
  devServer: {
    contentBase: 'www',
    hot: true,
    inline: true,
    port: 3000,
    host: 'localhost'
  },
  devtool: 'eval',
  output: {
    path: buildPath,
    filename: 'app.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new TransferWebpackPlugin([
      {from: 'www'}
    ], __dirname)
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot-loader', 'babel-loader'],
        exclude: [nodeModulesPath]
      }
    ]
  }
}

module.exports = config
