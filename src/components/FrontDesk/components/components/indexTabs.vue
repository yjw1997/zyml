<template>
  <div id="IndexTabs">
    <div id="content">
      <div id="left">
        <ul>
          <li><router-link to="/index">平台动态</router-link></li>
          <li><router-link to="/index/indexTabs2">更新日志</router-link></li>
          <li><router-link to="/index/indexTabs3">热点服务</router-link></li>
          <li><router-link to="/index/indexTabs4">示范应用</router-link></li>
        </ul>
      </div>
      <div id="right">
          <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'indexTabs',
    mounted() {
      this.init()
    },
    methods: {
      init() {
        this.$router.push({path: "/index"})
      }
    }

}
</script>
<style lang="less" scoped>
#IndexTabs {
  width: 100%;
  .tc();
  .mb15();
  #content {
    width: 75%;
    .tc();
    .ib();
    height: 490px;
    .box-check();
    padding: 1% 1%;
    #left {
        .fl();
        .ib();
        width: 15%;
        height: 100%;
        ul{
            width: 100%;
            height: 100%;
            li{
                height: 24%;
                .box-check();
                font-size: 17px;
                font-weight: 700;
                line-height: 104px
            }
        }
    }
    #right{
        margin-top:5px;
        width: 84%;
        height: 100%;
        .ib();
    }
  }
}
</style>
