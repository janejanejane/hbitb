import webpack from 'webpack';
import path from 'path';

module.exports = {
  devtool: 'eval',
  entry: {
    // 'app': [
    //   'babel-polyfill',
    //   './app.js',
    // ],
    'box-app': [
      'babel-polyfill',
      './box-app.js',
    ],
  },
  output: {
    path: path.join( __dirname, 'dist' ),
    filename: '[name].js',
    publicPath: '/dist',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join( __dirname ),
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
