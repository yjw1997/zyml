<template>
  <div id="serviceDirectory"
       class="index">
    <MyNav></MyNav>
    <MyMenu activeIndex="2"></MyMenu>
    <el-breadcrumb separator="/"
                   class="breadcrumb">
      <el-breadcrumb-item>当前位置：</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/index/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/index/home' }">资源中心</el-breadcrumb-item>
      <el-breadcrumb-item>服务目录</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="box tc">
      <div class="w65 ib"
           style="height: 100%">
        <div class="serviceLeft">
          <div style="margin-left:50px">
            <el-card class="box-card">
              <el-tree :data="data"
                       :props="defaultProps"
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
            <div class="psx count">共找到{{total}}个</div>
            <el-tabs v-model="showOrder"
                     type="card"
                     @tab-click="handleClick">
              <el-tab-pane label="综合排序"
                           name="first">
                <el-card :body-style="{ padding: '0px' }">
                  <div class="serviceInfo"
                       @click="showServiceDetails(item)"
                       v-for="item in treeInfo"
                       :key="item.id">
                    <div class="serContent">
                      <div class="zz">
                        <div class="image">
                          <img src="@static/img/frontdesk/23456.png">
                          <div class="zzCon">{{item.serName}}</div>
                        </div>
                      </div>
                      <span class="serTitle">服务类型：{{item.serType}}</span>
                      <div><span>发布时间：{{item.pubDate}}</span><span class="pzy">浏览{{item.hits}}人</span></div>
                      <span>提供单位：{{item.pubUnit}}</span>
                    </div>
                  </div>
                  <!-- //  分页 -->
                  <div class="page"
                       v-if="treeInfo.length !== 0">
                    <el-pagination background
                                   layout="prev, pager, next"
                                   :total="total"
                                   :page-size="pageSize"
                                   @current-change="changePage">
                    </el-pagination>
                  </div>
                </el-card>
              </el-tab-pane>
              <el-tab-pane label="浏览次数"
                           name="second">
                <el-card :body-style="{ padding: '0px' }">
                  <div class="serviceInfo"
                       @click="showServiceDetails(item)"
                       v-for="item in treeInfo"
                       :key="item.id">
                    <div class="serContent">
                      <div class="zz">
                        <div class="image">
                          <img src="@static/img/frontdesk/23456.png">
                          <div class="zzCon">{{item.serName}}</div>
                        </div>
                      </div>
                      <span class="serTitle">服务类型：{{item.serType}}</span>
                      <div><span>发布时间：{{item.pubDate}}</span><span class="pzy">浏览{{item.hits}}人</span></div>
                      <span>提供单位：{{item.pubUnit}}</span>
                    </div>
                  </div>
                  <!-- //  分页 -->
                  <div class="page"
                       v-if="treeInfo.length !== 0">
                    <el-pagination background
                                   layout="prev, pager, next"
                                   :total="total"
                                   :page-size="pageSize"
                                   @current-change="changePage">
                    </el-pagination>
                  </div>
                </el-card>
              </el-tab-pane>
              <el-tab-pane label="发布时间"
                           name="third">
                <el-card :body-style="{ padding: '0px' }">
                  <div class="serviceInfo"
                       @click="showServiceDetails(item)"
                       v-for="item in treeInfo"
                       :key="item.id">
                    <div class="serContent">
                      <div class="zz">
                        <div class="image">
                          <img src="@static/img/frontdesk/23456.png">
                          <div class="zzCon">{{item.serName}}</div>
                        </div>
                      </div>
                      <span class="serTitle">服务类型：{{item.serType}}</span>
                      <div><span>发布时间：{{item.pubDate}}</span><span class="pzy">浏览{{item.hits}}人</span></div>
                      <span>提供单位：{{item.pubUnit}}</span>
                    </div>
                  </div>
                  <!-- //  分页 -->
                  <div class="page"
                       v-if="treeInfo.length !== 0">
                    <el-pagination background
                                   layout="prev, pager, next"
                                   :total="total"
                                   :page-size="pageSize"
                                   @current-change="changePage">
                    </el-pagination>
                  </div>
                </el-card>
              </el-tab-pane>
              <el-tab-pane label="A-Z"
                           name="fourth">
                <el-card :body-style="{ padding: '0px' }">
                  <div class="serviceInfo"
                       @click="showServiceDetails(item)"
                       v-for="item in treeInfo"
                       :key="item.id">
                    <div class="serContent">
                      <div class="zz">
                        <div class="image">
                          <img src="@static/img/frontdesk/23456.png">
                          <div class="zzCon">{{item.serName}}</div>
                        </div>
                      </div>
                      <span class="serTitle">服务类型：{{item.serType}}</span>
                      <div><span>发布时间：{{item.pubDate}}</span><span class="pzy">浏览{{item.hits}}人</span></div>
                      <span>提供单位：{{item.pubUnit}}</span>
                    </div>
                  </div>
                  <!-- //  分页 -->
                  <div class="page"
                       v-if="treeInfo.length !== 0">
                    <el-pagination background
                                   layout="prev, pager, next"
                                   :total="total"
                                   :page-size="pageSize"
                                   @current-change="changePage">
                    </el-pagination>
                  </div>
                </el-card>
              </el-tab-pane>
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
import { getTreeData } from '@api/admin/myDirectory'
import { getTreeDataInfo, getSaveVisitNum } from '@api/frontdesk/myService'
import { async } from 'q';
export default {
  name: 'serviceDirectory',
  components: {
    MyNav, MyMenu, Footer
  },
  data () {
    return {
      data: [],
      defaultProps: {
        children: 'children',
        label: 'catalogName',
        id: 'catalogId'
      },
      searchContent: '',
      num: 1000,
      showOrder: 'first',
      currentPage4: 4,
      count: 8,
      pageNum: 1,
      pageSize: 3,
      total: 0,
      treeInfo: [],
      label: 'WMTS',
      paramName: 'id'
    }
  },
  mounted: async function () {
    this.TreeData()
    //  刷新时原始数据
    this.handleNodeClick({ catalogName: 'WMTS' })
  },
  methods: {
    //  获取左边tree节点数据
    TreeData: async function () {
      let res = await getTreeData({})
      this.data = res.data.data
    },
    //  点击tree节点
    handleNodeClick: async function (data) {
      if (data.children !== null && data.children !== undefined) return false
      console.log(data)
      this.label = data.catalogName
      let res = await getTreeDataInfo({ label: this.label, pageNum: this.pageNum, pageSize: this.pageSize, paramName: this.paramName })
      this.treeInfo = res.data.list
      this.total = res.data.total
      this.pageSize = res.data.pageSize
      this.pageNum = res.data.pageNum
    },
    //  点击切换标签页
    handleClick: async function (tab, event) {
      console.log(tab.label)
      if (tab.label === '浏览次数') {
        this.paramName = 'hits'
      } else if (tab.label === '发布时间') {
        this.paramName = 'pub_date'
      }
      let res = await getTreeDataInfo({ label: this.label, pageNum: this.pageNum, pageSize: this.pageSize, paramName: this.paramName })
      this.treeInfo = res.data.list
      this.total = res.data.total
      this.pageSize = res.data.pageSize
      this.pageNum = res.data.pageNum
    },
    // -------------分页---------------------
    changePage: async function (page) {
      console.log(page)
      this.pageNum = page
      let res = await getTreeDataInfo({ label: this.label, pageNum: this.pageNum, pageSize: this.pageSize, paramName: this.paramName })
      console.log(res)
      this.treeInfo = res.data.list
      this.total = res.data.total
      this.pageSize = res.data.pageSize
      this.pageNum = res.data.pageNum
    },
    //  服务详情界面
    showServiceDetails: async function (item) {
      console.log(item)
      //  浏览量  /ServiceManager/saveVisitNum
      let res = await getSaveVisitNum({ serviceId: item.id })
      this.$router.push({
        name: `serviceDetails`,
        params: item
      })
    }
  }
}
</script>
<style lang="less" scoped>
#serviceDirectory {
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
      position: relative;
      span {
        white-space: nowrap;
      }
    }
  }
}
.zz {
  width: 227px;
  height: 140px;
  overflow: hidden;
  .image {
    height: 180px;
    &:hover {
      margin-top: -40px;
    }
  }
}
.zzCon {
  background: rgba(0, 0, 0, 0.4);
  // opacity: 0.1;
  color: white;
}
</style>
