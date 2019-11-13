/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');

const common = require('./webpack.common.js');

const PATHS = require('./paths');

const devPort = 9090;
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  optimization: {
    usedExports: true,
  },
  devServer: {
    contentBase: PATHS.dist,
    port: devPort,
  },
  plugins: [
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
      allowAsyncCycles: false,
      cwd: PATHS.src,
    }),
    new DuplicatePackageCheckerPlugin({ strict: true }),
  ],
});
