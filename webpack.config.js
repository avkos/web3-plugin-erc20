const webpack = require("webpack");

module.exports = {
  mode: "production",
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    path: __dirname + "/dist",
    filename: "web3-plugin_my_erc20.min.js",
    library: "MyErc20Plugin",
    libraryExport: "default",
    libraryTarget: "umd",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/, "/test/"],
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
    ],
  },
};
