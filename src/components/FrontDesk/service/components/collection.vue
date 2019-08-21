<template>
  <div id="collection"
       class="index">
    <MyNav></MyNav>
    <MyMenu activeIndex="2"></MyMenu>
    <div class="box tc">
      <div class="ib w60 psx">
        <div class="collectionLeft">
          <div :class="activeClass === 1 ? 'active':''"
               @click="myCollection">我的收藏</div>
          <div :class="activeClass === 2 ? 'active':''"
               @click="myApplication">我的申请</div>
        </div>
        <!-- //  我的收藏 -->
        <div class="collectionRight"
             v-if="activeClass === 1">
          <div class="serviceInfo"
               @click="showServiceDetails(item)"
               v-for="item in myCollectionList"
               :key="item.id">
            <div class="serContent">
              <img src="@static/img/frontdesk/23456.png"
                   class="image">
              <span class="serTitle">服务类型：{{item.serType}}</span>
              <div><span>发布时间：{{item.pubDate}}</span><span class="pzy">浏览{{item.hits}}人</span></div>
              <span>提供单位：{{item.pubUnit}}</span>
            </div>
          </div>
          <!-- //  分页 -->
          <div class="page"
               v-if="myCollectionList.length !== 0">
            <el-pagination background
                           layout="prev, pager, next"
                           :total="total"
                           :page-size="pageSize"
                           @current-change="changePage">
            </el-pagination>
          </div>
        </div>
        <!-- //  我的申请 -->
        <div class="collectionRight"
             v-if="activeClass === 2">
          <div class="serviceInfo"
               @click="showServiceDetails2(item)"
               v-for="item in myApplicationList"
               :key="item.id">
            <div class="serContent">
              <img src="@static/img/frontdesk/23456.png"
                   class="image">
              <span class="serTitle">服务类型：{{item.serType}}</span>
              <div><span>发布时间：{{item.pubDate}}</span><span class="pzy">浏览{{item.hits}}人</span></div>
              <span>提供单位：{{item.pubUnit}}</span>
            </div>
          </div>
          <!-- //  分页 -->
          <div class="page"
               v-if="myApplicationList.length !== 0">
            <el-pagination background
                           layout="prev, pager, next"
                           :total="total2"
                           :page-size="pageSize2"
                           @current-change="changePage2">
            </el-pagination>
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
import { getCollectionList, getApplicationList } from '@api/frontdesk/myService'
export default {
  name: 'collection',
  components: {
    MyNav, MyMenu, Footer
  },
  data () {
    return {
      activeClass: 1,
      count: 9,
      pageSize: 3,
      pageNum: 1,
      total: 0,
      pageSize2: 3,
      pageNum2: 1,
      total2: 0,
      myCollectionList: [],
      myApplicationList: []
    }
  },
  mounted () {
    this.myCollection()
  },
  methods: {
    showServiceDetails (id) {
      console.log(id)
      this.$router.push({
        name: `serviceDetails`,
        params: id
      })
    },
    //  我的收藏列表
    myCollection: async function () {
      this.activeClass = 1
      let res = await getCollectionList({ pageNum: this.pageNum, pageSize: this.pageSize })
      this.myCollectionList = res.data.list
      this.total = res.data.total
      this.pageSize = res.data.pageSize
      this.pageNum = res.data.pageNum
    },
    // -------------分页---------------------
    changePage: async function (page) {
      console.log(page)
      this.pageNum = page
      let res = await getCollectionList({ pageNum: this.pageNum, pageSize: this.pageSize })
      console.log(res)
      this.myCollectionList = res.data.list
      this.total = res.data.total
      this.pageSize = res.data.pageSize
      this.pageNum = res.data.pageNum
    },
    //  ------------------------------我的申请-----------------------------------------------------
    myApplication: async function () {
      this.activeClass = 2
      let res = await getApplicationList({ pageNum: this.pageNum2, pageSize: this.pageSize2 })
      this.myApplicationList = res.data.list
      this.total2 = res.data.total
      this.pageSize2 = res.data.pageSize
      this.pageNum2 = res.data.pageNum
    },
    changePage2: async function (page) {
      console.log(page)
      this.pageNum2 = page
      let res = await getApplicationList({ pageNum: this.pageNum2, pageSize: this.pageSize2 })
      console.log(res)
      this.myApplicationList = res.data.list
      this.total2 = res.data.total
      this.pageSize2 = res.data.pageSize
      this.pageNum2 = res.data.pageNum
    },
  },



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
