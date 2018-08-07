const path = require('path') //路径 node 管理包
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const glob = require('glob');
const PurifyCSSPlugin  = require("purifycss-webpack");
const entry = require('./webpack_config/entry_webpack.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');;


module.exports = {
    mode: 'development', //开发/生产
    entry:entry,
    entry:{               //入口
        index:'./src/index.js', //./当前级
        index2: './src/index2.js'
    },
    output:{
        path: path.resolve(__dirname,'./dist'),
        filename: '[name].js',
        publicPath: 'http://127.0.0.1:8081/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // use: ['style-loader', 'css-loader']
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader:'css-loader',
                        options: {
                            importLoaders:1
                        }
                    },'postcss-loader']
                })
            }, 
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 500,
                            outputPath: 'img/'
                        }
                    }

                ]
            }, {
                test: /\.(htm|html)$/,
                loader: 'html-withimg-loader'
            },{
                test:/\.scss/,
                // use:['style-loader','css-loader','sass-loader']
                use:ExtractTextWebpackPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','sass-loader']
                })
            }, {
                test: /\.(jsx|js)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'env', 'react'
                        ]
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks:['index'],
            title: 'index -- title',
            minify:{
                removeAttributeQuotes: true,
                collapseWhitespace: false
            },
            hash: true,
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'index2.html',
            chunks: ['index2'],
            title: 'index2 -- title',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: false
            },
            hash: true,
            template: './src/index2.html'
        }),
        new ExtractTextWebpackPlugin('css/index.css'),
        new PurifyCSSPlugin({
            paths: glob.sync(path.join(__dirname,'src/*.html'))
        }),
        new webpack.BannerPlugin('司大大'),
        new webpack.ProvidePlugin({
            $:'jquery'
        }),
        new CopyWebpackPlugin([{
            from: __dirname + '/src/public',
            to: './public'
        }])
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        host: '127.0.0.1',
        port: '8081',
        compress: true,
        open: true,
        hot: true
    },
    // watchOptions:{
    //     poll:1000,
    //     aggregreateTimeout:500,
    //     ignored:/node_modules/,
    // }
};
