<template>
  <div class="myNav">
    <div class="title">
      <img src="@static/img/frontdesk/logo.png">
      <img src="@static/img/frontdesk/tdtTitle.png" />
      <img src="@static/img/frontdesk/tdtName.png" />
    </div>
    <div class="search">
      <el-input v-model="searchContent"
                placeholder="请输入搜索关键字"
                style="width: 200px"></el-input>
      <el-button>搜索</el-button>
    </div>
    <div class="ib logn">
      <el-button type="text"><span @click="login">登录</span></el-button> <span class="pzy"></span>
      <el-button type="text"><span @click="register">注册</span></el-button>
    </div>
    <div class="ib fr bc2"><img src="@static/img/frontdesk/bc2.png"
           width="100%"
           height="100%" /></div>

  </div>
</template>
<script>
export default {
  name: 'myNav',
  data () {
    return {
      searchContent: ''
    }
  },
  methods: {
    login () {
      this.$router.push({ name: `login` })
    },
    register () {
      this.$router.push({ name: `register` })
    }
  }
}
</script>
<style lang="less" scoped>
.myNav {
  width: 1920px;
  padding: 32px 0px 25px 0px;
  line-height: 32px;
  position: relative;
  border-bottom: 1px solid #bababa;
  .title {
    position: relative;
    margin-left: 365px;
    .psx();
    .ib();
    img {
      vertical-align: middle;
      margin-left: 23px;
    }
  }
  .search {
    .ib();
    z-index: 2;
    margin-left: 302px;
    position: absolute;
    top: 46px;
  }
  .logn {
    z-index: 2;
    font-size: 14px;
    position: absolute;
    right: 346px;
    top: 46px;
  }
  .bc2 {
    z-index: -2;
  }
}
</style>
