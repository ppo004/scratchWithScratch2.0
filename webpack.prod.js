const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env["NODE_ENV"] = "production";

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      `...`, // Extend existing minimizers (i.e. `terser-webpack-plugin`)
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
});
