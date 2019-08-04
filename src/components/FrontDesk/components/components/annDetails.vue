<template>
  <div id="annDetails">
    <MyNav></MyNav>
    <ImageUrl></ImageUrl>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import MyNav from '../components/mynav'
import ImageUrl from '../components/imgurl'
import Footer from '../components/footer'
export default {
  name: 'annDetails',
  components: {
    MyNav, ImageUrl, Footer
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.$router.push({ path: '/annDetails/annDetailsIndex' })
    }
  }
}
</script>
<style lang="less" scoped>
</style>

