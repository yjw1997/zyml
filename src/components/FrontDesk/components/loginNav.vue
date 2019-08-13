<template>
  <div class="myNav">
    <div class="title">
      <img src="@static/img/frontdesk/logo.png">
      <img src="@static/img/frontdesk/tdtTitle.png" />
      <img src="@static/img/frontdesk/tdtName.png" />
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
      this.$router.push({ name: `login` })
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
