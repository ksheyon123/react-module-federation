// webpack.config.ts
const { container } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "auto",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new container.ModuleFederationPlugin({
      name: "componentkit",
      filename: "remoteEntry.js",
      exposes: {
        // 컴포넌트 노출 설정
        "./Button": "./src/component/ComboBox/ComboBox",
        "./Pagination": "./src/component/Pagination/Pagination",
        // 추가 컴포넌트들도 같은 방식으로 설정
      },
      shared: {
        react: { singleton: true, requiredVersion: "^18.2.0" },
        "react-dom": { singleton: true, requiredVersion: "^18.2.0" },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html", // public/index.html 파일 생성 필요
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3001, // 포트 설정
    hot: true,
  },
};
