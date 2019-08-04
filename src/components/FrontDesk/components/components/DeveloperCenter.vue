<template>
  <div id="DeveloperCenter">
    <MyNav></MyNav>
    <Imgurl></Imgurl>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import MyNav from '../components/mynav'
import Footer from '../components/footer'
import Imgurl from '../components/imgurl'
export default {
  name: 'SampleApp',
  components: {
    MyNav, Footer,Imgurl
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
      this.$router.push({ path: '/DeveloperCenter/DeveloperCenterIndex' })
    }
  }
}
</script>
<style lang="less" scoped>
#DeveloperCenter {
  width: 100%;
}
</style>
