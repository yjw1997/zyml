<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    text-color="black"
    @select="handleSelect"
  >
    <el-menu-item index="1"><router-link class="a" to="/index/home">首页</router-link></el-menu-item>
    <el-menu-item index="2"><router-link class="a" to="/index/map">电子地图</router-link></el-menu-item>
    <el-submenu index="3">
      <template slot="title">资源中心</template>
      <el-menu-item index="3-1"><router-link class="a" to="/index/serviceResource">服务资源</router-link> </el-menu-item>
      <el-menu-item index="3-2"><router-link class="a" to="/index/dataResource">数据资源</router-link> </el-menu-item>
    </el-submenu>
    <el-menu-item index="4"><router-link class="a" to="/index/api">地图API</router-link></el-menu-item>
    <el-menu-item index="5"><router-link class="a" to="/index/use">平台应用</router-link></el-menu-item>
    <el-menu-item index="6"><router-link class="a" to="/index/serLog">服务日志</router-link></el-menu-item>
    <el-menu-item index="7"><router-link class="a" to="/index/help">帮助</router-link></el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
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
.el-menu {
  border-bottom: none !important;
  background-color: transparent !important;
  a{
    text-decoration: none;
    display: inline-block;
    width: 100%;
    height: 100%;
    margin-top: -5px;
  }
}
//  点击选中添加的class
.is-active{
  // background-color: blue !important;
  // color:coral !important;
  .box-check();
  border-radius: 15px;
}
</style>
