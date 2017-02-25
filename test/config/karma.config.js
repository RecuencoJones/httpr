const webpackConfig = require('../../build/webpack.config');

module.exports = (config) => {
  config.set({
    basePath: '../../',

    plugins: ['karma-*'],

    frameworks: [
      'mocha',
      'chai',
      'sinon'
    ],

    files: [
      'node_modules/es6-promise/dist/es6-promise.auto.min.js',
      'node_modules/lodash/lodash.min.js',
      'test/specs/unit/**/*.spec.ts'
    ],

    webpack: webpackConfig,

    preprocessors: {
      'test/**/*.ts': ['webpack']
    },

    reporters: [
      'dots'
    ],

    browsers: [
      'PhantomJS'
    ],

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: true
  });
};
