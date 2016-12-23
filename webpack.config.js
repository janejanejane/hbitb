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
      './box-app/index.js',
    ],
    'vendor': [
      'three',
    ],
  },
  output: {
    path: path.join( __dirname, 'dist' ),
    filename: '[name].js',
    publicPath: '/dist',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin( 'vendor', 'vendor.bundle.js' ),
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join( __dirname ),
      exclude: /node_modules/,
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
