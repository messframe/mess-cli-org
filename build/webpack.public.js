"use strict";
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const vueLoaderConfig = require('./vue-loader');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
let webpackConfig = merge(common, {
    devtool: false,
    entry: {
        soon_ui: path.resolve(__dirname,'../src/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../MessOrg'),
        filename: 'messOrg.js',
        library: 'messOrg',
        libraryTarget: 'umd'
    },
    module: {
        rules: vueLoaderConfig.styleLoaders({extract:true})
    },
    externals: [nodeExternals()],
    plugins: [
       
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }), 
        new CleanWebpackPlugin(['MessOrg'],{
            root: path.resolve(__dirname, "../")
        })
    ]
});
module.exports = webpackConfig;