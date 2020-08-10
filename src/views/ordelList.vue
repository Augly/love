<!--
 * @Descripttion : 
 * @version      : 
 * @Author       : zero
 * @Date         : 2020-08-09 15:24:02
 * @LastEditors  : zero
 * @LastEditTime : 2020-08-10 21:20:07
-->
<template>
  <div>
    <div class="tabBar">
      <div class="tabBar_item tabBar_item_active">全部</div>
      <div class="tabBar_item">进行中</div>
      <div class="tabBar_item">已完成</div>
    </div>
    <van-empty
      class="custom-image"
      :image="nodata"
      description="暂无订单"
      v-if="list.length === 0"
    />
    <div style="margin-top:60px; overflow: hidden;padding-bottom:20px;">
      <div class="item" v-for="item in list" :key="item.id">
        <div class="item_head">
          <div class="item_time_data">
            <p class="item_time_data_title">编号：{{ item.no }}</p>
            <p class="item_time">{{ item.created_at }}</p>
          </div>
          <span class="status">签约完成</span>
        </div>
        <van-divider />
        <div class="item_content">
          <p class="content">{{ item.name }} & {{ item.love_name }}</p>
          <div class="price_group">
            <span class="price_title">总金额：</span>
            <span class="price">￥{{ item.paid_at }}</span>
          </div>
        </div>
        <van-divider />
        <van-button type="default" round size="small" class="pay">
          去付款
        </van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { getList } from "@/api/ordel.js";
export default {
  data() {
    return {
      list: [],
      nodata: require("@/assets/image/noOrdel.png")
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      getList({})
        .then(result => {
          if (result) {
            this.list = result.data;
            console.log(result);
          }
        })
        .catch(() => {});
    }
  }
};
</script>

<style lang="less" scoped>
.custom-image {
  margin-top: 150px;
}
.tabBar {
  width: 100%;
  height: 60px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 7px 21px 5px rgba(128, 136, 192, 0.12);
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 45px;
  .tabBar_item {
    width: 70px;
    height: 30px;
    border-radius: 15px;
    font-size: 15px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(87, 97, 131, 1);
    text-align: center;
    line-height: 30px;
  }
  .tabBar_item_active {
    background-color: #5369fc;
    color: #ffffff;
  }
}
.item {
  width: 345px;
  height: auto;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 8px 13px 7px rgba(141, 158, 187, 0.14);
  border-radius: 10px;
  box-sizing: border-box;
  padding: 16px;
  margin: 0 auto;
  margin-top: 10px;
  .item_head {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    .item_time_data {
      .item_time_data_title {
        font-size: 15px;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(28, 36, 63, 1);
      }
      .item_time {
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(151, 158, 182, 1);
        margin-top: 8px;
      }
    }
    .status {
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(245, 37, 37, 1);
    }
  }
  .item_content {
    .content {
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(28, 36, 63, 1);
      line-height: 18px;
    }
    .price_group {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 20px;
      .price_title {
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(87, 97, 131, 1);
      }
      .price {
        font-size: 18px;
        font-family: Grundig DIN;
        font-weight: 500;
        color: rgba(28, 36, 63, 1);
      }
    }
  }
  .pay {
    display: block;
    padding: 0px 20px;
    margin-left: auto;
  }
}
</style>
