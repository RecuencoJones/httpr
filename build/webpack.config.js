const _ = require('lodash'),
  pkg = require('../package.json');

module.exports = {
  entry: {
    [pkg.name]: './app/Index.ts'
  },
  output: {
    filename: '[name].js',
    path: './dist/',
    libraryTarget: 'umd',
    library: _.camelCase(pkg.name)
  },
  externals: {
    'lodash': {
      root: '_',
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash'
    }
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }
};
