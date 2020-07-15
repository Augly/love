<!--
 * @Descripttion : 
 * @version      : 
 * @Author       : zero
 * @Date         : 2020-07-14 15:20:25
 * @LastEditors  : zero
 * @LastEditTime : 2020-07-15 13:12:57
-->
<template>
  <div>
    <div class="page_head">
      <h4>JOJO恋爱合约</h4>
    </div>
    <div class="page_form">
      <div class="form_title">恋爱合约</div>
      <div class="form_title" @click="showPicker = true">
        {{ value }}
        <div class="trans"></div>
      </div>
      <van-button color="#F6DEDE" class="sure" @click="show = true"
        >签订合约</van-button
      >
    </div>

    <van-popup v-model="showPicker" round position="bottom">
      <van-picker
        title="请选择合约金额"
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
    <van-popup v-model="show" round position="bottom" class="rule_popup">
      <div class="rule_group">
        <h4>恋爱合约</h4>
        <p>定制日期：2020-05-30</p>
        <p>兑现日期：2023-05-30</p>
        <div class="rule_select">
          <span
            @click="ruleSelect = 0"
            class="rule_item"
            :class="ruleSelect === 0 ? 'rule_item_active' : ''"
            >详情</span
          >
          <span
            @click="ruleSelect = 1"
            class="rule_item"
            :class="ruleSelect === 1 ? 'rule_item_active' : ''"
            >须知</span
          >
        </div>
        <div class="rule" v-if="ruleSelect === 0">
          <p>
            恋爱合约自支付成功后次日零时起生效，本合约生效3年后且在约定的合约期内，签约人与心上人均为彼此在民政部门领取中华人民共和国结婚证的，签约人符合兑现要求的，可以提出如下兑现申请：
          </p>
          <p>
            1、10001元现金
          </p>
          <p>
            2、10001朵玫瑰花
          </p>
          <p>
            3、价值1万元钻戒
          </p>
          <p>
            恋爱合约自支付成功后次日零时起生效，本合约生效3年后且在约定的合约期内，签约人与心上人均为彼此在民政部门领取中华人民共和国结婚证的，签约人符合兑现要求的，可以提出如下兑现申请：
          </p>
          <p>
            1、10001元现金
          </p>
          <p>
            2、10001朵玫瑰花
          </p>
          <p>
            3、价值1万元钻戒
          </p>
          <p>
            恋爱合约自支付成功后次日零时起生效，本合约生效3年后且在约定的合约期内，签约人与心上人均为彼此在民政部门领取中华人民共和国结婚证的，签约人符合兑现要求的，可以提出如下兑现申请：
          </p>
          <p>
            1、10001元现金
          </p>
          <p>
            2、10001朵玫瑰花
          </p>
          <p>
            3、价值1万元钻戒
          </p>
        </div>
        <div class="rule" v-if="ruleSelect === 1">
          <p>
            须知须知须知须知须知须知须知须知
          </p>
          <p>
            1、10001元现金
          </p>
          <p>
            2、10001朵玫瑰花
          </p>
          <p>
            3、价值1万元钻戒
          </p>
          <p>
            恋爱合约自支付成功后次日零时起生效，本合约生效3年后且在约定的合约期内，签约人与心上人均为彼此在民政部门领取中华人民共和国结婚证的，签约人符合兑现要求的，可以提出如下兑现申请：
          </p>
          <p>
            1、10001元现金
          </p>
          <p>
            2、10001朵玫瑰花
          </p>
          <p>
            3、价值1万元钻戒
          </p>
          <p>
            恋爱合约自支付成功后次日零时起生效，本合约生效3年后且在约定的合约期内，签约人与心上人均为彼此在民政部门领取中华人民共和国结婚证的，签约人符合兑现要求的，可以提出如下兑现申请：
          </p>
          <p>
            1、10001元现金
          </p>
          <p>
            2、10001朵玫瑰花
          </p>
          <p>
            3、价值1万元钻戒
          </p>
        </div>
        <div class="button_group">
          <span class="price">
            ￥299元
          </span>
          <van-button color="#F78297" class="sure_pay" to="ordel"
            >签约</van-button
          >
        </div>
      </div>
    </van-popup>
    <div class="shareContain" @click="handelClick(1)">
      邀请好友最高享31%奖励
    </div>
    <div class="title_group">
      <span class="title">活动公告</span>
      <span class="more">查看更多</span>
      <van-icon
        class="more"
        name="arrow"
        color="rgba(153, 153, 153, 1)"
        tag="span"
      />
    </div>
    <div class="my-swipe">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleSelect: 0,
      showPicker: false,
      show: false,
      value: "学生(299)",
      columns: ["学生(299)", "军人(399)"]
    };
  },
  methods: {
    handelClick(i) {
      console.log(i);
    },
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    }
  }
};
</script>

<style lang="less" scoped>
.page_head {
  width: 375px;
  height: 306px;
  box-sizing: border-box;
  padding: 0 23px;
  background-image: url("~@/assets/image/bg.png");
  background-size: 100%;
  background-position: bottom;
  h4 {
    line-height: 120px;
    font-size: 28px;
    // font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(247, 131, 153, 1);
  }
}
.rule_popup {
  height: "463px";
}
.page_form {
  width: 351px;
  height: 205px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 6px 13px 3px rgba(246, 222, 222, 0.51);
  border-radius: 10px;
  margin: 0 auto;
  margin-top: -186px;
  box-sizing: border-box;
  padding: 15px 10px;
  .form_title {
    width: 331px;
    height: 44px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(247, 131, 153, 1);
    border-radius: 5px;
    font-size: 18px;
    // font-family: Microsoft YaHei;
    font-weight: 400;
    text-align: center;
    line-height: 44px;
    color: rgba(51, 51, 51, 1);
    margin-bottom: 10px;
    position: relative;
    .trans {
      position: absolute;
      right: 11px;
      top: 50%;
      margin-top: -7px;
      width: 0;
      height: 0;
      border: 8px solid transparent;
      border-top: 14px solid #f78399;
    }
  }
  .sure {
    width: 326px;
    height: 44px;
    border-radius: 22px;
    margin-top: 20px;

    /deep/ .van-button__text {
      color: #f78399;
      font-size: 18px;
      // font-family: Microsoft YaHei;
      font-weight: 400;
    }
  }
}
.shareContain {
  width: 351px;
  height: 125px;
  background: #ffffff;
  border-radius: 20px;
  background-image: url("~@/assets/image/share.png");
  background-size: 100% 100%;
  margin: 0 auto;
  margin-top: 15px;
  font-size: 23px;
  text-align: center;
  line-height: 125px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.title_group {
  width: 351px;
  height: 50px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: flex-end;
  .title {
    font-size: 16px;
    // font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    margin-right: auto;
  }
  .more {
    font-size: 14px;
    // font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
  }
}
.my-swipe {
  width: 351px;
  margin: 0 auto;
  margin-bottom: 20px;
  overflow: hidden;
  border-radius: 10px;
  .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #f6dede;
  }
}
.rule_group {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #f7f7f7;
  padding: 12px 12px 0px 12px;
  h4 {
    font-size: 23px;
    // font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(247, 130, 151, 1);
    text-align: center;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  p {
    font-size: 13px;
    // font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(136, 136, 136, 1);
    text-align: center;
    margin-bottom: 13px;
  }
  .rule_select {
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(204, 204, 204, 1);
    display: flex;
    align-items: center;
    .rule_item {
      height: 40px;
      font-size: 13px;
      line-height: 40px;
      // // font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      padding: 0px 10px;
    }
    .rule_item_active {
      color: #f78297;
      position: relative;
      &::after {
        position: absolute;
        bottom: 0;
        margin-top: 10px;
        content: "";
        width: 100%;
        left: 0;
        height: 1px;
        background: #f78297;
      }
    }
  }
  .rule {
    width: 100%;
    height: 246px;
    overflow-y: scroll;
    box-sizing: border-box;
    padding-top: 16px;
    font-size: 13px;
    font-family: Microsoft YaHei;
    font-weight: 400;

    color: rgba(153, 153, 153, 1);
    p {
      text-align: left;
      line-height: 18px;
    }
  }
  .button_group {
    box-sizing: border-box;
    box-shadow: 0px 2px 18px 0px rgba(209, 209, 209, 0.35);
    margin: 0px -12px;
    height: 60px;
    background: rgba(255, 255, 255, 1);
    border-radius: 0px 0px 10px 10px;
    padding: 0px 13px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .price {
      font-size: 21px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(247, 130, 151, 1);
    }
    .sure_pay {
      width: 115px;
      height: 40px;
      background: rgba(247, 130, 151, 1);
      border-radius: 20px;
    }
  }
}
</style>
