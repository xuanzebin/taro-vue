module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {},
  mini: {},
  h5: {
    output: {
      filename: "js/[name].[contenthash:8].js",
      chunkFilename: "js/[name].[contenthash:8].js"
    },
    // webpackChain(chain, webpack) {
    //   chain
    //     .plugin("analyzer")
    //     .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin, []);
    // },
    miniCssExtractPluginOption: {
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css"
    }
  }
};
