import { import } from '@babel/types';
<!--
 * @Descripttion : 
 * @version      : 
 * @Author       : zero
 * @Date         : 2020-07-14 14:49:28
 * @LastEditors  : zero
 * @LastEditTime : 2020-07-15 11:07:02
-->
<template>
  <div class="page">
    <van-nav-bar
      :title="$route.meta.title"
      fixed
      placeholder
      @click-left="$router.back()"
    >
      <template #left>
        <van-icon name="arrow-left" size="18" color="#000000" />
      </template>
    </van-nav-bar>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#app .page {
  padding: 0px !important;
}
</style>
