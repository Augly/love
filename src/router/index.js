/*
 * @Descripttion :
 * @version      :
 * @Author       : zero
 * @Date         : 2020-07-14 14:02:37
 * @LastEditors  : zero
 * @LastEditTime : 2020-07-14 20:45:08
 */

import Vue from "vue";
import VueRouter from "vue-router";
import Router from "@/layout/Router.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Router",
    component: Router,
    redirect: "/index",
    children: [
      {
        path: "/index",
        name: "home",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/index.vue")
      }
    ]
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
