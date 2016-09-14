var path = require('path');
module.exports = {
    entry: './index.js',
    output: {
        path: __dirname,
        filename: './build/vera-3.0.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.html$/,
                loader: "html"
            },
            {
                test: /\.css?$/,
                loader: 'style-loader!css-loader!postcss-loader'
            },
            {
                test: /\.less/,
                loader: 'style-loader!css-loader!autoprefixer-loader!postcss-loader!less-loader'
            },
            {
                test: /\.(woff|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'base64-font-loader'
              },
        ]
    }
};
