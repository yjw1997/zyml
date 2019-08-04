<template>
  <div class="ul">
    <div id="left">
      <div class="title">
        最新服务
      </div>
      <div class="p15">
        <Ul></Ul>
      </div>

    </div>
    <div id="right">
      <div class="title">
        热点服务
      </div>
      <div class="p15">
        <Ul></Ul>
      </div>

    </div>
  </div>
</template>
<script>
import Ul from '../components/indexTabsContent'
export default {
  name: 'indexTabs3',
  components: {
    Ul
  }
}
</script>

<style lang="less" scoped>
#left {
  .ib();
  height: 100%;
  width: 49%;
  .shadow();
}
#right {
  .ib();
  height: 100%;
  width: 49%;
  .shadow();
}
</style>
