const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: "./main.module.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                  presets: 'es2015',
                },
            }
        ]
    }
};
