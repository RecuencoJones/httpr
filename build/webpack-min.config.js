const webpack = require('webpack'),
  webpackConfig = require('./webpack.config');

webpackConfig.output.filename = '[name].min.js';

webpackConfig.plugins = [
  new webpack.optimize.UglifyJsPlugin()
];

module.exports = webpackConfig;
