<template>
  <div id="moreNews"
       class="index">
    <MyNav></MyNav>
    <MyMenu activeIndex="2"></MyMenu>
    <el-breadcrumb separator="/"
                   class="breadcrumb">
      <el-breadcrumb-item>当前位置：</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/index/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/index/service' }">资源中心</el-breadcrumb-item>
      <el-breadcrumb-item>平台动态</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="box tc">
      <div class="w60 ib">
        <div>
          <ul>
            <li><span class="fl">2019年07月影像更新日志</span><span class="fr">2019-7-28 09:30</span></li>
            <li><span class="fl">2019年07月影像更新日志</span><span class="fr">2019-7-28 09:30</span></li>
            <li><span class="fl">2019年07月影像更新日志</span><span class="fr">2019-7-28 09:30</span></li>
            <li><span class="fl">2019年07月影像更新日志</span><span class="fr">2019-7-28 09:30</span></li>
            <li><span class="fl">2019年07月影像更新日志</span><span class="fr">2019-7-28 09:30</span></li>
            <li><span class="fl">2019年07月影像更新日志</span><span class="fr">2019-7-28 09:30</span></li>
            <li><span class="fl">2019年07月影像更新日志</span><span class="fr">2019-7-28 09:30</span></li>
            <li><span class="fl">2019年07月影像更新日志</span><span class="fr">2019-7-28 09:30</span></li>
            <li><span class="fl">2019年07月影像更新日志</span><span class="fr">2019-7-28 09:30</span></li>
          </ul>
          <div class="page">
            <el-pagination @size-change="handleSizeChange"
                           @current-change="handleCurrentChange"
                           :current-page="currentPage4"
                           :page-sizes="[100, 200, 300, 400]"
                           :page-size="100"
                           layout="total, sizes, prev, pager, next, jumper"
                           :total="400">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MyNav from '@fc/nav'
import MyMenu from '@fc/myMenu'
import Footer from '@fc/footer'
export default {
  name: 'moreNews',
  components: {
    MyNav, MyMenu, Footer
  },
  data () {
    return {
      count: 9
    }
  }
}
</script>
<style lang="less" scoped>
#moreNews {
  .breadcrumb {
    margin-left: 386px;
    display: inline-block;
    .p10();
  }
  .w60 {
    li {
      height: 21px;
      .p15();
      border-bottom: 1px solid #999999;
      &:hover {
        .box-check();
      }
    }
  }
}
</style>
