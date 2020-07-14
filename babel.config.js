/*
 * @Descripttion :
 * @version      :
 * @Author       : zero
 * @Date         : 2020-07-14 14:02:37
 * @LastEditors  : zero
 * @LastEditTime : 2020-07-14 14:17:53
 */

module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        style: true
      },
      "vant"
    ]
  ]
};
