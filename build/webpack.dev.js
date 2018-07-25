const merge = require('webpack-merge');
const config = require('../config')
const utils = require('./utils')
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const env = config.dev.env
// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function(name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  mode:"development",
  plugins:[
      new CleanWebpackPlugin(['dist']),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
          'process.env': env
      }),
  ],
  devtool: 'inline-source-map',
  module:{
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
});