/* webpack.config.js ： Webpack 的設定檔 */
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');
const serverConfig = {
  target: 'node',
  entry: {
    'index': './src/www'
  },
  node: {
    __dirname: false,
    __filename: true,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    // 獲取絕對路徑的方法
    filename: '[name].bundle.js'
  },
  externals: [nodeExternals()],
  module: {   //設定你的檔案選項
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.join(__dirname, 'src/server/views'), to: path.join(__dirname, 'dist/views') },
        { from: path.join(__dirname, 'src/client/static'), to: path.join(__dirname, 'dist/public') },
      ]
    })
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
}
module.exports = [serverConfig];