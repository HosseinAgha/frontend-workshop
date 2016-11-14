var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
    {
      test: /\.ls$/,
      loader: 'livescript',
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.styl$/,
      loader: "style!css?module&sourceMap&localIdentName=[path]_[name]_[local]_[hash:base64:3]!stylus",
      exclude: /node_modules/
    }
    ]
  }
};
