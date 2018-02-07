const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './Scripts/index.jsx',
    output: {
        path: __dirname + '/public/bundle',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, 
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }, 
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 10000000
                    }
                  }
                ]
            },
            {
                test: /\.(png|jpg)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {}  
                  }
                ]
            }  
        ]
    },
    plugins: [new UglifyJsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
    ]
};//ПРИМЕНИТЬ ДЛЯ SASS