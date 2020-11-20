const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin') // Перекидывает файлы в бандл
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // Экспортирует стили в отдельный файл
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin') // Указывается в optimization

module.exports = {
    mode: "development",
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src') // Сокращение для относительных путей
        }
    },
    optimization: {
        splitChunks: {
            chunks: "all", // Выводит повторяющийся код в отдельные вендорные файлы
        },
        minimize: true,
        minimizer: [
            new CssMinimizerWebpackPlugin(),
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: "./src/index.html",
            }
        ),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin(
            { // Перекидывает файлы в бандл
                patterns: [
                    {
                        from: path.resolve(__dirname, "./src/favicon.ico"),
                        to: path.resolve(__dirname, "./dist")
                    }
                ]
            }),
        new MiniCssExtractPlugin(
            {
                filename: "[name].[contenthash].css",
            }
        ),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '', // Без этой строки не работало
                        }
                    },
                    'css-loader',
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
    ,
    devServer: {
        port: 4200, // Запускается командой webpack solve
    }

}