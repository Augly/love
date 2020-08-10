<!--
 * @Descripttion : 
 * @version      : 
 * @Author       : zero
 * @Date         : 2020-07-15 11:52:55
 * @LastEditors  : zero
 * @LastEditTime : 2020-08-10 17:05:44
-->
<template>
  <div>
    <div class="head_info">
      <h4>我的</h4>
      <div class="head_avater"></div>
      <p class="head_name">
        彭于晏
      </p>
      <p class="head_phone">13478956985</p>
    </div>
    <div class="personl_team">
      <div class="personl_item" @click="toMyTeam">
        <p class="personl_item_num">664</p>
        <p class="personl_item_name">我的团队</p>
      </div>
      <div class="personl_item" @click="toMPromote">
        <p class="personl_item_num">544</p>
        <p class="personl_item_name">我的佣金</p>
      </div>
    </div>
    <h4 class="title">我的信息</h4>
    <div class="link_group">
      <van-cell title="我的合约" is-link to="index">
        <template #icon>
          <van-icon
            color="#5369FC"
            class="iconfont f17"
            class-prefix="iconheyue1"
            name="iconheyue1"
          />
        </template>
      </van-cell>
      <van-cell title="邀请好友" is-link to="index">
        <template #icon>
          <van-icon
            color="#5369FC"
            class="iconfont f17"
            class-prefix="iconyaoqing"
            name="iconyaoqing"
          />
        </template>
      </van-cell>
      <van-cell title="我的订单" is-link to="index">
        <template #icon>
          <van-icon
            color="#5369FC"
            class="iconfont f17"
            class-prefix="iconheyue"
            name="iconheyue"
          />
        </template>
      </van-cell>
      <van-cell title="联系地址" is-link to="addList">
        <template #icon>
          <van-icon
            color="#5369FC"
            class="iconfont f17"
            class-prefix="icondizhi1"
            name="icondizhi1"
          />
        </template>
      </van-cell>
      <van-cell title="联系客服" is-link to="index">
        <template #icon>
          <van-icon
            color="#5369FC"
            class="iconfont f17"
            class-prefix="iconxinbaniconshangchuan-"
            name="iconxinbaniconshangchuan-"
          />
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
import { getSite } from "@/api/config.js";
export default {
  mounted() {
    console.log(1);
    getSite({})
      .then(() => {})
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        console.log(2);
      });
    // this.getSiteData();
  },
  methods: {
    toMyTeam() {
      this.$router.push("/team");
    },
    toMPromote() {
      this.$router.push("/promote");
    }
  }
};
</script>
<style lang="less" scoped>
.head_info {
  box-sizing: border-box;
  padding: 30px 15px 0px 15px;
  h4 {
    font-size: 20px;
    font-family: PingFang SC;
    font-weight: bold;
    text-align: center;
    color: rgba(28, 36, 63, 1);
  }
  .head_avater {
    width: 80px;
    height: 80px;
    display: block;
    background: rgba(206, 206, 206, 1);
    box-shadow: 0px 10px 11px 1px rgba(152, 161, 182, 0.33);
    border-radius: 50%;
    margin: 0 auto;
    margin-top: 42px;
  }
  .head_name {
    font-size: 20px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(28, 36, 63, 1);
    text-align: center;
    margin-top: 24px;
  }
  .head_phone {
    font-size: 15px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(132, 139, 164, 1);
    margin-top: 9px;
    text-align: center;
  }
}
.personl_team {
  width: 346px;
  height: 79px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 7px 21px 5px rgba(128, 136, 192, 0.12);
  border-radius: 5px;
  margin: 35px auto;
  display: flex;
  .personl_item {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .personl_item_num {
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(28, 36, 63, 1);
    }
    .personl_item_name {
      font-size: 13px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(132, 139, 164, 1);
      margin-top: 12px;
    }
  }
}
.title {
  font-size: 18px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(28, 36, 63, 1);
  text-indent: 15px;
}
.page_head {
  width: 100%;
  height: 160px;
  background: #f6dede;
}
.head_group {
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  padding: 0px 9px;
  display: flex;
  // margin-top: -50px;
  .head_avater {
    width: 80px;
    height: 80px;
  }
  .head_phone {
    font-size: 18px;
    font-weight: 500;
    margin-top: 13px;
    margin-left: 15px;
    color: #ffffff;
  }
}
.link_group {
  width: 346px;
  height: auto;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 7px 21px 5px rgba(128, 136, 192, 0.12);
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 22px;
  overflow: hidden;
  // margin-top: -40px;
  // padding-top: 45px;
}
</style>
