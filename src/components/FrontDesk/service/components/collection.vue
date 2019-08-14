<template>
  <div id="collection"
       class="index">
    <MyNav></MyNav>
    <MyMenu activeIndex="2"></MyMenu>
    <div class="box tc">
      <div class="ib w60 psx">
        <div class="collectionLeft">
          <div :class="activeClass === 1 ? 'active':''"
               @click="activeClass = 1">我的收藏</div>
          <div :class="activeClass === 2 ? 'active':''"
               @click="activeClass = 2">我的申请</div>
        </div>
        <div class="collectionRight">
          <div class="serviceInfo"
               @click="showServiceDetails(item)"
               v-for="item in count"
               :key="item">
            <div class="serContent">
              <img src="@static/img/frontdesk/23456.png"
                   class="image">
              <span class="serTitle">服务类型：WMIS</span>
              <div><span>发布时间：2019-07-29</span><span class="pzy">浏览1234567人</span></div>
              <span>提供单位：福州市数字办</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import MyNav from '@fc/nav'
import MyMenu from '@fc/myMenu'
import Footer from '@fc/footer'
export default {
  name: 'collection',
  components: {
    MyNav, MyMenu, Footer
  },
  data () {
    return {
      activeClass: 1,
      count: 9
    }
  },
  methods: {
    showServiceDetails (id) {
      console.log(id)
      this.$router.push({
        name: `serviceDetails`,
        params: id
      })
    }
  }
}
</script>
<style lang="less" scoped>
#collection {
  .box {
    height: 800px !important;
    .collectionLeft {
      width: 20%;
      height: 100%;
      .ib();
      .fl();
      div {
        width: 200px;
        height: 41px;
        font-size: 18px;
        font-weight: 400;
        line-height: 34px;
      }
    }
    .collectionRight {
      width: 79%;
      height: 100%;
      .ib();
    }
  }
}
.active {
  color: rgba(255, 255, 255, 1);
  background-image: url("../../../../static/img/frontdesk/coll.png");
}
.serTitle {
  font-size: 14px;
  font-weight: 400;
  color: #333333;
}
.serContent {
  .tl();
}
.serviceInfo {
  width: 227px;
  .ib();
  font-size: 12px;
  line-height: 24px;
  font-weight: 400;
  color: #666666;
  .ib();
  padding: 5px;
  .tl();
  span {
    white-space: nowrap;
  }
}
</style>
