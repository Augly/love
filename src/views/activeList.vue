<!--
 * @Descripttion : 
 * @version      : 
 * @Author       : zero
 * @Date         : 2020-08-09 13:38:03
 * @LastEditors  : zero
 * @LastEditTime : 2020-08-17 15:41:37
-->
<template>
  <div>
    <van-empty
      class="custom-image"
      :image="nodata"
      description="暂无活动"
      v-if="list.length === 0"
    />
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div class="items" v-for="item in list" :key="item.id">
        <p class="time">{{ item.created_at }}</p>
        <div class="item">
          <van-image
            :src="item.thumb"
            width="78px"
            height="75px"
            fit="contain"
          />
          <div class="item_res">
            <div class="item_res_title">
              <span class="title">{{ item.title }}</span>
              <van-tag round type="warning" size="medium" v-if="item.status"
                >活动中</van-tag
              >
              <van-tag color="#BABDD1" round size="large" v-else
                >活动结束</van-tag
              >
            </div>
            <p class="mintitle van-multi-ellipsis--l2">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script>
import { getList } from "@/api/config.js";
export default {
  data() {
    return {
      nodata: require("@/assets/image/noactive.png"),
      list: [],
      loading: false,
      finished: false,
      page: 1
    };
  },
  methods: {
    //active list
    getActiveList() {
      getList({
        type: 1,
        page: this.page
      })
        .then(result => {
          if (result) {
            this.list = this.list.concat(result.data.data);
            this.loading = false;
            this.page++;
            if (this.list.length === result.data.total) {
              this.finished = true;
            }
          }
        })
        .catch(() => {});
    },
    onLoad() {
      this.getActiveList();
    }
  }
};
</script>

<style lang="less" scoped>
.custom-image {
  margin-top: 150px;
}
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
