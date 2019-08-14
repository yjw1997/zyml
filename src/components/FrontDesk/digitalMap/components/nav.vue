<template>
  <div class="myNav">
    <div class="title">
      <img src="@static/img/frontdesk/logo.png">
      <img src="@static/img/frontdesk/tdtTitle.png" />
      <img src="@static/img/frontdesk/tdtName.png" />
    </div>
    <el-dropdown id="myMenu"
                 placement="bottom">
      <i class="el-icon-menu"
         style="font-size:25px"></i>
      <el-dropdown-menu slot="dropdown"
                        class="dropdown">
        <el-dropdown-item>
          <router-link to="/index/home">首页</router-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <router-link to="/index/service">服务目录</router-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <router-link to="/index/development">开发者中心</router-link>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <div class="personalCenter">
      <i class="el-icon-user-solid"
         style="font-size:25px"></i>
    </div>

  </div>
</template>
<script>
export default {
  name: 'myNav',
  data () {
    return {
      searchContent: ''
    }
  },
  methods: {
    login () {
      this.$router.push({ name: `login` })
    },
    register () {
      this.$router.push({ name: `login` })
    }
  }
}
</script>
<style lang="less" scoped>
.myNav {
  width: 1920px;
  padding: 32px 0px 25px 0px;
  line-height: 32px;
  position: relative;
  border-bottom: 1px solid #bababa;
  .title {
    position: relative;
    margin-left: 365px;
    .psx();
    .ib();
    img {
      vertical-align: middle;
      margin-left: 23px;
    }
  }
  .search {
    .ib();
    z-index: 2;
    margin-left: 302px;
    position: absolute;
    top: 46px;
  }
  .logn {
    z-index: 2;
    font-size: 14px;
    position: absolute;
    right: 346px;
    top: 46px;
  }
  .bc2 {
    z-index: -2;
  }
}
.dropdown {
  li {
    float: left;
    padding: 0px 30px;
  }
}
#myMenu {
  margin-left: 365px;
}
.personalCenter {
  .ib();
  border: 1px solid gray;
  border-radius: 50%;
  margin-left: 30px;
  width: 25px;
  height: 25px;
  color: #0186e6;
}
</style>
