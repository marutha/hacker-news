const { join } = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('../common');
const nodeExternals = require('../../scripts/node-externals');

module.exports = merge(common, {
    name: 'server',
    target: 'node',
    externals: nodeExternals,
    entry: [
        join(__dirname, '../../src/server/index')
    ],
    output: {
        filename: 'app.server.js',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: /\.styl$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            },
                            onlyLocals: true,
                        },
                    },
                    'postcss-loader',
                ],
            },
        ],
    },
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1,
        }),
    ],
});
