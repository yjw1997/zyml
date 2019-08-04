<template>
  <div id="digitalMap">
    <div id="con">
      <div id="mapnav">
        <img
          src="http://www.skylineglobe.cn/images/cbjz.jpg"
          width="100px"
          height="100%"
          class="fl p15"
        >
        <div class="ib fl p30">
          <Input
            suffix="ios-search"
            placeholder="Enter text"
            style="width: auto"
          />
        </div>
        <div class="ib Menu  fl tl">
          <Menu
            mode="horizontal"
            theme="light"
            active-name="1"
          >
            <MenuItem name="1">
            <Icon type="ios-paper" />
            专题图层
            </MenuItem>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-people" />
                空间查询
              </template>
              <MenuItem name="2-1">点查询</MenuItem>
              <MenuItem name="2-2">线查询</MenuItem>
              <MenuItem name="2-3">拉框查询</MenuItem>
              <MenuItem name="2-4">多边形查询</MenuItem>
              <MenuItem name="2-5">视野内查询</MenuItem>
              <MenuGroup title="缓冲查询设置">
                <MenuItem name="2-6">是否开启（开关）</MenuItem>
                <MenuItem name="2-7"> 缓冲范围（输入框）</MenuItem>
                <MenuItem name="2-8"> 范围单位（下拉框）</MenuItem>
              </MenuGroup>

            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-stats" />
                工具
              </template>
              <MenuItem name="3-1">测距</MenuItem>
              <MenuItem name="3-2">测面</MenuItem>
              <MenuItem name="3-3">纠错</MenuItem>
              <MenuItem name="3-4">地图比对</MenuItem>
              <MenuItem name="3-5">标绘</MenuItem>
            </Submenu>
            <Submenu name="4">
              <template slot="title">
                <Icon type="ios-construct" />
                更多
              </template>
              <MenuItem name="4-1">打印</MenuItem>
              <MenuItem name="4-2">全图</MenuItem>
              <MenuItem name="4-3">清空</MenuItem>
              <MenuItem name="4-4">全屏</MenuItem>
            </Submenu>
          </Menu>
        </div>
        <div class="personCenter">
          <Dropdown placement="bottom-end">
            <Icon type="ios-keypad" />
            <DropdownMenu slot="list">
              <DropdownItem><router-link to = "/index">首頁</router-link> </DropdownItem>
              <DropdownItem><router-link to = "/recourse/serverRecourse">资源中心</router-link></DropdownItem>
              <DropdownItem><router-link to = "/DeveloperCenter/DeveloperCenterIndex">开发者中心</router-link></DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'digitalMap',
  data() {
    return {

    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.$router.push({ path: '/digitalMap/mapIndex' })
    }
  }
}
</script>
<style lang="less" scoped>
#digitalMap {
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
      .Menu {
        .cscenter();
      }
    }
  }
}
</style>
