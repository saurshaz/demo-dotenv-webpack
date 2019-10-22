const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');


require('dotenv').config();

module.exports = {
    mode: 'development',
    context: path.join(__dirname, 'src'),
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpeg)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body',
        }),
        new Dotenv({
            path: './.env.prod'
        })
    ]
}