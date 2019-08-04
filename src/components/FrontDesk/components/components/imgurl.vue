<template>
  <div id="imgurl">
    <div id="top">
      <ul style="display: inline-block;width:100%">
        <li v-if="show">
          <img
            src="http://demo.cssmoban.com/cssthemes5/cpts_1332_bzv/images/project-2.jpg"
            class="img"
          />
          <span><router-link to="/index">首页</router-link></span>
        </li>
        <li>
          <img
            src="http://demo.cssmoban.com/cssthemes5/cpts_1332_bzv/images/project-2.jpg"
            class="img"
          />
          <span
            ><router-link to="/recourse/serverRecourse"
              >资源中心</router-link
            ></span
          >
        </li>
        <li>
          <img
            src="http://demo.cssmoban.com/cssthemes5/cpts_1332_bzv/images/project-2.jpg"
            class="img"
          />

          <span><router-link to="/digitalMap">电子地图</router-link></span>
        </li>
        <li>
          <img
            src="http://demo.cssmoban.com/cssthemes5/cpts_1332_bzv/images/project-2.jpg"
            class="img"
          />

          <span
            ><router-link to="/SampleApp/SampleAppindex"
              >示例应用</router-link
            ></span
          >
        </li>
        <li>
          <img
            src="http://demo.cssmoban.com/cssthemes5/cpts_1332_bzv/images/project-2.jpg"
            class="img"
          />

          <span><router-link to="/ThematicMap">专题地图</router-link> </span>
        </li>
        <li>
          <img
            src="http://demo.cssmoban.com/cssthemes5/cpts_1332_bzv/images/project-2.jpg"
            class="img"
          />

          <span
            ><router-link to="/DeveloperCenter/DeveloperCenterIndex"
              >开发者中心</router-link
            >
          </span>
        </li>
        <li>
          <img
            src="http://demo.cssmoban.com/cssthemes5/cpts_1332_bzv/images/project-2.jpg"
            class="img"
          />

          <span><router-link to="/help/HelpIndex">平台帮助</router-link></span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'imgurl',
  data () {
    return {

    }
  },
  props: {
    show: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="less" scoped>
#imgurl {
  width: 100%;
  .tc();
  .mb15();
  #top {
    width: 80%;
    .ib();
    li {
      .fl();
      width: 10%;
      .ib();
      .tc();
      border-radius: 50%;
      margin: 0px 2%;
      position: relative;
      &:hover {
        cursor: pointer;
        .box-check();
      }
    }
    span {
      .cscenter();
      color: white;
      font-weight: 700;
      font-size: 17px;
    }
  }
}
</style>
