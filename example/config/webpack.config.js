const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "../src/index.tsx",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index_bundle.js",
  },
  target: "web",
  devServer: {
    port: "3000",
    static: {
      directory: path.join(__dirname, "..", "public"),
    },
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: [".tx", ".tsx", ".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "..", "public", "index.html"),
    }),
  ],
};
