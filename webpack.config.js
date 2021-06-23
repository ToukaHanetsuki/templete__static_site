/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const outputPath = path.join(__dirname, 'dist');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/main.ts',
  output: {
    publicPath: '/',
    filename: 'bundle.[contenthash].js',
    path: outputPath
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ['ts-loader']
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
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
              postcssOptions: {
                plugins: [
                  require('autoprefixer')({
                    grid: true
                  }),
                  require('cssnano')
                ]
              }
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
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new Dotenv({ safe: true, allowEmptyValues: true, systemvars: true }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.[contenthash].css'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: './src/static',
          to: path.join(outputPath, 'static')
        }
      ]
    })
  ],
  devServer: {
    contentBase: outputPath,
    watchContentBase: true,
    port: 3000
  },
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    }
  }
};
