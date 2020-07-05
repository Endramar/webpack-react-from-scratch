const path = require('path');


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        fileName: 'bundle.js',
        publicPath: ''
    },
    devtool: 'cheap-module-eval-source-map' // This is for debugging to work. 
}