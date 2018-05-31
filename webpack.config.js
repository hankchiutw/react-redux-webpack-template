const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let config = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './docs'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: './'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './docs',
    hot: true
  },
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'src/styles'),
      path.join(__dirname, './'),
      'node_modules'
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CopyWebpackPlugin([
      { from: 'src/*.png', flatten: true },
      { from: 'src/images', to: 'images' },
      'src/favicon.ico',
      'src/manifest.json'
    ]),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: [
            'es2015',
            'react',
            'stage-0'
          ]
        }
      },
      {
        test: /\.jsx$/,
        include: path.join(__dirname, 'src'),
        use: [
          'react-hot-loader',
          {
            loader: 'babel-loader',
            options: {
              presets: [
                'es2015',
                'react',
                'stage-0'
              ]
            }
          }
        ]
      },
      {
        test: /\.md$/,
        loader: 'raw-loader'
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
};

module.exports = config;
