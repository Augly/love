<!--
import { import } from '@babel/types';
 * @Descripttion : 
 * @version      : 
 * @Author       : zero
 * @Date         : 2020-08-08 15:22:58
 * @LastEditors  : zero
 * @LastEditTime : 2020-08-17 12:13:05
-->
<template>
  <div>
    <div class="title_group">
      <h5 class="title">我的佣金</h5>
      <p @click="toRecord">
        <van-icon
          color="#5369FC"
          class="iconfont f17"
          class-prefix="iconjilu"
          name="iconjilu"
        />
        提现记录
      </p>
    </div>
    <div class="money">
      <div class="left_scope">
        <p class="title">账户余额</p>
        <p class="money_num">
          {{ alldata.my_wallet }}
        </p>
      </div>
      <van-button type="info" round class="right_button" @click="toWithdraw"
        >提现</van-button
      >
    </div>
    <div class="title_group" style="margin-top:10px;">
      <h5 class="title">我的团队</h5>
    </div>
    <div class="items">
      <div class="item">
        <p class="title">个人本月业绩</p>
        <p class="money_num">{{ alldata.my_performance_month }}</p>
      </div>
      <div class="item">
        <p class="title">个人本月佣金</p>
        <p class="money_num">{{ alldata.my_commission_month }}</p>
      </div>
    </div>
    <div class="teamData">
      <div class="data_item">
        <p class="number">{{ alldata.term_num }}</p>
        <p class="title">团队人员</p>
      </div>
      <div class="data_item">
        <p class="number">￥{{ alldata.term_performance_month }}</p>
        <p class="title">团队本月业绩</p>
      </div>
      <div class="data_item">
        <p class="number">￥{{ alldata.term_commission_month }}</p>
        <p class="title">团队本月佣金</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getMyPromote } from "@/api/user";
export default {
  data() {
    return {
      alldata: {
        my_wallet: "0.00", //我的佣金
        my_performance_month: "0.00", //个人本月业绩
        my_commission_month: "0.00", //个人本月佣金
        term_num: 1, //团队人数
        term_performance_month: "0.00", //团队本月业绩
        term_commission_month: "0.00" //团队本月佣金
      }
    };
  },
  created() {
    this.getMyPromote();
  },
  methods: {
    getMyPromote() {
      getMyPromote({})
        .then(result => {
          console.log(result);
          if (result) {
            this.data = result.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    toRecord() {
      this.$router.push("/recordForWithdraw");
    },
    toWithdraw() {
      this.$router.push("/withdraw");
    }
  }
};
</script>
<style lang="less" scoped>
.title_group {
  height: 63px;
  width: 345px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title {
    font-size: 20px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(28, 36, 63, 1);
  }
  p {
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(83, 105, 252, 1);
    display: flex;
    align-items: center;
  }
}
.money {
  width: 345px;
  height: 86px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 7px 21px 5px rgba(128, 136, 192, 0.12);
  border-radius: 10px;
  box-sizing: border-box;
  padding: 15px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left_scope {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    .title {
      height: 12px;
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(132, 139, 164, 1);
    }
    .money_num {
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(28, 36, 63, 1);
      &::before {
        content: "￥";
        font-size: 15px;
        margin-right: -7px;
      }
    }
  }
  .right_button {
    width: 80px;
    height: 36px;
    background: rgba(83, 105, 252, 1);
    box-shadow: 0px 4px 14px 4px rgba(83, 105, 252, 0.2);
  }
}
.items {
  width: 345px;
  height: 86px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  .item {
    width: 168px;
    height: 82px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 7px 21px 5px rgba(128, 136, 192, 0.12);
    border-radius: 10px;
    box-sizing: border-box;
    padding: 15px;
    .title {
      height: 12px;
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(132, 139, 164, 1);
    }
    .money_num {
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(28, 36, 63, 1);
      margin-top: 20px;
      text-indent: 30px;
      &::before {
        content: "￥";
        font-size: 15px;
        margin-right: -2px;
      }
    }
  }
}
.teamData {
  width: 345px;
  height: 75px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 7px 21px 5px rgba(128, 136, 192, 0.12);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 10px;
  box-sizing: border-box;
  padding: 10px 0px;
  .data_item {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .number {
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(28, 36, 63, 1);
    }
    .title {
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(132, 139, 164, 1);
    }
  }
}
</style>
