
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: ['@babel/polyfill', './src/js/index.js'],  // adding multiple entry points using an array 
    output: {
        path: path.resolve(__dirname, 'dist'),   // must be an absolute path using path node package
        filename: 'js/bundle.js'
        },
        devServer: {
            contentBase: './dist'
        },
    plugins: [
        new HtmlWebpackPlugin ({
            filename: 'index.html',
            template: './src/index.html'
        }),
    ],
    module: {
        rules: [
            {   test: /\.js$/,   // regular expression so the " /   /  mark the regular expression"
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },

        ],
    }
};