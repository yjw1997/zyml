<template>
  <div id="mapIndex">
    <div id="left">
      <div class="title">专题图层</div>
      <Tree
        :data="data"
        multiple
        show-checkbox
      ></Tree>
    </div>
    <div id="center">
<img src="../../../assets/u27.png" width="100%" height="100%">
    </div>
    <div id="right">
        <div class="title p15 ib">搜索結果</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          title: 'parent 1',
          expand: true,
          selected: true,
          children: [
            {
              title: 'parent 1-1',
              expand: true,
              children: [
                {
                  title: 'leaf 1-1-1',
                  disabled: true
                },
                {
                  title: 'leaf 1-1-2'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
#mapIndex {
  width: 100%;
  .tc();
  height: 700px;
  #left {
    width: 20%;
    height: 100%;
    .ib();
    .fl();
    .border-right();
  }
  #center {
    width: 55%;
    height: 100%;
    .ib();
  }
  #right {
    width: 20%;
    height: 100%;
    .ib();
    .tc();
    .fr();
    .border-left();
  }
}
</style>
