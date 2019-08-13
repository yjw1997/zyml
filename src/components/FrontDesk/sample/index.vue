<template>
  <div id="sample"
       class="index">
    <MyNav></MyNav>
    <MyMenu activeIndex="4"></MyMenu>
    <div class="box tc">
      <div class="w65 ib"
           style="height: 100%">
        <div class="serviceLeft">
          <div style="margin-left:50px">
            <el-card class="box-card">
              <el-tree :data="data"
                       :props="defaultProps"
                       :default-expand-all="true"
                       @node-click="handleNodeClick"></el-tree>
            </el-card>
          </div>

        </div>
        <div class="serviceRight tl">
          <div class="p15">
            <div class="search">
              <el-input v-model="searchContent"
                        placeholder="请输入搜索关键字"
                        style="width: 891px"></el-input>
              <el-button type="primary">搜索</el-button>
            </div>
            <div class="psx count">共找到{{num}}个</div>
            <el-tabs v-model="showOrder"
                     type="card"
                     @tab-click="handleClick">
              <el-tab-pane label="综合排序"
                           name="first">
                <el-card :body-style="{ padding: '0px' }"
                         id="sampleList">
                  <div v-infinite-scroll="load"
                       infinite-scroll-disabled="disabled">
                    <div class="serviceInfo"
                         v-for="i in count"
                         :key="i">
                      <div class="serContent">
                        <img src="@static/img/frontdesk/23456.png"
                             class="image">
                        <span class="serTitle">应用类型：政府税务</span>
                        <el-button type="text"
                                   class="fr"
                                   @click="showCaseDetail(i)">案例详情</el-button>
                        <div><span>业主单位：福州市国家税务局</span></div>
                        <div><span>上线日期：2019-07-29</span><span class="pzy">浏览次数：1234人</span></div>
                      </div>
                    </div>
                  </div>
                  <p v-if="loading"
                     class="tc">加载中...</p>
                  <p v-if="noMore"
                     class="tc">没有更多了</p>
                </el-card>
              </el-tab-pane>
              <el-tab-pane label="浏览次数"
                           name="second">配置管理</el-tab-pane>
              <el-tab-pane label="发布时间"
                           name="third">角色管理</el-tab-pane>
              <el-tab-pane label="A-Z"
                           name="fourth">定时任务补偿</el-tab-pane>
              <el-tab-pane label="下载次数"
                           name="five">定时任务补偿</el-tab-pane>
            </el-tabs>
          </div>
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
  name: 'serviceDirectory',
  components: {
    MyNav, MyMenu, Footer
  },
  data () {
    return {
      data: [{
        label: '应用类型',
        children: [
          {
            label: '全部'
          },
          {
            label: '教育'
          },
          {
            label: '公共安全'
          },
          {
            label: '民政'
          },
          {
            label: '卫生'
          },
          {
            label: '文化'
          },
          {
            label: '国土资源'
          },
          {
            label: '海洋'
          },
          {
            label: '更多'
          }
        ]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      searchContent: '',
      num: 1000,
      showOrder: 'first',
      currentPage4: 4,
      loading: false,
      count: 8
    }
  },
  computed: {
    noMore () {
      return this.count >= 30
    },
    disabled () {
      return this.loading || this.noMore
    }
  },
  methods: {
    //  点击tree节点
    handleNodeClick (data) {
      console.log(data)
    },
    //  点击切换标签页
    handleClick (tab, event) {
      console.log(tab, event)
    },
    // -------------分页---------------------
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    //  加载更多
    load () {
      console.log(this.loading, this.noMore)
      this.loading = true
      setTimeout(() => {
        this.count += 4
        this.loading = false
      }, 2000)
    },
    //  点击案例详情，把id带过去
    showCaseDetail (id) {
      console.log(id)
      this.$router.push({
        name: `casedetail`,
        params: { id }
      })
    }
  }
}
</script>
<style lang="less" scoped>
#sample {
  .breadcrumb {
    margin-left: 386px;
    display: inline-block;
    .p10();
  }
  .box {
    height: 800px !important;
  }
  .serviceLeft {
    width: 20%;
    .ib();
    .fl();
    height: 100%;
  }
  .serviceRight {
    width: 80%;
    .ib();
    .count {
      font-size: 14px;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
    }
    .serTitle {
      font-size: 14px;
      font-weight: 400;
      color: #333333;
    }
    .serContent {
    }
    .serviceInfo {
      width: 227px;
      .ib();
      font-size: 12px;
      line-height: 24px;
      font-weight: 400;
      color: #666666;
      .ib();
      padding: 5px;
      span {
        white-space: nowrap;
      }
    }
  }
  #sampleList {
    width: 1000px;
    height: 640px;
    overflow: auto;
  }
}
</style>
