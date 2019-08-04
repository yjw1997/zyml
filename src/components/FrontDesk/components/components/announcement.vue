<template>
  <div id="announcement">
    <MyNav></MyNav>
    <ImgUrl></ImgUrl>
    <div
      id="con"
      class="box-check"
    >
      <Breadcrumb class="fl p15">
        <BreadcrumbItem to="/index">首页</BreadcrumbItem>
        <BreadcrumbItem to="/index">平台动态</BreadcrumbItem>
        <BreadcrumbItem>通知公告</BreadcrumbItem>
      </Breadcrumb>
      <ul class="ul">
        <li>天地图·福建数据更新公告20161028 <span class="fr">[2016-10-28]</span></li>
        <li>数据更新公告20160113 <span class="fr">[2016-10-28]</span></li>
        <li>数据更新公告20160902 <span class="fr">[2016-10-28]</span></li>
        <li>数据更新公告20160527 <span class="fr">[2016-10-28]</span></li>
        <li>天地图·福建完成对海峡奥体公园附近区域数据更新 <span class="fr">[2016-10-28]</span></li>
        <li>2016年新版“天地图·福建”正式上线 <span class="fr">[2016-10-28]</span></li>
        <li>数据更新公告20160401 <span class="fr">[2016-10-28]</span></li>
        <li>“天地图·福建”门户网站版本更新公告20150303 <span class="fr">[2016-10-28]</span></li>
        <li>数据更新公告20150303 <span class="fr">[2016-10-28]</span></li>
      </ul>
       <Page :total="100" class="ib"/>
    </div>
    <Footer></Footer>
  </div>

</template>
<script>
import MyNav from '../components/mynav'
import ImgUrl from '../components/imgurl'
import Footer from '../components/footer'
export default {
  components: {
    MyNav, ImgUrl, Footer
  }
}
</script>
<style lang="less" scoped>
#announcement {
  width: 100%;
  .tc();
  #con {
    width: 75%;
    .p15();
    .ib();
  }
}
ul {
  .tl();
}
li {
  line-height: 30px;
}
</style>

