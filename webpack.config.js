require('dotenv').config();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/main.js',
  output: {
    filename: 'main.bundle.js',
    path: path.join(__dirname, 'public/')
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                require('autoprefixer')({
                  grid: true
                }),
                require('cssnano')
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath : 'assets/img/'
            },
          }
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath : 'assets/font/'
            },
          }
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './style.bundle.css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    watchContentBase: true
  }
};