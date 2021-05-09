const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { loader } = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  entry: "./src/javascripts/main.js",
  output: {
    filename: "./javascripts/main.js",
    path: path.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(jpeg|png|jpg)/,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
        use: [],
      },
      {
        test: /\.pug/,
        use: [
          {
            loader: "html-loader",
          },
          {
            loader: "pug-html-loader",
            options: {
              pretty: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./stylesheets/main.css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/index.pug",
      filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/test.pug",
      filename: "test.html"
    }),
    new CleanWebpackPlugin(),
  ],
};
