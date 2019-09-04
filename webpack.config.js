// eslint-disable-next-line
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

/** @type {webpack.Configuration} */
module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: {
    main: ['./src/js/main.js', './src/scss/main.scss'],
    menu: ['./src/js/main.js', './src/scss/menu.scss'],
    reset: './src/scss/reset.scss',
  },
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    publicPath: '/',
    filename: '[name].js',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              includePaths: [...require('@upstatement/upbase').includePaths],
            },
          },
        ],
      },
      {
        loader: 'webpack-modernizr-loader',
        test: /\.modernizrrc\.js$/,
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  resolve: {
    alias: {
      modernizr$: path.resolve(__dirname, '.modernizrrc.js'),
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'inline-source-map',
};
