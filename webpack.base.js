const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 分离 csss插件   "extract-text-webpack-plugin": "^4.0.0-beta.0", 默认 yarn add extract-text-webpack-plugin安装的版本是 3.0.2不支持webpack4.0.0+
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const getView =require('./mutipleEntry.js')
let entries = getView('./src/js/*.js')
let htmls = getView('./src/views/*.html')
let plugins = [];;
console.log(htmls);
for (const key in htmls) {
    let ele = htmls[key]
    plugins.push(
        new HtmlWebpackPlugin({
            filename:`${key}.html`,
            title:"production",
            template:ele,
            chunks:[`${key}`],
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
        })
    )
}
module.exports = {
    entry: entries,
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        ...plugins,
        // new ExtractTextPlugin("style.css")  等同于
        new ExtractTextPlugin({
            filename:"css/[name].min.css",
        }),
    ],
    // commonchunkplugin被废弃
    optimization: {
        runtimeChunk: {
            name: "manifest"
        },
        minimizer:[
            new OptimizeCSSAssetsPlugin({})
        ],
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all"
                }
            }
        }
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath:'/dist/'
    }
};