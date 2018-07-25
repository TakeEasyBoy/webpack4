const path = require('path');
const utils = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 分离 csss插件   "extract-text-webpack-plugin": "^4.0.0-beta.0", 默认 yarn add extract-text-webpack-plugin安装的版本是 3.0.2不支持webpack4.0.0+
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// 获取多入口
const getView = require('../mutipleEntry.js')
let entries = getView('./src/js/*.js')
let htmls = getView('./src/views/*.html')
let plugins = [];
for (const key in htmls) {
    let ele = htmls[key]
    plugins.push(
        new HtmlWebpackPlugin({
            filename: `${key}.html`,
            title: "production",
            template: ele,
            chunks: "all",
            inject: true,
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

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: entries,
    externals: {
        jquery: 'jQuery',
        echarts: 'echarts'
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                include: [resolve('../src')],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'static/fonts/'
                }

            },
        ]
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            assets: path.resolve(__dirname, '../src/assets/')
        }
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "static/css/[name].min.css",
        }),
        ...plugins
    ],
    output: {
        filename: 'static/js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
};