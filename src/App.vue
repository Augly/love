import { import } from '@babel/types';
<!--
 * @Descripttion : 
 * @version      : 
 * @Author       : zero
 * @Date         : 2020-07-14 14:02:37
 * @LastEditors  : zero
 * @LastEditTime : 2020-08-07 22:46:57
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style lang="less">
.f17 {
  font-size: 17px !important;
  margin-right: 6px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 375px;
  margin: 0 auto;

  .page {
    box-sizing: border-box;
    width: 100%;
    min-height: 100%;
    height: auto;
    padding-bottom: 60px;
  }
}
::-webkit-scrollbar {
  display: none;
  /* background-color:transparent; */
}
</style>
