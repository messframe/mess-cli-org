'use strict';
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const vueLoaderConfig = require('./vue-loader');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const markdownLoaderConfig = require('./markdown-loader');


let webpackConfig = merge(common, {
    devtool: false,
    entry:{
        MessOrg: './src/site/main.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: './[name].js'
    },
    
    module: {
        rules: vueLoaderConfig.styleLoaders()
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            },
        }),
        new CleanWebpackPlugin(['dist'],{
            root: path.resolve(__dirname, "../")
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, `../src/site/entry.html`),
            inject: true,
            title: 'MessOrg'
        })
    ]
});

webpackConfig.module.rules.push(markdownLoaderConfig);
module.exports = webpackConfig;