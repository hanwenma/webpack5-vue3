const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { DefinePlugin } = require('webpack')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: '[name].[contenthash:6].js',
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        use: 'vue-loader',
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /.png$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[contenthash:6][ext]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
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
}
