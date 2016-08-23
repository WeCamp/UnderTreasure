'use strict';

const CleanPlugin = require('clean-webpack-plugin');
const exec = require('sync-exec');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const glob = require('glob');
const path = require('path');
const webpack = require('webpack');

const PROD = (process.env.NODE_ENV === 'production');

module.exports = {
  context: path.join(__dirname, 'src'),

  entry: {
    'underPressure': './index.js',
  },

  output: {
    publicPath: '//localhost:3000/',
    path: path.join(__dirname, 'dist'),
    filename: '/js/[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      },
      //{
      //  test: /\.styl$/,
      //  loader: ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader"),
      //  exclude: /(node_modules)/
      //},
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(ico|jpg|png)$/,
        loader: 'file?name=/[path][name].[ext]'
      },

      {
        test: /\.(otf|ttf|eot|svg|woff(2)?)/,
        loader: "file?name=fonts/[name].[ext]",
      },

    ]
  },
  plugins: [
    new CleanPlugin(['dist/css', 'dist/fonts', 'dist/images', 'dist/js']),
    new ExtractTextPlugin('css/[name].css', { allChunks: false }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
    })
  ],

  resolve: {
    extensions: ['', '.js', '.json', '.vue'],
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
  }
};
