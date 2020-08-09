/*
 * @Descripttion :
 * @version      :
 * @Author       : zero
 * @Date         : 2020-07-14 19:06:40
 * @LastEditors  : zero
 * @LastEditTime : 2020-08-07 22:22:11
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "amfe-flexible";
import "@/assets/css/reset.less";
import "@/assets/css/border.less";
import "@/assets/iconfont/iconfont.css";
import "@/config/user.js";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
