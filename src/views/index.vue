<!--
import { import } from '@babel/types';
 * @Descripttion : 
 * @version      : 
 * @Author       : zero
 * @Date         : 2020-07-14 15:20:25
 * @LastEditors  : zero
 * @LastEditTime : 2020-08-17 12:20:51
-->
<template>
  <div v-if="config && selectItem">
    <van-image
      :src="config.index[0].image || ''"
      fit="cover"
      class="page_head"
    />
    <div class="page_form">
      <div class="form_title">
        <span>{{ selectItem.title }}</span>
      </div>
      <div class="form_title" @click="showPicker = true">
        <span>{{ value }}</span>
        <van-icon
          color="#7180B0"
          class="iconfont"
          class-prefix="iconxiala3"
          name="iconxiala3"
        />
      </div>
      <van-button color="#5369FC" class="sure" @click="show = true"
        >签订合约</van-button
      >
    </div>

    <van-popup v-model="showPicker" round position="bottom">
      <van-picker
        title="请选择合约金额"
        show-toolbar
        :columns="
          columns.map(item => {
            return item.duration;
          })
        "
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
    <van-popup
      v-model="show"
      round
      position="bottom"
      class="rule_popup"
      v-if="selectItem"
    >
      <div class="rule_group">
        <h4>{{ selectItem.title }}</h4>
        <div class="date_warp">
          <div class="date_half">
            <p class="date_title">定制日期</p>
            <p class="date_num">2020-05-30</p>
          </div>
          <div class="date_half">
            <p class="date_title">定制日期</p>
            <p class="date_num">2020-05-30</p>
          </div>
        </div>

        <div class="rule_content">
          <div class="rule_tab">
            <div
              class="rule_tab_item"
              @click="handelClick(1)"
              :class="ruleSelect === 1 ? 'rule_tab_item_active' : ''"
            >
              详情
            </div>
            <div
              class="rule_tab_item"
              @click="handelClick(2)"
              :class="ruleSelect === 2 ? 'rule_tab_item_active' : ''"
            >
              须知
            </div>
          </div>
          <div
            class="rule_detail"
            v-html="ruleSelect === 1 ? selectItem.details : selectItem.notice"
          ></div>
        </div>

        <div class="button_group">
          <span class="price">
            {{ selectItem.price }}
          </span>
          <van-button
            color="rgba(83, 105, 252, 1)"
            class="sure_pay"
            to="protocol"
            >签约</van-button
          >
        </div>
      </div>
    </van-popup>
    <van-image
      :src="config.ad[0].image || ''"
      fit="cover"
      class="shareContain"
      @click="handelClick(1)"
    />
    <div class="title_group">
      <span class="title">活动公告</span>
      <span class="more" @click="toActiveList">查看更多</span>
      <van-icon
        class="more"
        name="arrow"
        color="rgba(158, 165, 187, 1)"
        tag="span"
      />
    </div>
    <div class="my-swipe">
      <div class="my-swipe-item" v-for="item in activelist" :key="item.id">
        <div class="item">
          <!-- <img :src="config.ad[0].image" alt="" srcset="" />-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSite, getList, patternGetList } from "@/api/config.js";
import { mapState, mapActions } from "vuex";
import { findDict } from "@/utils/utils.js";
export default {
  data() {
    return {
      ruleSelect: 1,
      showPicker: false,
      show: false,
      value: "",
      columns: [],
      selectItem: null,
      activelist: []
    };
  },
  computed: {
    ...mapState({
      config: state => state.config
    })
  },
  created() {
    this.getSiteData();
    this.getActiveList();
    this.patternGetList();
  },
  mounted() {},
  methods: {
    ...mapActions(["setConfig"]),
    //web config
    toActiveList() {
      this.$router.push("/activeList");
    },
    getSiteData() {
      getSite({})
        .then(result => {
          console.log(result);
          if (result) {
            this.setConfig({
              contact_mobile: result.data.contact_mobile,
              contact_wechat: result.data.contact_wechat,
              ad: result.data.slides.ad,
              index: result.data.slides.index
            });
          }
        })
        .catch(() => {});
    },
    //active list
    getActiveList() {
      getList({
        type: 1,
        page: 1
      })
        .then(result => {
          console.log(result);
          if (result) {
            console.log(result.data.data);
            this.activelist = result.data.data;
          }
        })
        .catch(() => {});
    },
    //pattern list
    patternGetList() {
      patternGetList()
        .then(result => {
          if (result) {
            this.columns = result.data;
            this.value = this.columns[0].duration;
            this.selectItem = result.data[0];
          }
        })
        .catch(() => {});
    },
    handelClick(i) {
      this.ruleSelect = i;
    },
    onConfirm(value) {
      this.value = value;
      this.selectItem = findDict(this.columns, value, "duration");
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
  display: block;
  z-index: -1;
  h4 {
    line-height: 120px;
    font-size: 28px;
    // font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(247, 131, 153, 1);
  }
}
// .rule_popup {
//   height: "529px";
// }
.page_form {
  position: absolute;
  left: 0;
  right: 0;
  width: 345px;
  height: 228px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 7px 21px 5px rgba(128, 136, 192, 0.12);
  border-radius: 10px;
  margin: 0 auto;
  margin-top: -165px;
  box-sizing: border-box;
  padding: 12px 23px 0px 23px;
  .form_title {
    width: 300px;
    height: 40px;
    background: rgba(246, 247, 250, 1);
    border-radius: 20px;
    margin: 0 auto;
    margin-top: 16px;
    box-sizing: border-box;
    padding-left: 30px;
    line-height: 40px;
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(28, 36, 63, 1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    .iconfont {
      font-size: 16px;
      margin-right: 20px;
    }
  }
  .sure {
    width: 300px;
    height: 45px;
    background: rgba(83, 105, 252, 1);
    box-shadow: 0px 4px 14px 4px rgba(83, 105, 252, 0.25);
    border-radius: 23px;
    margin: 0 auto;
    margin-top: 27px;
    /deep/ .van-button__text {
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
    }
  }
}
.shareContain {
  display: block;
  width: 345px;
  height: 89px;
  border-radius: 10px;
  overflow: hidden;
  // background-color: #5369fc;
  margin: 0 auto;
  margin-top: 90px;
  margin-bottom: 10px;
}
.title_group {
  width: 351px;
  height: 50px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: flex-end;
  .title {
    font-size: 18px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(28, 36, 63, 1);
    margin-right: auto;
  }
  .more {
    font-size: 14px;
    // font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(158, 165, 187, 1);
  }
}
.my-swipe {
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  box-sizing: border-box;
  padding: 10px 0px 30px 0px;
  .my-swipe-item {
    display: flex;
    margin-left: 15px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 8px 13px 7px rgba(141, 158, 187, 0.14);
    border-radius: 10px;
    .item {
      width: 286px;
      height: 110px;
    }
  }
}
.rule_group {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 1);
  padding: 10px 15px 0px 15px;
  h4 {
    font-size: 20px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(28, 36, 63, 1);
    margin: 20px 0px;
  }
  .date_warp {
    width: 345px;
    height: 70px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 7px 21px 5px rgba(128, 136, 192, 0.12);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .date_half {
      width: 48%;
      height: 100%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      justify-content: center;
      padding-left: 18px;
      .date_title {
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(28, 36, 63, 1);
      }
      .date_num {
        font-size: 15px;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(83, 105, 252, 1);
        margin-top: 9px;
      }
    }
  }
  .rule_content {
    width: 375px;
    margin: 0 -15px;
    height: 320px;
    background: RGBA(248, 249, 253, 1);
    margin-top: 22px;
    overflow: hidden;
    box-sizing: border-box;
    padding: 0px 15px;
    .rule_tab {
      margin: 18px 0px;
      width: 100%;
      height: auto;
      display: flex;
      align-items: center;
      .rule_tab_item {
        height: 30px;
        font-size: 15px;
        font-family: PingFang SC;
        font-weight: bold;
        margin-right: 42px;
        color: rgba(158, 165, 187, 1);
      }
      .rule_tab_item_active {
        position: relative;
        color: rgba(28, 36, 63, 1);
        &::after {
          position: absolute;
          content: "";
          width: 20px;
          height: 3px;
          background: rgba(83, 105, 252, 1);
          border-radius: 2px;
          bottom: 0;
          left: 0;
          right: 0;
          margin: 0 auto;
        }
      }
    }
    .rule_detail {
      width: 345px;
      height: 238px;
      background: rgba(255, 255, 255, 1);
      border-radius: 5px;
      box-sizing: border-box;
      padding: 18px;
      overflow-y: scroll;
    }
  }
  .button_group {
    width: 375px;
    box-sizing: border-box;
    box-shadow: 0px 2px 18px 0px rgba(209, 209, 209, 0.35);
    margin: 0px -15px;
    height: 60px;
    background: rgba(255, 255, 255, 1);
    border-radius: 0px 0px 10px 10px;
    padding: 0px 13px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .price {
      font-size: 20px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(255, 123, 5, 1);
      position: relative;
      text-indent: 13px;
      &::before {
        position: absolute;
        content: "￥";
        font-size: 15px;
        left: -15px;
        bottom: 2px;
      }
      &::after {
        position: absolute;
        content: "元";
        font-size: 15px;
        right: -18px;
        bottom: 2px;
      }
    }
    .sure_pay {
      width: 107px;
      height: 40px;
      background: rgba(83, 105, 252, 1);
      box-shadow: 0px 4px 10px 2px rgba(83, 105, 252, 0.25);
      border-radius: 20px;
    }
  }
}
</style>
