'use strict';

let path = require('path');
let webpack = require('webpack');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');
let ManifestPlugin = require('webpack-manifest-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let __DEV__ = process.env.NODE_ENV !== 'production';

// Will be rendered debug console in DEV mode
let DevFlagPlugin = new webpack.DefinePlugin({
    __DEV__: __DEV__
});

const srcPath = path.resolve(__dirname, './src');
const buildPath = path.resolve(__dirname, './public/assets');

let pathsToClean = [buildPath];

// the clean options to use
let cleanOptions = {
    root: __dirname,
    allowExternal: true
};

module.exports = {
    entry: {
        app: [srcPath + '/index.js'],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: buildPath + '/js/',
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: '/assets/js/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options : {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s?[ac]ss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: !__DEV__
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [require('autoprefixer')],
                        }
                    },
                    {
                        loader: 'sass-loader'
                    },
                    {
                        loader: 'import-glob-loader'
                    }
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader'
                    },
                ],
            },

        ]
    },

    plugins: [
        DevFlagPlugin,
        new ManifestPlugin(),
        new CleanWebpackPlugin(pathsToClean, cleanOptions)
    ],

    optimization: {
        minimize: !__DEV__,
        minimizer: [
            new UglifyJsPlugin({
                test: /\.(js|jsx)$/,
                cache: true,
                parallel: true,
                sourceMap: true,
                uglifyOptions: {
                    exclude: [/\.min\.js$/gi],
                    mangle: true,
                    output: {
                        comments: false
                    },
                    compress: {
                        unused: true,
                        dead_code: true,
                        warnings: false,
                        drop_debugger: true,
                        conditionals: true,
                        evaluate: true,
                        drop_console: true,
                        sequences: true,
                        booleans: true
                    }
                }
            })
        ]
    },

    devtool: (__DEV__ ? 'source-map' : ''),

    performance: {
        hints: !__DEV__ ? 'warning' : false
    }
};
