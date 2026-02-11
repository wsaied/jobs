const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: path.resolve(__dirname, 'index.tsx'),
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
    publicPath: '', // Ensures assets are loaded relatively for GitHub Pages
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
    }),
    new CopyPlugin({
      patterns: [
        { from: "CNAME", to: ".", noErrorOnMissing: true }
      ],
    }),
    new webpack.DefinePlugin({
      // Safely inject the key, defaulting to empty string if missing during build
      'process.env.API_KEY': JSON.stringify(process.env.API_KEY || ''),
    }),
  ],
};