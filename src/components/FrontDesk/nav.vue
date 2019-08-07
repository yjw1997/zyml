<template>
<div class="index">
  <div class="nav tc">
    <el-container class="container">
      <div class="logo">
        <a href="#">
          <img
            alt="天地图贵州"
            src="@static/img/index/logo.png"
          >

        </a>
        <a
          href="certificate.html"
          style="vertical-align: center;text-decoration: none;margin-top:5px"
        >
          <span class="navbar-brand-text">时空云平台</span>
        </a>
      </div>
      <div class="fr login">
        <ul>
          <li><i class="iconfont iconyonghu"></i></li>
          <li class="br">当前用户：游客</li>
          <li>登陆</li>
        </ul>
      </div>
      <div class="menu">
        <Menu></Menu>
      </div>
    </el-container>
  </div>
  </div>
</template>
<script>
import Menu from './menu'
export default {
  name: 'fnav',
  components: {
    Menu
  }

}
</script>
<style lang="less" scoped>
.index{
   width: 100%;
  height: 122px;
  padding-bottom: 14px;
  margin-bottom: 20px;
}
.nav {
  width: 100%;
  height: 122px;
  padding-bottom: 14px;
  margin-bottom: 20px;
  background-repeat: no-repeat;
  border-bottom: 0px;
  background: url('../../../static/img/index/FrontPageBackground.png') 15%
    center no-repeat;
  background-size: 150% 100%;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
  .center();
  clear: both;
}
.logo {
  a {
    .ib();
    height: 100%;
    vertical-align: middle;
  }
}
.login {
  margin-top: 20px;
  li {
    .fl();
    padding-right: 8px;
    margin-right: 8px;
    list-style: none;
    color: #1e60b4;
    font-size: 14px;
  }
}
.menu{
  width: 720px;
  margin-top: 20px;
  .fr();
}
</style>
