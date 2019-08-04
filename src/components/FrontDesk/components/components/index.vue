<template>
  <div id="app">
    <MyNav></MyNav>
    <Search></Search>
    <ImgUrl></ImgUrl>
    <ImageUrlBottom></ImageUrlBottom>
    <IndexTabs></IndexTabs>
    <Footer></Footer>
  </div>
</template>

<script>
import MyNav from '../components/mynav'
import Search from '../components/search'
import ImgUrl from '../components/imgurl'
import IndexTabs from '../components/indexTabs'
import Footer from '../components/footer'
import ImageUrlBottom from '../components/imageurlBottom'

export default {
  name: 'index',
  components: {
    MyNav, Search, ImgUrl, IndexTabs, Footer, ImageUrlBottom
  }
}
</script>
