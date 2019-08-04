<template>
  <div id="mynav">
    <div id="myNavCon">
      <img src="http://www.skylineglobe.cn/images/cbjz.jpg"
           width="100px"
           height="100%"
           class="iview-nav-img">
      <!-- <i class="iconfont iconwodexinde"></i> -->
      <div class="head-padding">时空云平台</div>
      <div class="fr"
           style="line-height:77px">
        <Button type="info">
          <router-link to="/Login">登录</router-link>
        </Button>
        <Button type="success">
          <router-link to="/Register">注册</router-link>
        </Button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'mynav'
}
</script>
<style lang="less" scoped>
#mynav {
  width: 80%;
  height: 77px;
  .tc();
  margin-bottom: 15px;
}
#myNavCon {
  width: 60%;
  height: 100%;
  .ib();
}
.iview-nav-img {
  .fl;
}
.head-padding {
  .ib();
  .fl();
  padding: 24px 57px;
  font-size: 22px;
  color: aquamarine;
  font-weight: 700;
}
</style>
