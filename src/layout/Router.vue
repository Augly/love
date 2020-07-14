<!--
 * @Descripttion : 
 * @version      : 
 * @Author       : zero
 * @Date         : 2020-07-14 14:49:13
 * @LastEditors  : zero
 * @LastEditTime : 2020-07-14 16:25:29
-->
<template>
  <div class="router">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.router {
  position: relative;
  width: 100%;
  // background: rgba(246, 222, 222, 1);
  height: calc(100% - 50px);
}
</style>
