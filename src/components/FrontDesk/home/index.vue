<template>
  <div class=" ib home">
    <Nav></Nav>
    <MyMenu></MyMenu>
    <div class="banner">
      <img src="@static/img/frontdesk/bannerImg.png"
           alt="">
    </div>
    <div class="box mt60 tc">
      <div class="w65 ib">
        <el-tabs v-model="activeName"
                 type="card">
          <el-tab-pane label="通知公告"
                       name="first">
            <div class="fl pr">
              <img src="@static/img/frontdesk/announcement.png"
                   alt="">
              <div class="lcontnet">
                <TimeInfo class="fl mtop"></TimeInfo>
                <div class="fl ml10 rcontent">
                  <div class="homeTitle">
                    天地图·福建数据更新公告
                  </div>
                  <div class="rcc">第二届数字中国建设峰会志愿者全要素全流程演练将
                    于29日举行，目前准备工作已就绪。</div>
                </div>
              </div>
            </div>
            <div class="fl pl30">
              <div class=" rightTop tl">
                <div class="rightTitle">
                  福州市领导检查第二届数字中国建设峰会筹备工作
                </div>
                <div class="rightContent">
                  尤猛军先后来到海峡国际会展中心、福州数字中国会展中心，实地检查峰会布展、
                  场馆改造、会务保障、氛围营造、景观提升和周边交通组织优化等各项筹备
                </div>
              </div>
            </div>
            <div class="ib fl wid">
              <TimeInfo class="fl ml25"></TimeInfo>
              <icon class="el-icon-right"></icon>
            </div>
            <div class="list fl ib pl30">
              <ul>
                <li>争当“先行军” 大力培育发展新动能 <span class="fr">2019-08-09</span></li>
                <li>争当“先行军” 大力培育发展新动能 <span class="fr">2019-08-09</span></li>
                <li>争当“先行军” 大力培育发展新动能 <span class="fr">2019-08-09</span></li>
                <li>争当“先行军” 大力培育发展新动能 <span class="fr">2019-08-09</span></li>
              </ul>
            </div>
          </el-tab-pane>
          <el-tab-pane label="业界资讯"
                       name="second">
            <div class="fl pr">
              <img src="@static/img/frontdesk/announcement.png"
                   alt="">
              <div class="lcontnet">
                <TimeInfo class="fl"></TimeInfo>
                <div class="fl ml10 rcontent">
                  <div class="homeTitle">
                    天地图·福建数据更新公告
                  </div>
                  <div class="rcc"> 第二届数字中国建设峰会志愿者全要素全流程演练将
                    于29日举行，目前准备工作已就绪。</div>
                </div>
              </div>
            </div>
            <div class="fl pl30">
              <div class=" rightTop tl">
                <div class="rightTitle">
                  福州市领导检查第二届数字中国建设峰会筹备工作
                </div>
                <div class="rightContent">
                  尤猛军先后来到海峡国际会展中心、福州数字中国会展中心，实地检查峰会布展、
                  场馆改造、会务保障、氛围营造、景观提升和周边交通组织优化等各项筹备
                </div>
              </div>
            </div>
            <div class="ib fl wid">
              <TimeInfo class="fl ml25"></TimeInfo>
              <icon class="el-icon-right"></icon>
            </div>
            <div class="list fl ib pl30">
              <ul>
                <li>争当“先行军” 大力培育发展新动能 <span class="fr">2019-08-09</span></li>
                <li>争当“先行军” 大力培育发展新动能 <span class="fr">2019-08-09</span></li>
                <li>争当“先行军” 大力培育发展新动能 <span class="fr">2019-08-09</span></li>
                <li>争当“先行军” 大力培育发展新动能 <span class="fr">2019-08-09</span></li>
              </ul>
            </div>
          </el-tab-pane>
        </el-tabs>
        <div class="more"
             @click="moreNews">更多>></div>
      </div>
    </div>
    <div class="box mt60 tc">
      <div class="w65 ib">
        <el-tabs v-model="activeName"
                 type="card">
          <el-tab-pane label="平台动态"
                       name="first">
            <div class="platformList">
              <div class="fl br"
                   style="color: #666666">
                <TimeInfo></TimeInfo>
              </div>
              <div class="tl ml20 fl ib">
                <div class="homeTitle2">
                  天地图·福建数据更新公告
                </div>
                <div class="homeContent2">第二届数字中国建设峰会志愿者全要素全流程演练将于29日举行，目前准备工作已就绪。第二届数字中国建设峰会志愿者全要素全流程演练将
                  于29日举行，目前准备工作已就绪。</div>
              </div>
            </div>
            <div class="platformList">
              <div class="fl br"
                   style="color: #666666">
                <TimeInfo></TimeInfo>
              </div>
              <div class="tl ml20 fl ib">
                <div class="homeTitle2">
                  天地图·福建数据更新公告
                </div>
                <div class="homeContent2">第二届数字中国建设峰会志愿者全要素全流程演练将于29日举行，目前准备工作已就绪。第二届数字中国建设峰会志愿者全要素全流程演练将
                  于29日举行，目前准备工作已就绪。</div>
              </div>
            </div>
            <div class="platformList">
              <div class="fl br"
                   style="color: #666666">
                <TimeInfo></TimeInfo>
              </div>
              <div class="tl ml20 fl ib">
                <div class="homeTitle2">
                  天地图·福建数据更新公告
                </div>
                <div class="homeContent2">第二届数字中国建设峰会志愿者全要素全流程演练将于29日举行，目前准备工作已就绪。第二届数字中国建设峰会志愿者全要素全流程演练将
                  于29日举行，目前准备工作已就绪。</div>
              </div>
            </div>
            <div class="platformList">
              <div class="fl br"
                   style="color: #666666">
                <TimeInfo></TimeInfo>
              </div>
              <div class="tl ml20 fl ib">
                <div class="homeTitle2">
                  天地图·福建数据更新公告
                </div>
                <div class="homeContent2">第二届数字中国建设峰会志愿者全要素全流程演练将于29日举行，目前准备工作已就绪。第二届数字中国建设峰会志愿者全要素全流程演练将
                  于29日举行，目前准备工作已就绪。</div>
              </div>
            </div>
            <div class="platformList">
              <div class="fl br"
                   style="color: #666666">
                <TimeInfo></TimeInfo>
              </div>
              <div class="tl ml20 fl ib">
                <div class="homeTitle2">
                  天地图·福建数据更新公告
                </div>
                <div class="homeContent2">第二届数字中国建设峰会志愿者全要素全流程演练将于29日举行，目前准备工作已就绪。第二届数字中国建设峰会志愿者全要素全流程演练将
                  于29日举行，目前准备工作已就绪。</div>
              </div>
            </div>
            <div class="platformList">
              <div class="fl br"
                   style="color: #666666">
                <TimeInfo></TimeInfo>
              </div>
              <div class="tl ml20 fl ib">
                <div class="homeTitle2">
                  天地图·福建数据更新公告
                </div>
                <div class="homeContent2">第二届数字中国建设峰会志愿者全要素全流程演练将于29日举行，目前准备工作已就绪。第二届数字中国建设峰会志愿者全要素全流程演练将
                  于29日举行，目前准备工作已就绪。</div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="更新日志"
                       name="second">

          </el-tab-pane>
        </el-tabs>
        <div class="more">更多>></div>
      </div>
    </div>
    <div class="box mt60 tc"
         style="height:400px">
      <div class="w33 ib">
        <el-tabs v-model="activeName"
                 type="card">
          <el-tab-pane label="热点服务"
                       name="first">
            <div class="platformList">
              <div class="fl br"
                   style="color: #666666">
                <img src="@static/img/frontdesk/provice.png"
                     alt="">
              </div>
              <div class="tl ml20 fl ib content3">
                <div class="homeTitle3">
                  天地图·福建数据更新公告
                </div>
                <div class="homeContent3">第二届数字中国建设峰会志愿者全要素全流程演练将于29日举行，目前准备工作已就绪。</div>
              </div>
            </div>
            <div class="platformList">
              <div class="fl br"
                   style="color: #666666">
                <img src="@static/img/frontdesk/provice.png"
                     alt="">
              </div>
              <div class="tl ml20 fl ib content3">
                <div class="homeTitle3">
                  天地图·福建数据更新公告
                </div>
                <div class="homeContent3">第二届数字中国建设峰会志愿者全要素全流程演练将于29日举行，目前准备工作已就绪。</div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
        <div class="more">更多>></div>
      </div>
      <div class="w33 ib ml40">
        <el-tabs v-model="activeName"
                 type="card">
          <el-tab-pane label="示例范用"
                       name="first">
            <div class="platformList">
              <div class="fl "
                   style="color: #666666">
                <img src="@static/img/frontdesk/provice.png"
                     alt="">
              </div>
              <div class="tl ml20 fl ib content3">
                <div class="homeTitle3">
                  天地图·福建数据更新公告
                </div>
                <div class="homeContent3">第二届数字中国建设峰会志愿者全要素全流程演练将于29日举行，目前准备工作已就绪。</div>
              </div>
            </div>
            <div class="platformList">
              <div class="fl "
                   style="color: #666666">
                <img src="@static/img/frontdesk/provice.png"
                     alt="">
              </div>
              <div class="tl ml20 fl ib content3">
                <div class="homeTitle3">
                  天地图·福建数据更新公告
                </div>
                <div class="homeContent3">第二届数字中国建设峰会志愿者全要素全流程演练将于29日举行，目前准备工作已就绪。</div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
        <div class="more">更多>></div>
      </div>
    </div>
    <Footer></Footer>
    <div>
    </div>
    <img src="@static/img/frontdesk/suggest.png"
         alt="点击提交建议"
         width="30px"
         height="30px"
         class="suggest"
         @click="showSuggest">
  </div>
</template>
<script>
import Nav from '@fc/nav'
import MyMenu from '@fc/myMenu'
import TimeInfo from '@fc/timeInfo'
import Footer from '@fc/footer'
export default {
  name: 'home',
  components: {
    Nav, MyMenu, TimeInfo, Footer
  },
  mounted: async function () {
    this.$router.push({ path: '/index/home' })
  },
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    //  通知公告和业界资讯点击更多
    moreNews () {
      this.$router.push({
        name: `moreNews`
      })
    },
    showSuggest () {
      this.$router.push({ name: `suggest` })
    }
  }
}
</script>
<style lang="less" scoped>
.suggest {
  position: fixed;
  top: 50%;
  right: 30px;
}
.home {
  width: 1920px;
  .banner {
    width: 100%;
    height: 926px;
    margin-top: -5px;
  }
}
.lcontnet {
  position: absolute;
  background-color: #0186e6;
  color: white;
  bottom: 0px;
  width: 480px;
  height: 140px;
  padding-top: 20px;
}
.homeTitle {
  font-size: 16px;
  font-weight: 400;
  padding-bottom: 25px;
  border-bottom: 1px solid rgba(255, 255, 255, 1);
}
.rcontent {
  width: 330px;
  .tl();
}
.rcc {
  margin-top: 17px;
  font-size: 14px;
  font-weight: 400;
  line-height: 26px;
}
.rightTop {
  margin-left: 38px;
  .ib();
  width: 564px;
}
.rightTitle {
  font-size: 20px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  .ib();
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.rightContent {
  width: 564px;
  height: 42px;
  font-size: 14px;
  font-family: SimSun;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 26px;
}
.el-icon-right {
  vertical-align: bottom;
}
.wid {
  width: 133px;
  text-align: center;
}
.list li {
  .tl();
  padding: 15px 0px;
  width: 680px;
  border-bottom: 1px rgba(0, 0, 0, 0.1) solid;
  // .box-check();
  // border-radius: 5px;
  font-size: 16px;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
}
.platformList {
  .ib();
  .p15();
}
.homeTitle2 {
  font-size: 18px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  width: 463px;
}
.homeContent2 {
  font-size: 14px;
  font-family: SimSun;
  font-weight: 400;
  color: #666666;
  width: 463px;
  .mt15();
}
.content3 {
  width: 403px;
}
.homeTitle3 {
  font-size: 18px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
.homeContent3 {
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  .mt15();
}
</style>
