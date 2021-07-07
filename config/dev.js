module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {},
  mini: {},
  h5: {
    // proxy 配置
    devServer: {
      proxy: {
        "/admin": {
          target: `https://test-api.huokefeng.cn`,
          changeOrigin: true,
          pathRewrite: { "^/admin": "/mch-admin" }
        },
        "/proxy": {
          target: `https://test-api.huokefeng.cn`,
          changeOrigin: true,
          pathRewrite: { "^/proxy": "/kemai" }
        }
      }
    }
  }
};
