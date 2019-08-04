<template>
  <div id="mynav">
    <div id="myNavCon">
      <img
        src="http://www.skylineglobe.cn/images/cbjz.jpg"
        width="100px"
        height="100%"
        class="iview-nav-img"
      >
      <div class="head-padding">注册登录</div>
      <div class="fr" style="line-height:77px">
          <ul>
              <li><router-link to="/">首页</router-link></li>
              <li><router-link to="/">电子地图</router-link></li>
              <li><router-link to="/">专题地图</router-link></li>
              <li><router-link to="/">资源中心</router-link></li>
          </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
#mynav {
  width: 100%;
  height: 77px;
  .tc();
  margin-bottom:15px;
}
#myNavCon {
  width: 60%;
  height: 100%;
  .ib();
  li{
    .title();
    float: left;
    padding: 0px 15px;
  }
}
.iview-nav-img {
  .fl;
}
.head-padding {
  .ib();
  .fl();
  padding: 24px 57px;
  font-size: 22px;
//   color: aquamarine;
  font-weight: 700;
}
</style>
