<template>
  <div class="body">
    <!-- <Nav></Nav> -->
    <router-view></router-view>

  </div>
</template>
<script>
// import Nav from '@fc/nav'
export default {
  name: 'index',
  components: {
    // Nav
  },
  mounted () {
    // this.$router.push({path: '/index/home'})
  }
}
</script>
<style>
</style>
