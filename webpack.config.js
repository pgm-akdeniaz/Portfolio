const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(woff2?|ttf|otf|eot)$/i,
        type: "asset/resource",
        generator: {
          filename: "public/fonts/Inter-Regular.woff2",
        },
      },
    ],
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "assets"),
    },
  },
  devServer: {
    static: path.resolve(__dirname, "public"),
    hot: true,
    open: true,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "assets/icons", to: "assets/icons", noErrorOnMissing: true },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
};
