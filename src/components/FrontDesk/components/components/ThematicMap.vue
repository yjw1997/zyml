<template>
  <div id="ThematicMap">
    <div id="con">
      <div id="mapnav">
        <img
          src="http://www.skylineglobe.cn/images/cbjz.jpg"
          width="100px"
          height="100%"
          class="fl p15"
        >
        <div class="p30 ib fl title">专题地图</div>
        <div class="personCenter">
          <Dropdown placement="bottom-end">
            <Icon type="ios-keypad" />
            <DropdownMenu slot="list">
              <DropdownItem>
                <router-link to="/index">首頁</router-link>
              </DropdownItem>
              <DropdownItem>
                <router-link to="/recourse/serverRecourse">资源中心</router-link>
              </DropdownItem>
              <DropdownItem>
                <router-link to="/DeveloperCenter/DeveloperCenterIndex">开发者中心</router-link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <div id="map">
          <img src="../../../assets/u27.png" width="100%" height="100%">
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
#ThematicMap {
  width: 100%;
  .tc();
  #con {
    width: 80%;
    height: 800px;
    .ib();
    .box-check();
    .ivu-menu-drop-list {
      .fr();
    }
    #mapnav {
      z-index: 999 !important;
      position: relative;
      height: 93px;
      .border-bottom();
      .Menu {
        .cscenter();
      }
    }
    #map{
        width: 100%;
        height: 706px;
    }
  }
}
</style>
