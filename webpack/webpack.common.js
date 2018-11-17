const path = require('path');
const OfflinePlugin = require('offline-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  entry: [
    './src/main.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [/(node_modules)/, /\.spec\.js$/],
        include: [
          path.resolve(__dirname, '../js')
        ],
        use: []
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader' // compiles Sass to CSS
          }
        ]
      }
    ]
  },
  plugins: [
    new OfflinePlugin({
      externals: ['./', 'https://use.fontawesome.com/releases/v5.4.2/css/all.css']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('./index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, '../'),
    compress: true,
    historyApiFallback: true
  }
};
