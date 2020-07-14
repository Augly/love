/*
 * @Descripttion :
 * @version      :
 * @Author       : zero
 * @Date         : 2020-07-14 14:31:44
 * @LastEditors  : zero
 * @LastEditTime : 2020-07-14 14:32:50
 */
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set("@$", resolve("src"));
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
      .oneOf("inline")
      .resourceQuery(/inline/)
      .use("vue-svg-icon-loader")
      .loader("vue-svg-icon-loader")
      .end()
      .end()
      .oneOf("external")
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "assets/[name].[hash:8].[ext]"
      });
  },
  // 配置跨域
  // devServer: {
  //   // development server port 8000
  //   // port: 8000,
  //   proxy: {
  //     '/api': {
  //       // target: 'https://mock.ihx.me/mock/5baf3052f7da7e07e04a5116/antd-pro',
  //       // target: "http://192.168.1.134:8083/okcloud/",
  //       // target: 'http://39.107.78.120:8083/okcloud/',
  //       target: Object[env],
  //       ws: false,
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': '',
  //       },
  //     },
  //   },
  // },
  publicPath: "./",
  // disable source map in production
  productionSourceMap: false,
  lintOnSave: undefined,
  // babel-loader no-ignore node_modules/*
  transpileDependencies: []
};
