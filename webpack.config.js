const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = ({ mode }) => {
  const isProduction = mode === 'production';
  return {
    context: path.resolve(__dirname, 'src'),
    mode,
    entry: './index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      publicPath: '/',
      assetModuleFilename: 'assets/[name].[contenthash].[ext]',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
      alias: {
        Components: path.resolve(__dirname, 'src/components'),
        Styles: path.resolve(__dirname, 'src/scss'),
        Store: path.resolve(__dirname, 'src/store'),
        Helpers: path.resolve(__dirname, 'src/helpers'),
        API: path.resolve(__dirname, 'src/api'),
      },
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
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
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
      new ESLintPlugin({ extensions: ['jsx', 'js', 'ts', 'tsx'] }),
      new StylelintPlugin({ extensions: ['scss'] }),
    ],
  };
};
