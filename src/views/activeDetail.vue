<!--
 * @Descripttion : 
 * @version      : 
 * @Author       : zero
 * @Date         : 2020-08-09 14:40:54
 * @LastEditors  : zero
 * @LastEditTime : 2020-08-09 15:20:12
-->
<template>
  <div>
    <div class="detail">
      <h5 class="title">
        <van-tag round type="warning" size="medium">活动中</van-tag>
        暖冬之旅：希腊扎金索斯岛上的蓝 洞，神秘莫测，至今是难解的谜团
      </h5>
      <p class="time">2020-08-01</p>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
.detail {
  width: 345px;
  height: 122px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 8px 13px 7px rgba(141, 158, 187, 0.14);
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 15px;
  box-sizing: border-box;
  padding: 15px;
  .title {
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: bold;
    line-height: 24px;
    color: rgba(28, 36, 63, 1);
  }
  .time {
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(132, 139, 164, 1);
    margin-top: 15px;
  }
}
.content {
  margin-top: 27px;
}
</style>
