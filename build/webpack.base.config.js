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
<<<<<<< HEAD
      loader: 'vue-loader',
      options: {
        css: 'css-loader',
       'scss': 'css-loader|sass-loader'
      }
=======
      loader: 'vue-loader'
>>>>>>> 732bed97140ea16a324e9c09159ac1ca56d18d09
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node-modules/'
<<<<<<< HEAD
        },

=======
        }
>>>>>>> 732bed97140ea16a324e9c09159ac1ca56d18d09
    ],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'assets/js/[name].js',
  },
};
module.exports = config;
