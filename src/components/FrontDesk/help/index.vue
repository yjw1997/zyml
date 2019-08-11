<template>
  <div id="help"
       class="index">
    <MyNav></MyNav>
    <MyMenu activeIndex="7"></MyMenu>
    <div class="w100 tc">
      <div class="helpContent">
        <div class="helpLeft">
          <el-tree :data="data"
                   :props="defaultProps"
                   @node-click="handleNodeClick"
                   node-key="id"
                   :default-expanded-keys="[1, 2]"></el-tree>
        </div>
        <div id="helpCenter"
             v-show="showCon === 2">
          <div class="introduction"
               id="last1">
            <el-button size="large"
                       type="primary">平台简介</el-button>
            <div class="con"
                 id="last1">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;平台基于SOA思想，采用“一体化框架+插件”多层式企业软件架构开发实现，遵循国际OGC、国家公共平台、数字城市、电子政务等相关标准，提供数据的共享交换，跨部门、跨行政等级、跨网络、跨平台的服务共享以及简单易用的二次开发接口，具有各组成模块可插拔，界面风格可配置，数据交换个性化，服务定制个性化，运维管理可分层分级等特点。平台主要功能模块有电子地图、我的空间、数据中心、服务中心、运维中心、门户网站和在线帮助。
            </div>
          </div>
          <div class="introduction"
               id="last2">
            <div class="tl">
              <el-button size="mini"
                         type="primary">电子地图</el-button>
            </div>
            <div class="con"
                 id="last2">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;电子地图提供所有数据和服务的“一张图”展示，提供地图浏览、地图量测、地图标绘、地图纠错、空间查询、全文检索以及空间分析等丰富的工具为数据分析、业务处理、辅助决策等应用提供支持。特别需要指出的是，通过权限配置、数据交换机制控制、服务共享机制控制，对于不同的注册用户可以使用的功能模块、数据和服务可能不同。
            </div>
          </div>
          <div class="introduction"
               id="last3">
            <div class="tl">
              <el-button size="mini"
                         type="primary">我的空间</el-button>
            </div>
            <div class="con"
                 id="last3">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为便于数据与服务的管理、审批，我的空间包括我的任务、我的数据、我的服务和我的信息四大功能模块，主要功能包括汇集所有需要我审批的申请业务，并提供待办的和已办的申请业务的查询；汇集我拥有的和申请的所有数据，并提供我申请的数据的审核状态查询；汇集所有我申请的和发布的服务，提供审核状态查询、服务状态管理、注册管理等功能；提供我的个人信息浏览和修改更新的功能。
            </div>
          </div>
          <div class="introduction"
               id="last4">
            <div class="tl">
              <el-button size="mini"
                         type="primary">数据中心</el-button>
            </div>
            <div class="con"
                 id="last4">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数据中心提供目录注册、服务定制、数据配置、数据检索、上传管理、下载管理等功能模块实现数据交换共享。主要功能包括自有数据目录体系建设与数据发布；原有数据库数据迁移并添加到自建数据目录体系；显示平台所有用户的数据目录体系并且提供预览，方便用户选择、提出交换申请；能够配置服务的图层样式，采用自主研发的GIMS自动发布注册自定义服务，能够提高服务性能；提供数据交换审批管理、数据权限配置等。这些功能模块充分考虑了数据安全方面的要求，在实现数据交换的同时也提供使用权限审批控制的管理功能。
            </div>
          </div>
          <div class="introduction"
               id="last5">
            <div class="tl">
              <el-button size="mini"
                         type="primary">服务中心</el-button>
            </div>
            <div class="con"
                 id="last5">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;服务中心主要实现服务共享与互操作，基于平台服务进行二次开发所需要的功能和管理职能，包括服务注册、服务注册草稿箱、服务注册管理、服务检索、ArcGIS服务注册、服务申请管理、服务拆分和服务聚合等功能模块，这些功能模块的实现充分考虑了用户操作的便捷性和服务的使用权限，可以提供谁注册服务由谁来审批管理的管理功能。
            </div>
          </div>
          <div class="introduction"
               id="last6">
            <div class="tl">
              <el-button size="mini"
                         type="primary">运维中心</el-button>
            </div>
            <div class="con"
                 id="last6">
              <div>运维中心集中平台运维管理所需的功能模块，主要包括：</div>
              <div>1. 日志管理</div>
              <div>记录服务管理、用户操作、系统登录、服务巡检等日志信息，并提供查询，直观的图表统计展示。</div>
              <div>2. 系统服务</div>
              <div>管理支撑整个平台稳定运行的所有服务，提供系统服务增加、修改、删除、查询和同步等功能。</div>
              <div>3. 用户管理</div>
              <div>提供个人用户的增加、修改、删除、权限配置和与部门、角色进行关联等功能。个人用户主要用于登录使用平台。</div>
              <div>4. 业务授权</div>
              <div>配置各个用户角色可以使用哪些功能模块。</div>
              <div>5. 服务分类管理</div>
              <div>对各种服务进行分类管理。</div>
              <div>6. 流程管理</div>
              <div>提供对业务流程的定制功能。</div>
              <div>7. 主题配置</div>
              <div>提供平台界面皮肤风格的自定义设置功能。</div>
              <div>8. 新闻管理</div>
              <div>管理门户网站的新闻板块，提供新闻增加、修改、删除和查询等功能。</div>

            </div>
          </div>
          <div class="introduction"
               id="last7">
            <div class="tl">
              <el-button size="mini"
                         type="primary">门户网站</el-button>
            </div>
            <div class="con"
                 id="last7">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了方便用户了解平台，平台的门户网站提供平台介绍、平台动态、更新日志、热点服务、服务资源、示范应用以及各子系统入口等功能模块。
            </div>
          </div>
          <div class="introduction"
               id="last8">
            <div class="tl">
              <el-button size="mini"
                         type="primary">在线帮助</el-button>
            </div>
            <div class="con"
                 id="last8">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了方便用户了解平台如何操作或者进行二次开发，在线帮助包括平台简要介绍、操作指南和开发指南三大模块。
            </div>
          </div>
        </div>
        <div class="helpCenter"
             v-show="showCon === 3">
          <div class="introduction">
            <el-button size="large"
                       type="primary">平台总体结构</el-button>
            <div class="con">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;平台采用了基于SOA的“一体化框架+插件”设计思想，运用多层式企业应用构架，实现了各个功能模块可插拔、可随意配置的一体化平台，具有开放性、稳定性、兼容性和易扩展、易维护等特点。平台总体结构见图所示。
            </div>
            <div class="con">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中，数据层是平台的基础层，它为平台的服务层、应用框架层和应用提供数据支撑。
            </div>
            <div class="con">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;服务层是平台建设的核心内容，主要包括数据服务、目录服务、注册服务、查询服务、统计服务等遵循OGC标准、国家标准和行业标准而建设的服务接口，以平台一体化展示终端为统一访问界面，通过虚拟数据总线对外提供数据服务接口和功能服务接口；用户既可通过一体化展示终端使用平台提供的在线地理信息服务，也可通过调用平台提供的功能接口，快速构建业务应用系统。
            </div>
            <div class="con">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;应用框架层为平台一体化框架和采用插件技术创建的接口管理组件、服务发布组件、服务注册组件等组件模块，这些模块插入框架中即可在一体化展示终端展示，拔出则在一体化展示终端中消失。
              应用层主要包括向用户展示门户网站、展示平台数据以及服务，并且提供丰富的分析工具。除此之外，还向用户提供服务接口支持第三方系统基于平台进行二次开发，提供服务注册功能方便用户注册服务，聚集更多服务。
            </div>
          </div>
        </div>
        <el-divider direction="vertical"></el-divider>
        <div class="helpRight">
          <el-timeline>
            <el-timeline-item v-for="(activity, index) in activities"
                              v-show="showCon === 2"
                              :key="index"
                              :icon="activity.icon"
                              :type="activity.type"
                              :color="activity.color"
                              :size="activity.size">
              {{activity.content}}
            </el-timeline-item>
          </el-timeline>
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
  name: 'help',
  components: {
    MyNav, MyMenu, Footer
  },
  mounted () {
    // chrome and ie
    //  监听滚动事件
    document.getElementById('helpCenter').addEventListener('scroll', this.handleScroll)
  },
  data () {
    return {
      data: [{
        id: 1,
        label: '平台概述',
        children: [{
          label: '平台简介'
        }, {
          label: '平台总体结构'
        }]
      }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      activities: [
        {
          content: '平台简介',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'

        }, {
          content: '电子地图',
          color: '#CCCCCC'

        }, {
          content: '我的空间',
          size: 'large',
          color: ' #CCCCCC'
        }, {
          content: '数据中心',
          color: ' #CCCCCC'
        }, {
          content: '服务中心',
          color: ' #CCCCCC'
        }, {
          content: '运维中心',
          color: ' #CCCCCC'
        }, {
          content: '门户网站',
          color: ' #CCCCCC'
        }, {
          content: '在线帮助',
          color: ' #CCCCCC'
        }
      ],
      showCon: 2
    }
  },
  methods: {
    handleNodeClick (data) {
      console.log(data)
      this.showCon = data.$treeNodeId
    },
    // 判断滚动位改变时间线
    handleScroll (e) {
      // var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var scrollTop = document.getElementById('helpCenter').scrollTop
      console.log(scrollTop)
      //  电子地图
      if (scrollTop > 0 && scrollTop < 100) {
        for (var item in this.activities) {
          if (item !== 1 || item !== 0) {
            this.activities[item].color = '#CCCCCC'
          }
        }
        this.activities[0].color = '#409EFF'
        this.activities[1].color = '#0bbd87'
      } else if (scrollTop > 100 && scrollTop < 200) {
        for (var item2 in this.activities) {
          if (item2 !== 1 || item2 !== 0 || item2 !== 2) {
            this.activities[item2].color = '#CCCCCC'
          }
        }
        this.activities[0].color = '#409EFF'
        this.activities[1].color = '#0bbd87'
        this.activities[2].color = '#0bbd87'
      } else if (scrollTop > 200 && scrollTop < 300) {
        for (var item3 in this.activities) {
          if (item3 !== 1 || item3 !== 0 || item3 !== 2 || item3 !== 3) {
            this.activities[item3].color = '#CCCCCC'
          }
        }
        this.activities[0].color = '#409EFF'
        this.activities[1].color = '#0bbd87'
        this.activities[2].color = '#0bbd87'
        this.activities[3].color = '#0bbd87'
      } else if (scrollTop > 300 && scrollTop < 400) {
        for (var item4 in this.activities) {
          if (item4 !== 1 || item4 !== 0 || item4 !== 2 || item4 !== 3 || item4 !== 4) {
            this.activities[item4].color = '#CCCCCC'
          }
        }
        this.activities[0].color = '#409EFF'
        this.activities[1].color = '#0bbd87'
        this.activities[2].color = '#0bbd87'
        this.activities[3].color = '#0bbd87'
        this.activities[4].color = '#0bbd87'
      } else if (scrollTop > 400 && scrollTop < 802) {
        for (var item5 in this.activities) {
          if (item5 !== 1 || item5 !== 0 || item5 !== 2 || item5 !== 3 || item5 !== 4 || item5 !== 5) {
            this.activities[item5].color = '#CCCCCC'
          }
        }
        this.activities[0].color = '#409EFF'
        this.activities[1].color = '#0bbd87'
        this.activities[2].color = '#0bbd87'
        this.activities[3].color = '#0bbd87'
        this.activities[4].color = '#0bbd87'
        this.activities[5].color = '#0bbd87'
      } else if (scrollTop > 802 && scrollTop < 935) {
        console.log('我是门户')
        for (var item6 in this.activities) {
          this.activities[item6].color = '#CCCCCC'
        }
        this.activities[0].color = '#409EFF'
        this.activities[1].color = '#0bbd87'
        this.activities[2].color = '#0bbd87'
        this.activities[3].color = '#0bbd87'
        this.activities[4].color = '#0bbd87'
        this.activities[5].color = '#0bbd87'
        this.activities[6].color = '#0bbd87'
      } else if (scrollTop > 935) {
        // console.log('我是在线')
        for (var item7 in this.activities) {
          this.activities[item7].color = '#409EFF'
        }
        // this.activities[0].color = '#409EFF'
      }
    }
  }
}
</script>
<style lang="less" scoped>
#help {
  .helpContent {
    .w65();
    .ib();
    .helpLeft {
      .ib();
      width: 20%;
      .fl();
    }
    #helpCenter {
      .ib();
      width: 59%;
      .fl();
      height: 674px;
      overflow: auto;
    }
    .helpCenter {
      .ib();
      width: 59%;
      .fl();
      height: 674px;
      overflow: auto;
    }
    .helpRight {
      .ib();
      width: 20%;
      .fr();
    }
    .con {
      font-size: 14px;
      font-weight: 400;
      line-height: 32px;
      color: #333333;
      .tl();
    }
    .introduction {
      .psx();
    }
  }
}
</style>
