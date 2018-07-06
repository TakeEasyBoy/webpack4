const path = require('path');
// 生成新的index.html文件.
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 清理dist文件夹插件
const CleanWebpackPlugin = require('clean-webpack-plugin');
// 分离 csss插件
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const webpack = require('webpack')
module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        // filename:'bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    // devtool:'inline-source-map',
    mode: "production",
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // new ExtractTextPlugin("style.css")  等同于
        new ExtractTextPlugin({
            filename:"style.css"
        })
    ],
    module: {
        rules: [{
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
    }
}