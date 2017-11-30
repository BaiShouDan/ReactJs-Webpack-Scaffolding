const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebPackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: "./src/index.jsx",


    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    devServer: {
        contentBase: './dist',
        hot: true
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".js", ".jsx", ".json"]
    },
    module: {
        rules: [
            //All css documents
            { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },

            //All jsx/js extension
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    plugins: [
        new CleanWebPackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: './src/index.template.ejs',
            inject: 'body',
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
};