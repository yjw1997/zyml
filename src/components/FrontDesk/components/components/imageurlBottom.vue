<template>
<div class="ul tc">
 <div id="bottom">
      <!-- <ul style="display: inline-block;width:100%">
        <li>
            <img src="http://demo.cssmoban.com/cssthemes5/cpts_1664_coz/images/g7.jpg" width="100%" height="100%">
           <span>智网区</span>
        </li>
        <li>
            <img src="http://demo.cssmoban.com/cssthemes5/cpts_1664_coz/images/g7.jpg" width="100%" height="100%">
        <span>互联网区</span>
        </li>
        <li>
            <img src="http://demo.cssmoban.com/cssthemes5/cpts_1664_coz/images/g7.jpg" width="100%" height="100%">
        <span>政务内网区</span>
        </li>
      </ul> -->
    </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
  #bottom {
    width: 45%;
    .ib();
    li{
       width: 30%;
       .ib();
       padding: 1% 1%;
       margin: 0.5% 0.5%;
       .box-check();
       position: relative;
        &:hover {
            border: 1px solid #9f1818;
            cursor: pointer;
       }
       span{
           font-size: 18px;
           font-weight: 800;
           color: dodgerblue;
           .cscenter();
       }

    }

  }
</style>
