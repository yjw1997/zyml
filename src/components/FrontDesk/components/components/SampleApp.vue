<template>
  <div id="SampleApp">
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
  name: 'SampleApp',
  components: {
    MyNav, ImageUrl, Footer
  },
  data () {
    return {

    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.$router.push({ path: '/SampleApp/SampleAppindex' })
    }
  }
}
</script>
<style lang="less" scoped>
#SampleApp {
  width: 100%;
}
</style>
