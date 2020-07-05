const path = require('path');


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        fileName: 'bundle.js',
        publicPath: ''
    },
    devtool: 'cheap-module-eval-source-map', // This is for debugging to work. 
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader', options: {
                            importLoader: 1,
                            modules: {
                                localIdentName: '[name]__[local]__[hash:base64:5]'
                            }
                        }
                    }
                ]
            }
        ]
    }
}