const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    publicPath: '/',
    path: path.resolve('./build'),
    filename: 'js/bundle-[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ["babel-plugin-styled-components", '@babel/plugin-proposal-class-properties', "react-hot-loader/babel"]
          }
        }
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'images/[name]-[hash:4].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff2?|ttf)$/,
        loader: 'file-loader',
        options: { name: 'fonts/[name].[ext]' }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '/'
            }
          },
          "css-loader"
        ]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'images/[name]-[hash:4].[ext]'
          }
        }],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html'
    })
  ]
}
