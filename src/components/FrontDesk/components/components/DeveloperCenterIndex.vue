<template>
  <div id="DeveloperCenterIndex">
    <div id="con" class="shadow">
      <div >
       <Tabs value="name1">
        <TabPane label="首页" name="name1"><Tab1></Tab1></TabPane>
        <TabPane label="应用商店" name="name2"><Tab2></Tab2></TabPane>
        <TabPane label="文档中心" name="name3"><Tab3></Tab3></TabPane>
        <TabPane label="示例代码" name="name4"><Tab4></Tab4></TabPane>
    </Tabs>
    </div>
      </div>
    </div>
</template>
<script>
import Tab1 from '../components/Tab1'
import Tab2 from '../components/Tab2'
import Tab3 from '../components/Tab3'
import Tab4 from '../components/Tab4'

export default {
  components:{
    Tab1,Tab2,Tab3,Tab4
  },
  data () {
    return {
      data: [
        {
          title: '平台概述',
          expand: true,
          children: [
            {
              title: '平台简介',
            },
            {
              title: '平台总体结构',
            }
          ]
        },
        {
          title: '使用手册',
          expand: true,
          children: [
            {
              title: '服务资源',
            },
            {
              title: '示范应用',
            },
            {
              title: '电子地图',
            },
            {
              title: '专题地图',
            }
          ]
        },
        {
          title: '业务流程',
          expand: true,
          children: [
            {
              title: '如何使用平台中的服务',
            },
            {
              title: '如何将服务注册到平台',
            },
            {
              title: '如何在平台中定制服务',
            },
            {
              title: '如何使用平台数据',
            }, {
              title: '如何上传数据到平台',
            }
          ]
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
#DeveloperCenterIndex {
  width: 100%;
  .tc();
  #con {
    width: 80%;
    .box-check();
    .ib();
    .p15();
    // height: 400px;

  }
}
</style>
