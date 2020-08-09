<!--
 * @Descripttion : 
 * @version      : 
 * @Author       : zero
 * @Date         : 2020-08-09 23:05:32
 * @LastEditors  : zero
 * @LastEditTime : 2020-08-09 23:20:13
-->
<template>
  <div>
    <div class="ordel_info">
      <h4>恋爱合约</h4>
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
      <div class=""></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.ordel_info {
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
}
</style>
