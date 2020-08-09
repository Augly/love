<!--
 * @Descripttion : 
 * @version      : 
 * @Author       : zero
 * @Date         : 2020-08-09 13:38:03
 * @LastEditors  : zero
 * @LastEditTime : 2020-08-09 13:55:56
-->
<template>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <div class="items" v-for="item in list" :key="item" :title="item">
      <p class="time">12121</p>
      <div class="item">
        <van-image src="" width="78px" height="75px" fit="contain" />
        <div class="item_res">
          <div class="item_res_title">
            <span class="title">爱情来的太快</span>
            <van-tag round type="warning" size="medium">活动中</van-tag>
            <!--
            <van-tag color="#BABDD1" round size="large">活动结束</van-tag> -->
          </div>
          <p class="mintitle van-multi-ellipsis--l2">
            情人节活动打九折，只限本次,千万别
            错过情人节活动打九折，只限本次,千万别 错过
          </p>
        </div>
      </div>
    </div>
  </van-list>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    }
  }
};
</script>

<style lang="less" scoped>
.items {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 6px 14px 0px 14px;
  .time {
    height: 60px;
    line-height: 60px;
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(185, 191, 211, 1);
    text-align: center;
  }
  .item {
    width: 100%;
    height: 100px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 8px 13px 7px rgba(141, 158, 187, 0.14);
    border-radius: 10px;
    margin-bottom: 10px;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    align-items: center;
    .item_res {
      width: 200px;
      height: 100%;
      margin-left: 15px;
      .item_res_title {
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
        .title {
          font-size: 15px;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba(28, 36, 63, 1);
          margin-right: 6px;
        }
      }
      .mintitle {
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: 500;
        line-height: 16px;
        color: rgba(132, 139, 164, 1);
        margin-top: 5px;
      }
    }
  }
}
</style>
