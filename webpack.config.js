const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require("vue-loader");

module.exports = {
    mode: "production",
    devtool: "source-map",
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].chunk.js',
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html' // to import index.html file inside index.js
        }),
        new VueLoaderPlugin(),
    ],
    devServer: {
        port: 3039 // you can change the port
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: {
                    loader: 'vue-loader',
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
        ]
    },
};