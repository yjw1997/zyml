<template>
  <div id="Tab4">
    <div id="left">
      <Tree :data="data1"></Tree>
    </div>
    <div id="center">

    </div>
    <div id="right">

    </div>

  </div>
</template>

<script>
export default {
  name: "Tab4",
  data() {
    return {
      data1: [
        {
          title: '地图示例',
          expand: true,
          children: [
            {
              title: '创建地图'
            },
            {
              title: '添加瓦片地图服务(WMTS)'
            },
            {
              title: '添加动态地图服务(WMS)'
            },
            {
              title: '添加多个地图服务'
            },
            {
              title: '控制图层显示与隐藏'
            },
            {
              title: '移除图层'
            },
            {
              title: '地图切换'
            },
          ]
        },
        {
          title: '基本操作示例',
          expand: true,
          children: [
            {
              title: '放大地图'
            },
            {
              title: '缩小地图'
            },
            {
              title: '移动地图'
            }
          ]
        }
      ]
    }
  },
  mounted() {

  }
}
</script>

<style lang="less" scoped>
#Tab4 {
  width: 100%;
  #left {
    width: 15%;
    .ib();
    .tl();
  }
  #center {
    width: 30%;
    .ib();
    .codesql {
      text-align: left;
      font-size: 11pt;
      font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono,
        DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
        serif;
    }
  }
  #right {
    width: 50%;
    .ib();
  }
}
</style>
