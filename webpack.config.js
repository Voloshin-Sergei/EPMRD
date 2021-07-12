const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = ({ mode }) => {
  const isProduction = mode === 'production';
  return {
    context: path.resolve(__dirname, 'src'),
    mode,
    entry: './index.jsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      assetModuleFilename: 'assets/[name].[contenthash].[ext]',
    },
    module: {
      rules: [
        { test: /\.html$/, loader: 'html-loader' },
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
          test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.css$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: !isProduction,
              },
            },
            'css-loader',
          ],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
      ],
    },
    devServer: {
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, 'dist'),
      open: true,
      compress: true,
      hot: true,
      port: 3000,
    },
    devtool: isProduction && 'source-map',
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
        filename: 'index.html',
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
      new CopyPlugin({
        patterns: [{ from: '../public' }],
      }),
    ],
  };
};
