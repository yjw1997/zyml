<template>
  <div id="search">
    <div id="content">
      <Input
        type="text"
        search
        enter-button="服务搜索"
        size="large"
        placeholder="请输入你要搜索的内容"
        class="input"
        clearable
      />
      <div class="seartime">
        热点:
        <Tag>矢量</Tag>
        <Tag>影像</Tag>
        <Tag>地形</Tag>
        <Tag>栅格</Tag>

      </div>

    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
#search {
  width: 100%;
  .tc;
  .mb15();
}
#content {
  width: 45%;
  .ib();
}
.input {
  margin-bottom: 15px;
}
.seartime {
  .tl();
  font-size: 15px;
  font-weight: 700;
}
</style>
