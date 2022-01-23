const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { DefinePlugin } = require('webpack')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'assets/js/[name].[contenthash:6].js',
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        use: 'vue-loader',
      },
      {
        test: /.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /.(png|jpe?g|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[contenthash:6][ext]',
        },
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash:6].css'
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack5 + vue3',
      template: path.resolve(__dirname, './public/index.html'),
    }),
    new VueLoaderPlugin(),
    new DefinePlugin({
        __VUE_OPTIONS_API__: true, 
        __VUE_PROD_DEVTOOLS__: false,
    }),
  ],
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all',
    },
  },
}
