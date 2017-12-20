module.exports = {
    entry: './crs/index.jsx',
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
            }
        ]
    }
}