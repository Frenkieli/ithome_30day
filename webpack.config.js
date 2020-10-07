/* webpack.config.js ： Webpack 的設定檔 */
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

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

const clientConfig = {
  target: 'web',
  devtool: 'eval-source-map',
  entry: {
    'index': path.join(__dirname, 'src/client/main.js')
  },
  output: {
    path: path.join(__dirname, 'dist/public'),
    filename: './javascripts/[name].bundle.js',
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: [
          {
            loader: 'vue-loader',
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.scss|\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '/images/' + '[name][hash].[ext]'
        },
      },
    ],
  }
}
module.exports = [serverConfig, clientConfig];