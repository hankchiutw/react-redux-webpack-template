"use strict";

const path = require('path');
const webpack = require('webpack');

let config = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, './docs'),
    filename: "bundle.js",
    publicPath: '/'
  },
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      path.join(__dirname, './'),
      'node_modules'
    ]
  },
  plugins: [
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: [
            'es2015',
            'react'
          ]
        }
      },
      {
        test: /\.jsx$/,
        include: path.join(__dirname, 'src'),
        use: [
          "react-hot-loader",
          {
            loader: "babel-loader",
            options: {
              presets: [
                'es2015',
                'react'
              ]
            }
          }
        ]
      },
      {
        test: /\.md$/,
        loader: "raw-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader"
      }
    ]
  }
};

if (process.env.NODE_ENV == 'prod') {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    minimize: true
  }));
}

module.exports = config;
