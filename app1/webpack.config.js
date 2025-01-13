const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  devServer: {
    port: 3000,
    hot: true,
  },
  entry: "./src/index.tsx",
  output: {
    filename: "main.js",
    path: path.join(__dirname, "..", "dist"),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "..", "src"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app1",
      remotes: {
        app2: "app2@http://localhost:3001/remoteEntry.js",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: "*",
          eager: true, // 추가
          strictVersion: true, // 추가
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "*",
          eager: true, // 추가
          strictVersion: true, // 추가
        },
      },
    }),
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
