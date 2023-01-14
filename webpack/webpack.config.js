const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports.config = {
  entry: path.resolve('src/index.tsx'),
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'inline-source-map',
  output: {
    path: path.resolve('build'),
    filename: '[name].[fullhash].js',
    publicPath: 'auto',
    chunkFilename: '[name].[contenthash].js',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, './build'),
    },
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.css', '.jpg', 'png', 'jpeg'],
    alias: {
      events: 'events',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('public/index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        loader: 'url-loader',
      },
      {
        test: /\.m?js$/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
