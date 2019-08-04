<template>
  <div>
    <div>
      <ul>
        <li @click="showAppInfor">
            <img src="http://demo.cssmoban.com/cssthemes5/cpts_1664_coz/images/g7.jpg" width="100%" height="100%">
        <span>政务内网区</span>
        </li>
        <li  @click="showAppInfor">
            <img src="http://demo.cssmoban.com/cssthemes5/cpts_1664_coz/images/g7.jpg" width="100%" height="100%">
        <span>政务内网区</span>
        </li>
        <li  @click="showAppInfor">
            <img src="http://demo.cssmoban.com/cssthemes5/cpts_1664_coz/images/g7.jpg" width="100%" height="100%">
        <span>政务内网区</span>
        </li>
       <li @click="showAppInfor">
            <img src="http://demo.cssmoban.com/cssthemes5/cpts_1664_coz/images/g7.jpg" width="100%" height="100%">
        <span>政务内网区</span>
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li  @click="showAppInfor">
            <img src="http://demo.cssmoban.com/cssthemes5/cpts_1664_coz/images/g7.jpg" width="100%" height="100%">
        <span>政务内网区</span>
        </li>
        <li @click="showAppInfor">
            <img src="http://demo.cssmoban.com/cssthemes5/cpts_1664_coz/images/g7.jpg" width="100%" height="100%">
        <span>政务内网区</span>
        </li>
       <li>
            <img src="http://demo.cssmoban.com/cssthemes5/cpts_1664_coz/images/g7.jpg" width="100%" height="100%">
        <span>政务内网区</span>
        </li>
        <li @click="showAppInfor">
            <img src="http://demo.cssmoban.com/cssthemes5/cpts_1664_coz/images/g7.jpg" width="100%" height="100%">
        <span>政务内网区</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'indexTabs_4',
  methods:{
    showAppInfor() {
      this.$router.push({path: '/appinfor'})
    }
  }
}
</script>
<style lang="less" scoped>
  li{
       width: 22%;
       height: 30%;
       .ib(); 
       padding: 1% 1%;
       margin: 0.5% 0.5%;
       .box-check();
       position: relative;
        &:hover {
            border: 1px solid #9f1818;
            cursor: pointer;
       }
       span{
           font-size: 18px;
           font-weight: 800;
           color: dodgerblue;
       }
  }
</style>
