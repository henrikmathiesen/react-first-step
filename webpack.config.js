/// <reference path="typings/tsd.d.ts" />
// Loosely based on https://gist.github.com/learncodeacademy/25092d8f1daf5e4a6fd3

var isDebug = process.env.NODE_ENV !== "production"; // console: set NODE_ENV=production -> npm run webpack
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, 'webpackworkflow/src/app.js'),
    output: { path: path.resolve(__dirname, 'webpackworkflow/bld'), filename: 'bundle.js' },

    devtool: isDebug ? "inline-sourcemap" : null,
    plugins: isDebug ? [] : [
        new webpack.DefinePlugin({  'process.env.NODE_ENV': '"production"'}),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
    ],
    watch: isDebug,

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