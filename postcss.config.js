/*
 * @Descripttion :
 * @version      :
 * @Author       : zero
 * @Date         : 2020-07-14 14:18:31
 * @LastEditors  : zero
 * @LastEditTime : 2020-07-14 15:05:47
 */
module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-pxtorem": {
      rootValue: 37.5,
      propList: ["*"]
      // selectorBlackList: ["body", "html"]
    }
  }
};
