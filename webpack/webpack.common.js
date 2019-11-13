/* eslint-disable import/no-extraneous-dependencies */
const { join } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const { PATHS } = require('./paths');

module.exports = {
  context: PATHS.src,
  entry: 'index.js',
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/index.html`,
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    modules: [join(PATHS.src), 'node_modules'],
  },
  output: {
    filename: '[name].bundle.js',
    path: PATHS.dist,
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        include: PATHS.src,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
