<template>
  <div class="ul">
    <div class="title">
      更新日誌
    </div>
    <div id="content">
      <Ul></Ul>
    </div>
  </div>

</template>
<script>
import Ul from '../components/indexTabsContent'
export default {
  name: 'indexTabs2',
  components: {
    Ul
  }
}
</script>
<style lang="less" scoped>
#content{
  .tl();
  .ib();
  height: 90%;
  width: 90%;
  .shadow();
  padding: 1%;
}
</style>
