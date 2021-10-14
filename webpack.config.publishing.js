const path = require('path');
const webpack = require('webpack');

const sourcePath = path.join(__dirname, './oui_notebook');
const outPath = path.join(__dirname, './oui_notebook/js');

module.exports = {
    mode: 'production',
    // optimization: {
    //     minimize: false,
    // },
    context: sourcePath,
    entry: ['./index.ts'],
    output: {
        path: outPath,
        publicPath: '/',
        filename: 'index.js',
    },
    target: 'web',
    resolve: {
        modules: [sourcePath, 'node_modules'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
      rules: [{
        test: /\.tsx?$/,
        loader: 'babel-loader',
        options: {
          plugins: [
            ['@babel/plugin-proposal-decorators', {legacy: true}],
          ],
          presets: [
            '@babel/react',
            '@babel/typescript',
            ['@babel/preset-env', {targets: "defaults"}],
          ],
        },
      }],
    },
    plugins: [],
};
