<template>
  <div class="myMenu">
    <el-menu :default-active="activeIndex"
             class="el-menu-demo ib"
             mode="horizontal"
             text-color="black"
             @select="handleSelect">
      <el-menu-item index="1">
        <router-link class="a"
                     to="/index/home">首页</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link class="a"
                     to="/index/digitalMap">电子地图</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link class="a"
                     to="">专题地图</router-link>
      </el-menu-item>
      <el-menu-item index="7">
        <router-link class="a"
                     to="/index/service">服务目录</router-link>
      </el-menu-item>
    </el-menu>
  </div>

</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    activeIndex: {
      type: String,
      default: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="less" scoped>
.myMenu {
  //   .tc();
  margin-left: 377px;
  .ib();
  height: 44px !important;
}
.el-menu {
  .tc();
  border-bottom: none !important;
  background-color: transparent !important;
  .el-menu-item * {
    line-height: 44px !important;
    vertical-align: top;
  }
  li {
    padding: 0 !important;
    // margin: 0 !important;
    margin: 0px 8px;
    .tc();
    width: 100px;
    height: 44px;
  }
  a {
    text-decoration: none;
    display: inline-block;
    width: 100px;
    height: 44px;
  }
}
//  点击选中添加的class
.is-active {
  color: white !important;
}

.myMenu /deep/ .el-menu--horizontal > .el-submenu .el-submenu__title {
  height: 44px !important;
  line-height: 44px !important;
  border-bottom: 2px solid transparent;
  color: white;
}
</style>
