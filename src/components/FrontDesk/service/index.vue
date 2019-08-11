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
      <div class="w70 ib"
           style="height: 100%">
        <div class="serviceLeft">
          <el-card class="box-card">
            <el-tree :data="data"
                     :props="defaultProps"
                     @node-click="handleNodeClick"></el-tree>
          </el-card>
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
                <el-card :body-style="{ padding: '0px' }">
                  <div class="serviceInfo">
                    <div class="serContent">
                      <img src="@static/img/frontdesk/23456.png"
                           class="image">
                      <span class="serTitle">服务类型：WMIS</span>
                      <div><span>发布时间：2019-07-29</span><span class="pzy">浏览1234567人</span></div>
                      <span>提供单位：福州市数字办</span>
                    </div>
                  </div>
                  <div class="serviceInfo">
                    <div class="serContent">
                      <img src="@static/img/frontdesk/23456.png"
                           class="image">
                      <span class="serTitle">服务类型：WMIS</span>
                      <div><span>发布时间：2019-07-29</span><span class="pzy">浏览1234567人</span></div>
                      <span>提供单位：福州市数字办</span>
                    </div>
                  </div>
                  <div class="serviceInfo">
                    <div class="serContent">
                      <img src="@static/img/frontdesk/23456.png"
                           class="image">
                      <span class="serTitle">服务类型：WMIS</span>
                      <div><span>发布时间：2019-07-29</span><span class="pzy">浏览1234567人</span></div>
                      <span>提供单位：福州市数字办</span>
                    </div>
                  </div>
                  <div class="serviceInfo">
                    <div class="serContent">
                      <img src="@static/img/frontdesk/23456.png"
                           class="image">
                      <span class="serTitle">服务类型：WMIS</span>
                      <div><span>发布时间：2019-07-29</span><span class="pzy">浏览1234567人</span></div>
                      <span>提供单位：福州市数字办</span>
                    </div>
                  </div>
                  <div class="serviceInfo">
                    <div class="serContent">
                      <img src="@static/img/frontdesk/23456.png"
                           class="image">
                      <span class="serTitle">服务类型：WMIS</span>
                      <div><span>发布时间：2019-07-29</span><span class="pzy">浏览1234567人</span></div>
                      <span>提供单位：福州市数字办</span>
                    </div>
                  </div>
                  <div class="serviceInfo">
                    <div class="serContent">
                      <img src="@static/img/frontdesk/23456.png"
                           class="image">
                      <span class="serTitle">服务类型：WMIS</span>
                      <div><span>发布时间：2019-07-29</span><span class="pzy">浏览1234567人</span></div>
                      <span>提供单位：福州市数字办</span>
                    </div>
                  </div>
                  <div class="serviceInfo">
                    <div class="serContent">
                      <img src="@static/img/frontdesk/23456.png"
                           class="image">
                      <span class="serTitle">服务类型：WMIS</span>
                      <div><span>发布时间：2019-07-29</span><span class="pzy">浏览1234567人</span></div>
                      <span>提供单位：福州市数字办</span>
                    </div>
                  </div>
                  <div class="serviceInfo">
                    <div class="serContent">
                      <img src="@static/img/frontdesk/23456.png"
                           class="image">
                      <span class="serTitle">服务类型：WMIS</span>
                      <div><span>发布时间：2019-07-29</span><span class="pzy">浏览1234567人</span></div>
                      <span>提供单位：福州市数字办</span>
                    </div>
                  </div>
                  <div class="serviceInfo">
                    <div class="serContent">
                      <img src="@static/img/frontdesk/23456.png"
                           class="image">
                      <span class="serTitle">服务类型：WMIS</span>
                      <div><span>发布时间：2019-07-29</span><span class="pzy">浏览1234567人</span></div>
                      <span>提供单位：福州市数字办</span>
                    </div>
                  </div>
                  <div class="serviceInfo">
                    <div class="serContent">
                      <img src="@static/img/frontdesk/23456.png"
                           class="image">
                      <span class="serTitle">服务类型：WMIS</span>
                      <div><span>发布时间：2019-07-29</span><span class="pzy">浏览1234567人</span></div>
                      <span>提供单位：福州市数字办</span>
                    </div>
                  </div>
                  <div class="serviceInfo">
                    <div class="serContent">
                      <img src="@static/img/frontdesk/23456.png"
                           class="image">
                      <span class="serTitle">服务类型：WMIS</span>
                      <div><span>发布时间：2019-07-29</span><span class="pzy">浏览1234567人</span></div>
                      <span>提供单位：福州市数字办</span>
                    </div>
                  </div>
                  <div class="serviceInfo">
                    <div class="serContent">
                      <img src="@static/img/frontdesk/23456.png"
                           class="image">
                      <span class="serTitle">服务类型：WMIS</span>
                      <div><span>发布时间：2019-07-29</span><span class="pzy">浏览1234567人</span></div>
                      <span>提供单位：福州市数字办</span>
                    </div>
                  </div>
                  <div class="page">
                    <el-pagination @size-change="handleSizeChange"
                                   @current-change="handleCurrentChange"
                                   :current-page="currentPage4"
                                   :page-sizes="[100, 200, 300, 400]"
                                   :page-size="100"
                                   layout="total, sizes, prev, pager, next, jumper"
                                   :total="400">
                    </el-pagination>
                  </div>
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
  </div>
</template>
<script>
import MyNav from '@fc/nav'
import MyMenu from '@fc/myMenu'
export default {
  name: 'serviceDirectory',
  components: {
    MyNav, MyMenu
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
      num: 1000,
      showOrder: 'first',
      currentPage4: 4
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
    }
  }
}
</script>
<style lang="less" scoped>
#serviceDirectory {
  .breadcrumb {
    margin-left: 280px;
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
    height: 100%;
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
      span {
        white-space: nowrap;
      }
      .p15();
    }
  }
}
</style>
