<template>
  <div id="digitalMap"
       class="index">
    <Nav></Nav>
    <div class="dmContent">
      <div class="box-check dmCon">
        <el-input v-model="searchContent"
                  placeholder="请输入搜索关键字"
                  style="width: 245px"></el-input>
        <el-button @click="searchData">搜索</el-button>
        <el-divider></el-divider>
        <div class="dmConSearchResult">
          <div class="dmConTitle p15 ">
            <i class="el-icon-s-order"></i>
            政务数目
            <div class="fr"
                 v-if="search">搜索结果共{{dmCount}}类数据</div>
          </div>
        </div>
        <el-tree :data="data"
                 :props="defaultProps"
                 @node-click="handleNodeClick"></el-tree>
      </div>

    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Nav from '@fd/digitalMap/components/nav'
import Footer from '@fc/footer'
export default {
  name: 'digitalMap',
  components: {
    Nav, Footer
  },
  data () {
    return {
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      searchContent: '',
      dmCount: 4,
      search: false
    }
  },
  methods: {
    handleNodeClick (data) {
      console.log(data)
    },
    //  点击搜索按钮
    searchData () {
      // this.searchContent
      this.search = true
      this.dmCount = 8
    }
  }
}
</script>
<style lang="less" scoped>
#digitalMap {
  .dmContent {
    width: 1920px;
    height: 970px;
    background-image: url("../../.././static/img/frontdesk/digitalMap.png");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    .dmCon {
      width: 320px;
      .ib();
      background-color: #fff;
      position: absolute;
      top: 30px;
      left: 362px;
      .dmConSearchResult {
        .dmConTitle {
          background-color: #0186e6;
          color: white;
        }
      }
    }
  }
}
</style>
