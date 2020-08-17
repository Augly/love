<!--
 * @Descripttion : 
 * @version      : 
 * @Author       : zero
 * @Date         : 2020-08-09 13:24:08
 * @LastEditors  : zero
 * @LastEditTime : 2020-08-17 23:50:56
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
import areaList from "@/config/area.js";
import { addressStore, addressUpdate, destroy } from "@/api/user";
export default {
  data() {
    return {
      areaList,
      searchResult: []
    };
  },
  methods: {
    onSave(content) {
      //添加地址
      let ajax =
        this.$route.query.title === "编辑地址" ? addressUpdate : addressStore;
      let other =
        this.$route.query.title === "编辑地址"
          ? { address_id: this.$route.query.address_id }
          : {};
      ajax(
        Object.assign(
          {
            province: content.province,
            city: content.city,
            district: content.county,
            address: content.addressDetail,
            contact_name: content.name,
            contact_phone: content.tel,
            is_default: content.isDefault - 0,
            province_code: "",
            city_code: "",
            zip: "",
            district_code: content.areaCode
          },
          other
        )
      )
        .then(result => {
          if (result) {
            this.$toast.success(this.$route.query.title);
          }
        })
        .catch(() => {});
    },
    onDelete() {
      destroy({
        address_id: this.$route.query.address_id
      })
        .then(result => {
          if (result) {
            this.$toast.success("删除成功");
          }
        })
        .catch(() => {});
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
