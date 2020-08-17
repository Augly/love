/*
 * @Descripttion :
 * @version      :
 * @Author       : zero
 * @Date         : 2020-07-14 19:06:40
 * @LastEditors  : zero
 * @LastEditTime : 2020-08-17 11:12:24
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Storage from "vue-ls";
import "amfe-flexible";
import "@/assets/css/reset.less";
import "@/assets/css/border.less";
import "@/assets/iconfont/iconfont.css";
import "@/config/user.js";
// import "@/router/routeGuard.js";
// import "@/router/routeGuard";
import fastClick from "fastclick";
fastClick.attach(document.body);
Vue.config.productionTip = false;
let options = {
  namespace: "love__", // key prefix
  name: "ls", // name variable Vue.[ls] or this.[$ls],
  storage: "local" // storage name session, local, memory
};
Vue.use(Storage, options);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
