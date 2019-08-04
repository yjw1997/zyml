<template>
<div id="tab1">
<div><img src="../../../assets/u27.png"/></div>
<div id="steps" class="p15 box-check">
  <div class="title tl mb15"><span>使用方法</span></div>
  <Steps >
        <Step  content="注册用户"></Step>
        <Step  content="申请成为开发者"></Step>
        <Step  content="获得许可证（key）"></Step>
        <Step  content="使用API及服务"></Step>
    </Steps>
</div>
<div><img src="../../../assets/u49.png"/></div>
</div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
#tab1{
  width: 100%;
  .tc();
  #steps{
    width: 80%;
    .ib();

  }
}
</style>
