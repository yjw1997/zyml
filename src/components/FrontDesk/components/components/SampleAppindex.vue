<template>
  <div id="SampleAppindex">
    <div id="con">
      <div id="left">
        <!-- <div class="padding"><router-link to="/recourse/serverRecourse">服务资源</router-link></div> -->
        <Card>
          <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            应用类型
          </p>
          <Tree :data="data" show-checkbox></Tree>
        </Card>
      </div>
      <div id="right">
        <div>
          <Breadcrumb>
            <BreadcrumbItem to="/">
              <Icon type="ios-home-outline"></Icon> 首页
            </BreadcrumbItem>
            <BreadcrumbItem to="/components/breadcrumb">
              <Icon type="logo-buffer"></Icon> 资源中心
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Icon type="ios-cafe"></Icon> 服务资源
            </BreadcrumbItem>
          </Breadcrumb>
          <div class="mb15">
            <Input
              search
              enter-button="搜索"
              placeholder="Enter something..."
            />
          </div>
          <div class="shadow tr p15">
            <div class="fl ib title">共找到（1120个）</div>
            <div class=" ib">
              <CheckboxGroup v-model="social">
                <Checkbox label="twitter">
                  <Icon type="logo-twitter"></Icon>
                  <span>浏览量</span>
                </Checkbox>
                <Checkbox label="facebook">
                  <Icon type="logo-facebook"></Icon>
                  <span>发布时间</span>
                </Checkbox>
                <Checkbox label="github">
                  <Icon type="logo-github"></Icon>
                  <span>A-Z</span>
                </Checkbox>
                <Checkbox label="snapchat">
                  <Icon type="logo-snapchat"></Icon>
                  <span>申请量</span>
                </Checkbox>
              </CheckboxGroup>
            </div>
          </div>
        </div>
        <div class="rightCon">
           <Scroll :on-reach-bottom="handleReachBottom" height='850'>
          <ul>
            <li>
              <div><span class="title fl">国税局税源地理信息系统</span>
                <Button type="info" size="small" class="fr" @click = "showDetail">案例详情</Button>
              </div>
              <img
                src="http://demo.cssmoban.com/cssthemes5/cpts_1664_coz/images/g7.jpg"
                width="100%"
                height="100%"
              />
              <span>政务内网区</span>
              <div id="btt">
                <!--   -->
                <span>应用类型：政府-税务 </span>
                <span>业主单位：福州市国家税务局 </span>
                <span>上线日期： 2014/8/7 0:00:00</span>
              </div>
            </li>
            <li>
              <div><span class="title fl">国税局税源地理信息系统</span>
                <Button type="info" size="small" class="fr" @click = "showDetail">案例详情</Button>
              </div>
              <img
                src="http://demo.cssmoban.com/cssthemes5/cpts_1664_coz/images/g7.jpg"
                width="100%"
                height="100%"
              />
              <span>政务内网区</span>
              <div id="btt">
                <!--   -->
                <span>应用类型：政府-税务 </span>
                <span>业主单位：福州市国家税务局 </span>
                <span>上线日期： 2014/8/7 0:00:00</span>
              </div>
            </li>
          </ul>
           <ul>
            <li>
              <div><span class="title fl">国税局税源地理信息系统</span>
                <Button type="info" size="small" class="fr" @click = "showDetail">案例详情</Button>
              </div>
              <img
                src="http://demo.cssmoban.com/cssthemes5/cpts_1664_coz/images/g7.jpg"
                width="100%"
                height="100%"
              />
              <span>政务内网区</span>
              <div id="btt">
                <!--   -->
                <span>应用类型：政府-税务 </span>
                <span>业主单位：福州市国家税务局 </span>
                <span>上线日期： 2014/8/7 0:00:00</span>
              </div>
            </li>
            <li>
              <div><span class="title fl">国税局税源地理信息系统</span>
                <Button type="info" size="small" class="fr" @click = "showDetail">案例详情</Button>
              </div>
              <img
                src="http://demo.cssmoban.com/cssthemes5/cpts_1664_coz/images/g7.jpg"
                width="100%"
                height="100%"
              />
              <span>政务内网区</span>
              <div id="btt">
                <!--   -->
                <span>应用类型：政府-税务 </span>
                <span>业主单位：福州市国家税务局 </span>
                <span>上线日期： 2014/8/7 0:00:00</span>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <div><span class="title fl">国税局税源地理信息系统</span>
                <Button type="info" size="small" class="fr" @click = "showDetail">案例详情</Button>
              </div>
              <img
                src="http://demo.cssmoban.com/cssthemes5/cpts_1664_coz/images/g7.jpg"
                width="100%"
                height="100%"
              />
              <span>政务内网区</span>
              <div id="btt">
                <!--   -->
                <span>应用类型：政府-税务 </span>
                <span>业主单位：福州市国家税务局 </span>
                <span>上线日期： 2014/8/7 0:00:00</span>
              </div>
            </li>
            <li>
              <div><span class="title fl">国税局税源地理信息系统</span>
                <Button type="info" size="small" class="fr" @click = "showDetail">案例详情</Button>
              </div>
              <img
                src="http://demo.cssmoban.com/cssthemes5/cpts_1664_coz/images/g7.jpg"
                width="100%"
                height="100%"
              />
              <span>政务内网区</span>
              <div id="btt">
                <!--   -->
                <span>应用类型：政府-税务 </span>
                <span>业主单位：福州市国家税务局 </span>
                <span>上线日期： 2014/8/7 0:00:00</span>
              </div>
            </li>
          </ul>
          </Scroll>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: [
        {
          title: '全部'
        },
        {
          title: '教育'
        },
        {
          title: '公共安全'
        },
        {
          title: '民政'
        },
        {
          title: '卫生'
        },
        {
          title: '文化'
        },
        {
          title: '国土资源'
        },
        {
          title: '海洋'
        },
        {
          title: '更多'
        },
      ]
    }
  },
  methods: {
    showDetail() {
      this.$router.push({path:'/appinfor'})
    }
  }
}
</script>

<style lang="less" scoped>
#SampleAppindex {
  width: 100%;
  .tc();
  .mb15();
  #con {
    .ib();
    width: 75%;
    .tl();
    #left {
      .ib();
      width: 20%;
      .padding {
        padding: 15px 10px;
        border: 1px solid black;
        border-radius: 3px;
        .tc();
        background-color: burlywood;
        font-size: 16px;
        font-weight: 700;
      }
    }
    #right {
      width: 79%;
      padding-left: 1%;
      .ib();
      .fr();
      .rightCon {
        .box-check();
        height: 850px;
        .tc();
        li {
          width: 48%;
          height: 30%;
          .ib();
          .tl();
          padding: 1% 1%;
          margin: 0.5% 0.5%;
          .box-check();
          position: relative;
          &:hover {
            border: 1px solid #9f1818;
            cursor: pointer;
          }
          span {
            font-size: 18px;
            font-weight: 800;
            color: dodgerblue;
          }
          #btt {
            .tl();
            span {
              font-size: 12px !important;
              color: #999999 !important;
              font-weight: normal !important;
              .ib();
              .tl();
              width: 75%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
      }
    }
  }
}
</style>
