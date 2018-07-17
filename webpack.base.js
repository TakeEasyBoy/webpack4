const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 分离 csss插件   "extract-text-webpack-plugin": "^4.0.0-beta.0", 默认 yarn add extract-text-webpack-plugin安装的版本是 3.0.2不支持webpack4.0.0+
const ExtractTextPlugin = require("extract-text-webpack-plugin");
import getView from './mutipleEntry'
let entries = getView('./src/*.js')
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
        new HtmlWebpackPlugin({
            title: 'Production',
            // 提供一个模板html文件
            template:'./src/index.html'
        }),
        // new ExtractTextPlugin("style.css")  等同于
        new ExtractTextPlugin("style.css")
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};