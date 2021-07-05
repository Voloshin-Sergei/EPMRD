const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, './src/index.js'),
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(?:ico|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    open: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new ESLintPlugin(),
    new CleanWebpackPlugin(),
  ],
};
