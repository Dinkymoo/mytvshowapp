const path = require('path');

const config = {
  entry: {
    app: path.resolve(__dirname, '../src/client-entry.js'),
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: '/(\.js$)/|/(\.vue$)/',
        loader: 'eslint-loader',
        exclude: '/node-modules/',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          css: 'css-loader',
        'scss': 'sass-loader',
        extractCSS : true
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node-modules/'
      },
    ],
  },
    output: {
      path: path.resolve(__dirname, '../dist'),
      publicPath: '/',
      filename: 'assets/js/[name].js',
    },
};
module.exports = config;
