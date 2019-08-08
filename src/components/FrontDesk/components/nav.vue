<template>
  <div class="myNav">
    <img src="@static/img/frontdesk/logo.png"
         alt=""
         style="; width:30px;height:30px">
    <div class="navTitle">天地图·福州</div>
    <div class="ib navTitle2">时空信息云平台</div>
  </div>
</template>
<script>
export default {
  name: 'myNav'
}
</script>
<style lang="less" scoped>
.myNav {
  width: 100%;
  padding: 15px 0px;
  vertical-align: middle;
  line-height: 32px;
  .navTitle {
    .ib();
    height: 38px;
    font-size: 24px;
    font-family: "20-";
    font-weight: 400;
    color: rgba(1, 134, 230, 1);
    line-height: 34px;
  }
  .navTitle2 {
    height: 28px;
    font-size: 20px;
    font-family: FZCQJW--GB1-0;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 34px;
  }
}
</style>
