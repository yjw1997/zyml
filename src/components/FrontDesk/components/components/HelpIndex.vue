<template>
  <div id="HelpIndex">
    <div id="con">
      <div id="left">
        <Tree :data="data"></Tree>
      </div>
      <div id="center">
        <div class="title">
          平台简介
        </div>
        <div class="">
          平台基于SOA思想，采用“一体化框架+插件”多层式企业软件架构开发实现，遵循国际OGC、国家公共平台、数字城市、电子政务等相关标准，提供数据的共享交换，跨部门、跨行政等级、跨网络、跨平台的服务共享以及简单易用的二次开发接口，具有各组成模块可插拔，界面风格可配置，数据交换个性化，服务定制个性化，运维管理可分层分级等特点。平台主要功能模块有电子地图、我的空间、数据中心、服务中心、运维中心、门户网站和在线帮助。
        </div>
      </div>
      <div id="right">
        <div class="title">
          本页目录
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
#HelpIndex {
  width: 100%;
  .tc();
  #con {
    width: 80%;
    .box-check();
    .ib();
    .p15();
    height: 400px;
    #left {
      width: 20%;
      .ib();
      .tl();
      .fl();
      .border-right();
      height: 100%;
    }
    #center {
      width: 60%;
      .ib();
      // position: relative;
      .border-right();
      height: 100%;
    }
    #right {
      width: 19%;
      .ib();
      .fr();
      height: 100%;
    }
  }
}
</style>
