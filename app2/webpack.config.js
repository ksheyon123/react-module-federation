// webpack.config.ts
const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3001, // 포트 설정
    hot: true,
  },
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
    new ModuleFederationPlugin({
      name: "app2",
      filename: "remoteEntry.js",
      exposes: {
        // 컴포넌트 노출 설정
        "./App": "./src/App",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: "*",
          eager: false, // 추가
          strictVersion: true, // 추가
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "*",
          eager: false, // 추가
          strictVersion: true, // 추가
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html", // public/index.html 파일 생성 필요
    }),
  ],
};
