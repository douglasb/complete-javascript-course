const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './src/js/index.js',  // there can be multiple entry points
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
        })
    ]
};