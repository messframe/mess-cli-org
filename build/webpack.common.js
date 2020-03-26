'use strict';
const path = require('path');
const vueLoaderConfig = require('./vue-loader');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const isDev = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'demo';

let webpackConfig = {
    context: path.resolve(__dirname, '../'),
    entry: {},
    resolve: {
        extensions: ['.js', '.scss', '.sass', '.json', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'theme': path.resolve(__dirname, '../packages/theme'),
            'packages': path.resolve(__dirname, '../packages'),
            'dist': path.resolve(__dirname, "../dist"),
            '@': path.resolve(__dirname, '../src')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [path.resolve(__dirname, '../src'),path.resolve(__dirname, '../packages')],
                options: {
                    /*formatter: require('eslint-friendly-formatter'),
                    emitWarning: !config.dev.showEslintErrorsInOverlay*/
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig.vueLoader
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [path.resolve(__dirname, '../src'),path.resolve(__dirname, '../packages')],
                exclude: [path.resolve(__dirname, '../src/utils/popper.js')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 22000,
                    name: 'img/[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 1000,
                    name: 'fonts/[hash:7].[ext]'
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
                options: {
                    name: 'data/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: `[name].css`
        }),
    ],
    node: {
        setImmediate: false,
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    }
};
module.exports = webpackConfig;