<!--
 * @Descripttion : 
 * @version      : 
 * @Author       : zero
 * @Date         : 2020-08-09 13:24:08
 * @LastEditors  : zero
 * @LastEditTime : 2020-08-09 13:30:17
-->
<template>
  <div>
    <van-address-edit
      :area-list="areaList"
      show-delete
      show-set-default
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
import areaList from "@/config/area.js";
export default {
  data() {
    return {
      areaList,
      searchResult: []
    };
  },
  methods: {
    onSave() {
      Toast("save");
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  }
};
</script>

<style lang="less" scoped>
/deep/ .van-button--danger {
  background-color: #5369fc;
  border-color: #5369fc;
}
</style>
