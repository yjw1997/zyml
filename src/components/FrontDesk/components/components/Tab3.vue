<template>
  <div id="HelpIndex">
    <div id="con">
      <div id="left">
        <div id="leftTop">
          <div class="title">文档中心</div>
          <div>热门标签</div>
          <Tag>标签一</Tag>
          <Tag>标签一</Tag>
          <Tag>标签一</Tag>
          <Tag>标签一</Tag>
        </div>
        <div class="p15">
          <Input
            suffix="ios-search"
            placeholder="关键字搜索"
            style="width: auto"
          />
        </div>
        <Tree :data="data"></Tree>
      </div>
      <div id="center">
        <div class="title">
          概述
        </div>
        <div class="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
        </div>
        <div class="title">
          标题一
        </div>
        <div class="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
        </div>
        <div class="title">
          标题二
        </div>
        <div class="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
        </div>
        <div class="title">
          标题三
        </div>
        <div class="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus </div>
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
  data() {
    return {
      data: [
        {
          title: '入门指导',
          expand: true,
          children: [
            {
              title: '概述',
            },
            {
              title: '开发指南',
            }
          ]
        },
        {
          title: 'API类参考',
          expand: true,
          children: [
            {
              title: '核心类',
            },
            {
              title: '基础类',
            },
            {
              title: '图层类',
            },
            {
              title: '空间类',
            },
            {
                title:'时间控件'
            }
          ]
        },
        {
          title: '平台服务',
          expand: true,
          children: [
            {
              title: '平台服务简介',
            },
            {
              title: 'WMS服务',
            },
            {
              title: 'WMTS服务',
            },
            {
              title: 'WFS服务',
            }, {
              title: '地图标绘服务',
            }
          ]
        },
        {
            title:'API错误中心'
        },
        {
            title:'常见问题'
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
    width: 100%;
    .box-check();
    .ib();
    .p15();
    height: 650px;
    #left {
      width: 20%;
      .ib();
      .tl();
      .fl();
      .border-right();
      height: 100%;
      #leftTop {
        width: 100%;
        height: 80px;
        .shadow();
      }
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
