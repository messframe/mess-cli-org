'use strict';
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const vueLoaderConfig = require('./vue-loader');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const markdownLoaderConfig = require('./markdown-loader');


let webpackConfig = merge(common, {
    devtool: 'cheap-module-eval-source-map',
    entry:{
        site: './src/site/main.js'
    },
    output: {
        path: path.resolve(__dirname, '../src/site/'),
        filename: './[name].[hash].js'
    },
    
    devServer: {
        clientLogLevel: 'warning',
        contentBase: path.join(__dirname, "../src"),
        historyApiFallback: true,
        hot: true,
        compress: false,
        host: '0.0.0.0',
        port: 4000,
        open: false,
        overlay: true,
        publicPath: '/',
        proxy: {},
        watchOptions: {
            poll: process.platform==='linux',
        }
    },
    module: {
        rules: vueLoaderConfig.styleLoaders()
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            },
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, `../src/site/entry.html`),
            inject: true,
            title: 'demo'
        })
    ]
});

webpackConfig.module.rules.push(markdownLoaderConfig);
module.exports = webpackConfig;