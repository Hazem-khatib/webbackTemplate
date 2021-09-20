const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')

module.exports = {
        entry: './src/main.ts',
        devtool: 'inline-source-map',
        module: {
                rules: [
                        {
                                test: /\.ts?$/,
                                use: 'ts-loader',
                                exclude: /node_modules/,
                        },
                ],
        },
        resolve: {
                extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
                filename: 'bundle.js',
                path: path.resolve(__dirname, 'dist'),
        },
        plugins: [
                new HtmlwebpackPlugin({
                        template: './index.html',
                        inject: 'body',
                }),
        ],
        devServer: {
                static: {
                        directory: path.join(__dirname, 'public'),
                },
                compress: true,
                port: 9000,
        },
}
