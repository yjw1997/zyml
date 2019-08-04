<template>
  <div id="announcement">
    <MyNav></MyNav>
    <ImgUrl></ImgUrl>
    <div id="con"
         class="box-check">
      <Breadcrumb class="fl p15">
        <BreadcrumbItem to="/index">首页</BreadcrumbItem>
        <BreadcrumbItem to="/index">示范应用</BreadcrumbItem>
        <BreadcrumbItem>国家海事交通管理信息服务平台</BreadcrumbItem>
      </Breadcrumb>
      <div id="card">
        <Card>
          <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            案例基本信息
          </p>
          <div style="overflow:auto;"
               class="p15">
            <ul class="">
              <li>
                <div class="title tr ib">案例名称:</div>
                <div class="ib">国家海事交通管理信息服务平台:</div>
              </li>
              <li>
                <div class="title tr ib">应用类型:</div>
                <div class="ib">交通运输</div>
              </li>
              <li>
                <div class="title tr ib">业主单位:</div>
                <div class="ib">中华人名共和国海事局</div>
              </li>
              <li>
                <div class="title tr ib">关键字:</div>
                <div class="ib">海事,交通管理,航运安全,应急</div>
              </li>
              <li>
                <div class="title tr ib">访问网址:</div>
                <div class="ib">http://www.baidu.com</div>
              </li>
              <li>
                <div class="title tr ib battal">简要介绍:</div>
                <div class="ib fr battalCon">服务意识：是指企业全体员工在与一切企业利益相关的人或企业的交往中所体现的为其提供热情、周到、主动的服务的欲望和意识。即自觉主动做好服务工作的一种观念和愿望，它发自服务人员的内心。服务意识有强烈与淡漠之分，有主动与被动之分。这是认识程度问题，认识深刻就会有强烈的服务意识；有了强烈展现个人才华、体现人生价值的观念，就会有强烈的服务意识；有了以公司为家、热爱集体、无私奉献的风格和精神，就会有强烈的服务意识。服务意识的内涵是：它是发自服务人员内心的；它是服务人员的一种本能和习惯；它是可以通过培养、教育训练形成的。</div>
              </li>
              <li style="position:resitive">
                <div class="title tr ib"
                     style="vertical-align:top">案例图片:</div>
                <div class="ib defa">
                  <ul>
                    <li>
                      <img src="http://demo.cssmoban.com/cssthemes5/cpts_1664_coz/images/g7.jpg"
                           width="100%"
                           height="100%">
                    </li>
                    <li>
                      <img src="http://demo.cssmoban.com/cssthemes5/cpts_1664_coz/images/g7.jpg"
                           width="100%"
                           height="100%">
                    </li>
                    <li>
                      <img src="http://demo.cssmoban.com/cssthemes5/cpts_1664_coz/images/g7.jpg"
                           width="100%"
                           height="100%">
                    </li>
                    <li>
                      <img src="http://demo.cssmoban.com/cssthemes5/cpts_1664_coz/images/g7.jpg"
                           width="100%"
                           height="100%">
                    </li>
                  </ul>

                </div>
              </li>
            </ul>
            <ul class="ib fl"
                style="margin-left:15px">

            </ul>
          </div>
        </Card>
        <Card>
          <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            联系人基本信息
          </p>
          <div style="overflow:auto;"
               class="p15">
            <ul class="title tr fl ib">
              <li>联系人:</li>
              <li>联系单位</li>
              <li>联系地址:</li>
              <li>联系电话:</li>
              <li>联系邮箱:</li>
            </ul>
            <ul class=" tl fl ib "
                style="padding-left:30px">
              <li>张二狗</li>
              <li>国信司南地理有限公司</li>
              <li>北京市一环</li>
              <li>888888888</li>
              <li>gougou@GG.CN</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
    <Footer></Footer>
  </div>

</template>
<script>
import MyNav from '../components/mynav'
import ImgUrl from '../components/imgurl'
import Footer from '../components/footer'
export default {
  components: {
    MyNav, ImgUrl, Footer
  }
}
</script>
<style lang="less" scoped>
#announcement {
  width: 100%;
  .tc();
  #con {
    width: 75%;
    .p15();
    .ib();
    #card {
      .title {
        width: 10%;
        font-size: 13px;
      }
      li {
        margin: 20px 0px;
      }
      width: 100%;
      .battal {
        padding-bottom: 110px;
      }
      .battalCon {
        width: 89%;
      }
      .defa {
        width: 88%;

        li {
          width: 10%;
          height: 30%;
          .ib();
          padding: 1% 1%;
          margin: 0.5% 0.5%;
          .box-check();
          position: relative;
        }
      }
    }
  }
}
ul {
  .tl();
}
li {
  line-height: 30px;
}
</style>

