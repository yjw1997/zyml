<template>
  <div class="body">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'index',
  components: {
  },
  mounted () {
    // this.$router.push({path: '/index/home'})
  }
}
</script>
<style lang="less" scoped>
</style>
