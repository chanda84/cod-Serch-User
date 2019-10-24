const HtmlWebpackPlugin = require ('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry:'./src/app/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundel.js'
    },
    devServer:{port:1347},
    plugins:[new HtmlWebpackPlugin({template: './src/index.html'})
    ]
}