<template>
  <div id="footer">
    <div id="content">
      <div class="cscenter">
        <div class="title"> Copyright 2013 福州市人民政府 All Rights Reserved</div>
        <div class="title"> 福州市"数字福州"建设领导小组办公室 承办 福州市勘测院 技术支持</div>
        <div class="title"> 审图号：闽S [2016] 5号 备案号：闽ICP备11009988号</div>
      </div>
    </div>
    <BackTop :height="100"
             :bottom="200">
      <div class="fr button">返回顶端</div>
    </BackTop>
  </div>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style lang="less" scoped>
#footer {
  .ul();
  .tc();
  height: 175px;
  position: relative;
}
#content {
  .ib();
  width: 75%;
  height: 100%;
  .box-check();
}
.button {
  padding: 8px 15px;
  border-radius: 4px;
  background-color: #999;
  color: white;
}
</style>
