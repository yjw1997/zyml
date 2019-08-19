<template>
  <div id="sampleCode"
       class="index">
    <MyNav></MyNav>
    <MyMenu activeIndex="6-2"></MyMenu>
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>当前位置：</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/index/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>开发中心</el-breadcrumb-item>
        <el-breadcrumb-item>示例代码</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="box tc">
      <div class="w60 ib">
        <div class="sampleLeft">
          <div class="search">
            <el-input v-model="searchContent"
                      placeholder="请输入搜索关键字"
                      style="width: 200px"></el-input>
            <el-button>搜索</el-button>
          </div>
          <div class="tree">
            <el-tree :data="data"
                     :props="defaultProps"
                     @node-click="handleNodeClick"
                     default-expand-all
                     :render-content="renderContent"></el-tree>

          </div>
        </div>
        <div class="sampleRight">
          <img src="@static/img/frontdesk/sample.png"
               width="100%"
               height="100%">
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import MyNav from '@fc/nav'
import MyMenu from '@fc/myMenu'
import Footer from '@fc/footer'
export default {
  name: 'sampleCode',
  components: {
    MyNav, MyMenu, Footer
  },
  data () {
    return {
      data: [{
        label: '地图示例',
        children: [
          {
            label: '创建地图'
          },
          {
            label: '添加瓦片地图服务（WMTS）'
          },
          {
            label: '添加动态地图服务（WMS）'
          },
          {
            label: '添加多个地图服务'
          },
          {
            label: '控制图层显示与隐藏'
          },
          {
            label: '移除图层'
          },
          {
            label: '地图切换'
          }
        ]
      }, {
        label: '基本操作示例',
        children: [{
          label: '放大地图'
        }, {
          label: '缩小地图'
        }, {
          label: '移动地图'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      searchContent: ''
    }
  },
  methods: {
    handleNodeClick (data) {
      console.log(data)
    },
    renderContent (h, { node, data, store }) {
      console.log('data', data)
      console.log('node', node)
      console.log('store', store)
      return (
        <span>
          <i class="el-icon-service"></i>
          <span>{node.label}</span>
        </span>
      )
      //   return (
      //     <span>
      //       <span>{node.label}</span>
      //     </span>
      //   )
    }
  }
}
</script>
<style lang="less" scoped>
#sampleCode {
  .breadcrumb {
    margin-left: 386px;
    display: inline-block;
    .p10();
  }
  .box {
    height: 800px !important;
    .sampleLeft {
      width: 25%;
      height: 100%;
      .ib();
      .fl();
    }
    .sampleRight {
      width: 74%;
      height: 100%;
      .ib();
      .fl();
    }
  }
}
</style>
