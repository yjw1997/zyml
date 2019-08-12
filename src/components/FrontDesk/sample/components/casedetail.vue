<template>
  <div id="casedetail"
       class="index">
    <MyNav></MyNav>
    <MyMenu activeIndex="4"></MyMenu>
    <el-breadcrumb separator="/"
                   class="breadcrumb">
      <el-breadcrumb-item>当前位置：</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/index/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/index/sample' }">示例应用</el-breadcrumb-item>
      <el-breadcrumb-item>{{titleName}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="box">
      <div class="w60 ib">
        <el-tabs value="first"
                 type="card">
          <el-tab-pane label="案例基本信息"
                       name="first">
            <div class="tl caseContnet">
              <div><span class="caseTitle">案例名称：</span><span class="caseCon">国家海事交通管理信息服务平台</span></div>
              <div><span class="caseTitle">应用类型：</span><span class="caseCon">交通运输</span></div>
              <div><span class="caseTitle">业主单位：</span><span class="caseCon">中华人民共和国海事局</span></div>
              <div><span class="caseTitle">关键字：</span><span class="caseCon">海事、交通管理、航运安全、应急</span></div>
              <div><span class="caseTitle">访问地址：<a href="http://www.ais.msa.gov.cn/hsj/portal/ais_cbxx.page">http://www.ais.msa.gov.cn/hsj/portal/ais_cbxx.page</a>
                </span></div>
              <div><span class="caseTitle">简要介绍：</span><span class="caseCon">
                  为配合开展海上安全交通管理的公众服务需求，国家海事局组织建设了国家海事交通安全管理信息服务平台（简称“AIS”信息服务平台）。国家海事局采用自动识别系统来掌握所有船舶的位置信息，从而达到对海事交通安全监管的目的。通过基于地理信息的平台建设，为我国的航运安全、应急救援和船舶基本信息的管理提供了基础平台。 “天地图”为国家海事交通安全管理信息服务平台提供了全球范围的陆图地理信息服务，它利用了“天地图”信息丰富、整体精度高的优势，有效整合了海图数据和天地图陆图数据，达到了两种数据的空间无缝衔接，实现了从外海到内河导航的无缝过度。同时，通过“天地图”软件平台中提供的POI搜索、地理编码、公交和导航规划等系列服务和借口，满足了地图应用业务的需求。
                </span></div>
              <div><span class="caseTitle">案例图片：</span></div>
              <div>
                <img src="@static/img/frontdesk/case.png"
                     width="200">
                <img src="@static/img/frontdesk/case.png"
                     width="200">
                <img src="@static/img/frontdesk/case.png"
                     width="200">
                <img src="@static/img/frontdesk/case.png"
                     width="200">
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
        <el-tabs value="first"
                 type="card">
          <el-tab-pane label="联系人基本信息"
                       name="first">
            <div class="tl caseContnet">
              <div><span class="caseTitle">联系人：</span><span class="caseCon">雷萤</span></div>
              <div><span class="caseTitle">联系单位：</span><span class="caseCon">交通运输</span></div>
              <div><span class="caseTitle">联系地址：</span><span class="caseCon">北京是海淀区紫竹院路百胜村一号院</span></div>
              <div><span class="caseTitle">联系电话：010-68462660</span></div>
              <div><span class="caseTitle">电子邮箱：</span><span class="caseCon">leiy@ngcc.cn</span></div>
            </div>
          </el-tab-pane>
        </el-tabs>
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
  name: 'casedetail',
  components: {
    MyNav, MyMenu, Footer
  },
  data () {
    return {
      titleName: '国家海事交通管理信息服务平台'
    }
  }
}
</script>
<style lang="less" scoped>
#casedetail {
  .breadcrumb {
    margin-left: 386px;
    display: inline-block;
    .p10();
  }
  .box {
    height: 800px !important;
    .tc();
    .caseContnet {
      font-size: 14px;
      line-height: 36px;
      .caseTitle {
        color: #0186e6;
        font-weight: 600;
      }
      .caseCon {
        color: #666666;
      }
    }
  }
}
</style>
