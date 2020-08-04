<!--
 * @Descripttion : 
 * @version      : 
 * @Author       : zero
 * @Date         : 2020-07-15 11:52:55
 * @LastEditors  : zero
 * @LastEditTime : 2020-08-04 17:37:03
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
      <div class="personl_item">
        <p class="personl_item_num"></p>
        <p class="personl_item_name"></p>
      </div>
      <div class="personl_item">
        <p class="personl_item_num"></p>
        <p class="personl_item_name"></p>
      </div>
      <div class="personl_item">
        <p class="personl_item_num"></p>
        <p class="personl_item_name"></p>
      </div>
    </div>
    <div class="link_group">
      <van-cell title="我的合约" is-link to="index" />
      <van-cell title="我的推广" is-link to="index" />
      <van-cell title="我的钱包" is-link to="index" />
      <van-cell title="联系客服" is-link to="index" />
      <van-cell title="联系地址" is-link to="index" />
      <van-cell title="推荐好友" is-link to="index" />
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
.head_info {
  box-sizing: border-box;
  padding: 30px 15px 0px 15px;
  h4 {
    font-size: 20px;
    font-family: PingFang SC;
    font-weight: bold;
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
  }
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
  width: 100%;
  height: auto;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
  // margin-top: -40px;
  // padding-top: 45px;
}
</style>
