/* webpack.config.js ： Webpack 的設定檔 */
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const clientConfig = {
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
}
module.exports = [clientConfig];