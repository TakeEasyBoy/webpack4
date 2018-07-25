const webpack = require('webpack');
const merge = require('webpack-merge');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.js');
const env = config.build[process.env.env_config + 'Env']

module.exports = merge(baseWebpackConfig, {
    mode:"production",
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': env
        }),
        new CleanWebpackPlugin(['dist']),
        // new ExtractTextPlugin("style.css")  等同于
        new ExtractTextPlugin({
            filename:utils.assetsPath("css/[name].[contenthash].css"),
        }),
        new CopyWebpackPlugin([
            {from:'../src/assets/public',to:'../static'}
        ]),
        new webpack.HashedModuleIdsPlugin()
    ],
    // commonchunkplugin被废弃
    optimization: {
        runtimeChunk:{
            name:'manifest'
        },
        minimizer:[
            new OptimizeCSSAssetsPlugin({})
        ],
        minimize:true,
        splitChunks: {
            chunks: "async",
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '.',
            name: true,
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "async"
                }
            }
        }
    },
});