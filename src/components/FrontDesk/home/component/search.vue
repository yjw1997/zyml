<template>
  <div id="search">
    <div id="content">
      <Input type="text"
             search
             enter-button="服务搜索"
             size="large"
             placeholder="请输入你要搜索的内容"
             class="input"
             clearable />
      <div class="seartime">
        热点:
        <el-tag :key="tag"
                v-for="tag in dynamicTags"
                closable
                disable-transitions>
          {{tag}}
        </el-tag>

      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: 'search',
  data () {
    return {
      dynamicTags: ['标签一', '标签二', '标签三']
    }
  }
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
