/*
 * @Descripttion :
 * @version      :
 * @Author       : zero
 * @Date         : 2020-07-14 14:02:37
 * @LastEditors  : zero
 * @LastEditTime : 2020-08-10 17:50:21
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    config: {
      contact_mobile: "",
      contact_wechat: "",
      ad: [],
      index: []
    }
  },
  mutations: {
    SET_CONFIG: (state, item) => {
      state.config = item;
    }
  },
  actions: {
    setConfig({ commit }, item) {
      commit("SET_CONFIG", item);
    }
  },
  modules: {}
});
