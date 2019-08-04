<template>
  <div id="indextabs1">
    <div id="left">
      <img
        src="http://demo.cssmoban.com/cssthemes5/cpts_1664_coz/images/g7.jpg"
        width="100%"
        height="100%"
      >
    </div>
    <div id="right">
      <Tabs value="name1">
        <TabPane
          label="通知公告"
          name="name1"
        >
          <Ul></Ul>
        </TabPane>
        <TabPane
          label="业界资讯"
          name="name2"
        >标签二的内容</TabPane>
        <Button slot="extra" class="ib"><router-link to="/announcement">更多</router-link></Button>
      </Tabs>
    </div>
  </div>
</template>
<script>
import Ul from '../components/indexTabsContent'
export default {
  name: 'indexTabs1',
  components:{
    Ul,
  }
}
</script>
<style lang="less" scoped>
#indextabs1 {
  width: 100%;
  height: 100%;
  #left {
    width: 44%;
    height: 100%;
    .ib();
    .fl();
  }
  #right {
    width: 54%;
    height: 100%;
    .ib();
    .tl();
    li {
     
    }
  }
}
</style>
