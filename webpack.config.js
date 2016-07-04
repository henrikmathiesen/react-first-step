/// <reference path="typings/tsd.d.ts" />

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, 'webpackworkflow/src/app.js'),
    output: { path: path.resolve(__dirname, 'webpackworkflow/bld'), filename: 'bundle.js' },
    watch: true,

    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, 'webpackworkflow/src')
                ],
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}