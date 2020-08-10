<!--
 * @Descripttion : 
 * @version      : 
 * @Author       : zero
 * @Date         : 2020-08-05 15:45:45
 * @LastEditors  : zero
 * @LastEditTime : 2020-08-10 21:01:14
-->
<template>
  <div class="content" v-if="details">
    <div class="main">
      <h4 class="title">{{ details.title }}</h4>
      <div class="page_Content" v-html="details.content"></div>
    </div>
    <div class="button_scope">
      <van-button
        plain
        hairline
        type="info"
        round
        color="#A6AAC5"
        class="disagree"
        >不同意</van-button
      >
      <van-button type="info" round class="agree">同意</van-button>
    </div>
  </div>
</template>

<script>
import { getDetail } from "@/api/config.js";
export default {
  data() {
    return {
      details: null
    };
  },
  created() {
    this.getDetail();
  },
  methods: {
    getDetail() {
      getDetail({
        type: 1
      })
        .then(result => {
          if (result) {
            this.details = result.data;
          }
        })
        .catch(() => {});
    }
  }
};
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  .main {
    width: 100%;
    box-sizing: border-box;
    padding: 0px 18px 80px 18px;
    .title {
      font-size: 24px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(28, 36, 63, 1);
      margin: 30px 0px;
    }
  }
  .button_scope {
    width: 375px;
    height: 60px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    background-color: rgba(255, 255, 255, 1);
    align-items: center;
    justify-content: space-around;
    box-shadow: 0px -15px 10px 0px rgba(122, 132, 204, 0.06);
    .disagree {
      width: 123px;
      height: 42px;
    }
    .agree {
      width: 123px;
      height: 42px;
      background: rgba(83, 105, 252, 1);
      box-shadow: 0px 4px 14px 4px rgba(83, 105, 252, 0.2);
    }
  }
}
</style>
