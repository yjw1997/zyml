<template>
  <div class="home">
    <div id="search">
      <div id="content">
        <el-select v-model="searchValue"
                   filterable
                   remote
                   reserve-keyword
                   placeholder="请输入关键词"
                   :remote-method="remoteMethod"
                   :loading="loading"
                   style="width:500px">
          <el-option v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
        <el-button @click="searchVal()">服务搜索</el-button>
        <div class="seartime">
          热点:
          <el-tag v-for="tag in tags"
                  :key="tag.name"
                  closable
                  :type="tag.type"
                  @click="addtags(tag)"
                  @close="handleClose(tag)">
            {{tag.name}}
          </el-tag>

        </div>
      </div>
    </div>
    <!-- <el-carousel height="500px"
                 :interval="5000"
                 arrow="never">
      <el-carousel-item>
        <div class="lb lbimg1 center">
          <div class="container tc"
               style="margin-top:70px">
            <img src="@static/img/index/logo_big.png"
                 height="200"
                 width="200">
            <transition name="el-zoom-in-top">
              <h1 style="font-size: 36px;font-weight:500 ;margin-top: 20px;margin-bottom: 10px;"
                  v-show="true">时空云平台</h1>
            </transition>
            <transition name="el-zoom-in-bottom">
              <div style="width:891px"
                   class="ib"
                   v-show="true">
                时空云平台着力于打造一个集地图、时空数据、服务、文档、工具等资源于一体的综合资源平台和共享交换平台。将平台所拥有的地理资源、服务及应用按不同类型、不同权限展示出来，用户可以在浏览器、移动终端访问该资源中心，获取、制作自己的专题资源并实现共享交换
              </div>
            </transition>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="lb lbimg2 center">
          <div class="container">
            <div style="width:585px;height:100%;margin-top: 100px;
    margin-bottom: 10px;"
                 class="ib fl">
              <h1 style="font-size: 36px;font-weight:500 ;margin-top: 20px;margin-bottom: 5px; padding-bottom: 12px;border-bottom:1px solid white;text-align:left">电子地图</h1>
              <p class="desciption">
                电子地图以国家天地图数据为底图，动态可以切换贵州省的市区县行政区边界，为贵州省提供了POI查询和公交导航，为贵州的旅游提供数据基础。
              </p>
              <div class="mtb24 tl">
                <router-link to="/index/map">
                  <el-button> 了解更多</el-button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="lb lbimg3 center">
          <div class="container tr">
            <div style="width:585px;height:100%;margin-top: 100px;
    margin-bottom: 10px;"
                 class="ib fr">
              <h1 style="font-size: 36px;font-weight:500 ;margin-top: 20px;margin-bottom: 5px; padding-bottom: 12px;border-bottom:1px solid white;text-align:right">平台应用</h1>
              <p class="desciption">
                平台应用展示了电子地图集等电子地图应用。将平台所拥有的地理资源、服务以及应用按不同类型、不同权限展示出来，用户可以在浏览器、移动终端访问该资源中心，获取、制作自己的专题资源并实现共享交换
              </p>
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel> -->
    <!-- <div class="navigation">
      <ul class="tl">
        <li @mouseenter="active = 1"
            @mouseleave="active=0">
          <div class="fl l"></div>
          <div class="media-left fl"></div>
          <img class="fl"
               v-show="active!==1"
               src="@static/img/index/cloud.png"
               alt="">
          <img class="fl"
               v-show="active==1"
               src="@static/img/index/cloud-active.png"
               alt="">
          <router-link to="/index/map">
            <div class=" fl ib tc">
              <h4 style="vertical-align: middle; ">电子地图服务</h4>
              <p style="vertical-align: top; ">满足一体化云平台用户</p>
            </div>
          </router-link>

        </li>
        <li @mouseenter="active = 2"
            @mouseleave="active=0">
          <div class="fl l"></div>
          <div class="media-left fl"></div>
          <img class="fl"
               v-show="active!==2"
               src="@static/img/index/data.png"
               alt="">
          <img class="fl"
               v-show="active==2"
               src="@static/img/index/data-active.png"
               alt="">
          <router-link to="/index/map">
            <div class=" fl ib tc">
              <h4 style="vertical-align: middle; ">基础数据服务</h4>
              <p style="vertical-align: top; ">满足一体化云平台用户</p>
            </div>
          </router-link>
        </li>
        <li @mouseenter="active = 3"
            @mouseleave="active=0">
          <div class="fl l"></div>
          <div class="media-left fl"></div>
          <img class="fl"
               v-show="active!==3"
               src="@static/img/index/function.png"
               alt="">
          <img class="fl"
               v-show="active==3"
               src="@static/img/index/function-active.png"
               alt="">
          <router-link to="/index/map">
            <div class=" fl ib tc">
              <h4 style="vertical-align: middle; ">基础功能服务</h4>
              <p style="vertical-align: top; ">满足一体化云平台用户</p>
            </div>
          </router-link>
        </li>
        <li @mouseenter="active = 4"
            @mouseleave="active=0">
          <div class="fl l"></div>
          <div class="media-left fl"></div>
          <img class="fl"
               v-show="active!==4"
               src="@static/img/index/application.png"
               alt="">
          <img class="fl"
               v-show="active==4"
               src="@static/img/index/application-active.png"
               alt="">
          <router-link to="/index/map">
            <div class=" fl ib tc">
              <h4 style="vertical-align: middle; ">平台服务</h4>
              <p style="vertical-align: top; ">满足一体化云平台用户</p>
            </div>
          </router-link>
          <div class="fr l"></div>
        </li>
      </ul>

    </div>
    <div class="clear-area">
      <div class="container">
        <div class="leader">
          <h3>基础数据服务</h3>
        </div>
        <p class="text-description">
          一体化公共服务平台遵循开放地理空间联盟（OGC）服务标准，提供了包括WMS（Web地图服务）、WFS（Web要素服务）、WFS-G（地名地址服务）等，以及KML、街景数据服务、全景数据服务和与平台对接系统的相关专题服务
        </p>
        <el-tabs v-model="activeName"
                 :stretch="true">
          <el-tab-pane name="1"><span slot="label"><i class="iconfont iconditu"></i>智能地图</span>
            智能地图
          </el-tab-pane>
          <el-tab-pane name="2"><span slot="label"><i class="iconfont iconshiliangshuju"></i>矢量数据服务</span></el-tab-pane>
          <el-tab-pane name="3"><span slot="label"><i class="iconfont iconweixing"></i>影像数据服务</span></el-tab-pane>
          <el-tab-pane name="4"><span slot="label"><i class="iconfont icon3d-copy"></i>三维数据服务</span></el-tab-pane>
          <el-tab-pane name="5"><span slot="label"><i class="iconfont icontubiaozhizuomoban"></i>时态数据服务</span></el-tab-pane>
          <el-tab-pane name="6"><span slot="label"><i class="iconfont iconfangzi"></i>OGC</span></el-tab-pane>
          <el-tab-pane name="7"><span slot="label"><i class="iconfont iconqita"></i>其他</span></el-tab-pane>
        </el-tabs>
        <div class="mtb24">
          <router-link to="/index/map">
            <el-button> 查看更多</el-button>
          </router-link>
        </div>

      </div>
    </div>
    <div class="clear-area"
         style="background-color: #F1F1F1;">
      <div class="container">
        <div class="leader">
          <h3 style="background-color: rgb(241, 241, 241);">基础功能服务</h3>
        </div>
        <p class="text-description">
          一体化公共服务平台提供用于辅助应用程序执行的各种几何计算能力和基于网络的地理处理分析功能服务，为用户提供了一个在线地理处理的工具箱
        </p>
        <div class="tc w buffer">
          <div>
            <img src="@static/img/index/function_buffer.png"
                 alt="">
            <h4>缓冲区分析</h4>
            <p>空间要素、要素集缓冲分析服务，用来解决邻近度问题的空间分析工具</p>
          </div>
          <div>
            <img src="@static/img/index/function_aggregation.png"
                 alt="">
            <h4>数据空间聚合分析</h4>
            <p>密集型空间数据聚合分析服务，用来解决空间点集聚类趋势分析</p>
          </div>
          <div>
            <img src="@static/img/index/function_density.png"
                 alt="">
            <h4>数据密度分析</h4>
            <p>通过离散点数据或者线数据进行内插，用来分析整个区域的数据聚集状况</p>
          </div>
          <div>
            <img src="@static/img/index/function_overlay.png"
                 alt="">
            <h4>叠加分析</h4>
            <p>通过对两个数据进行的一系列集合运算，分析在空间位置上有一定关联的空间对象的空间特征和专属属性之间的相互关系</p>
          </div>
        </div>
        <div class="mtb24">
          <router-link to="/index/map">
            <el-button> 查看更多</el-button>
          </router-link>
        </div>

      </div>
    </div>
    <div class="clear-area"
         style="background-color: #1F354A;">
      <div class="container">
        <div class="leader">
          <h3 style="background-color: #1F354A;">平台应用</h3>
        </div>
        <p class="text-description">
          GeoPlat一体化应用中心由在线应用模板、行业应用支撑、智能地图应用、Office集成应用以及Web Mapping API等几部分组成
        </p>

        <el-tabs v-model="activeName"
                 :stretch="true"
                 tab-position="bottom">
          <el-tab-pane name="1">
            <span slot="label"
                  style="color:white !important"><i class="iconfont iconyunpingtai"></i>贵州省地图云平台</span>
            <div>
              <img src="@static/img/index/digitalmap.png"
                   width="300"
                   height="300"
                   class="fl">
              <div class="white fl  media-body tl">
                <h1>贵州省地图云平台</h1>
                <p class="white">
                  提供了贵州省电子地图集，以丰富的电子图，图片资料，视频资料为用户展示多元化的贵州旅游动态,主要有以下特点
                </p>
                <ul>
                  <li>旅游热点空间位置信息</li>
                  <li>旅游热点的地图集</li>
                  <li>旅游景点的视频、照片、全景信息</li>
                </ul>
                <div data-v-4419e6da=""
                     class="mtb24 tl"><a data-v-4419e6da=""
                     href="#/index/map"
                     class=""><button data-v-4419e6da=""
                            type="button"
                            class="el-button el-button--default">
                      <span> 了解更多</span></button></a></div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane name="2">
            <span slot="label"
                  style="color:white !important"><i class="iconfont iconjiance"></i>贵州省空气质量实时监测系统</span>
            <div>
              <img src="@static/img/index/airmonitor.png"
                   width="300"
                   height="300"
                   class="fl">
              <div class="white fl  media-body tl">
                <h1>贵州省空气质量实时监测系统</h1>
                <p class="white">
                  提供了贵州省各地区实时的空气质量AQI、实时浓度、趋势变化，主要有以下特点
                </p>
                <ul>
                  <li>地图信息与监测信息二级联动</li>
                  <li>数据实时监测</li>
                  <li>通过大数据实现空气质量的预测</li>
                </ul>
                <div data-v-4419e6da=""
                     class="mtb24 tl"><a data-v-4419e6da=""
                     href="#/index/map"
                     class=""><button data-v-4419e6da=""
                            type="button"
                            class="el-button el-button--default">
                      <span> 了解更多</span></button></a></div>
              </div>
            </div>

          </el-tab-pane>
          <el-tab-pane name="3">
            <span slot="label"
                  style="color:white !important"><i class="iconfont iconlvyouchanpin"></i>贵州省旅游资源普查展示系统</span>

            <div>
              <img src="@static/img/index/travelsys.png"
                   width="300"
                   height="300"
                   class="fl">
              <div class="white fl  media-body tl">
                <h1>贵州省旅游资源普查展示系统</h1>
                <p class="white">
                  提供了贵州省一级、二级、三级、四级的旅游资源，可以动态切换矢量地图、卫星、地形等地图数据，主要有以下特点
                </p>
                <ul>
                  <li>旅游资源按照等级分布</li>
                  <li>旅游热点与地形图叠加</li>
                  <li>多套不同风格的主题样式</li>
                </ul>
                <div data-v-4419e6da=""
                     class="mtb24 tl"><a data-v-4419e6da=""
                     href="#/index/map"
                     class=""><button data-v-4419e6da=""
                            type="button"
                            class="el-button el-button--default">
                      <span> 了解更多</span></button></a></div>
              </div>
            </div>

          </el-tab-pane>
          <el-tab-pane name="4">
            <span slot="label"
                  style="color:white !important"><i class="iconfont iconziyuan"></i>贵州省地质灾害预警系统</span>

            <div>
              <img src="@static/img/index/digitalmap.png"
                   width="300"
                   height="300"
                   class="fl">
              <div class="white fl  media-body tl">
                <h1>贵州省地质灾害预警系统</h1>
                <p class="white">
                  动态监听贵州省各地区地址灾害预警信息，主要有以下特点
                </p>
                <ul>
                  <li>对贵州省地质变化实现动态监测</li>
                  <li>实时提供预警信息</li>
                </ul>
                <div data-v-4419e6da=""
                     class="mtb24 tl"><a data-v-4419e6da=""
                     href="#/index/map"
                     class=""><button data-v-4419e6da=""
                            type="button"
                            class="el-button el-button--default">
                      <span> 了解更多</span></button></a></div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div> -->
    <div class="clear-area">
      <IndexTabs></IndexTabs>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from '../footer'
import IndexTabs from './component/indexTabs'
export default {
  name: 'home',
  components: {
    Footer, IndexTabs
  },
  mounted () {
    console.log(this.check)
    this.list = this.states.map(item => {
      return { value: item, label: item }
    })
  },
  data () {
    return {
      check: '',
      active: 0,
      activeName: '1',
      tags: [
        { name: '矢量', type: '' },
        { name: '影像', type: 'success' },
        { name: '地形', type: 'info' },
        { name: '栅格', type: 'warning' }
      ],
      options: [],
      searchValue: '',
      list: [],
      loading: false,
      states: ['Alabama', 'Alaska', 'Arizona',
        'Arkansas', 'California', 'Colorado',
        'Connecticut', 'Delaware', 'Florida',
        'Georgia', 'Hawaii', 'Idaho', 'Illinois',
        'Indiana', 'Iowa', 'Kansas', 'Kentucky',
        'Louisiana', 'Maine', 'Maryland',
        'Massachusetts', 'Michigan', 'Minnesota',
        'Mississippi', 'Missouri', 'Montana',
        'Nebraska', 'Nevada', 'New Hampshire',
        'New Jersey', 'New Mexico', 'New York',
        'North Carolina', 'North Dakota', 'Ohio',
        'Oklahoma', 'Oregon', 'Pennsylvania',
        'Rhode Island', 'South Carolina',
        'South Dakota', 'Tennessee', 'Texas',
        'Utah', 'Vermont', 'Virginia',
        'Washington', 'West Virginia', 'Wisconsin',
        'Wyoming']
    }
  },

  methods: {
    remoteMethod (query) {
      if (query !== '') {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.options = this.list.filter(item => {
            return item.label.toLowerCase()
              .indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      } else {
        this.options = []
      }
    },
    handleClose (tag) {
      this.tags.splice(this.tags.indexOf(tag), 1)
    },
    addtags (tag) {
      // console.log(tag)
      this.searchValue = tag.name
    },
    //  服务搜索
    searchVal () {
      if (this.searchValue === '') return false
    }
  }
}
</script>
<style lang="less" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.lbimg1 {
  background: url("../../../../static/img/index/dismap.png") center center
    no-repeat;
  background-size: cover;
}
.lbimg2 {
  background: url("../../../../static/img/index/ditamap2.jpg") center center
    no-repeat;
  background-size: cover;
}
.lbimg3 {
  background: url("../../../../static/img/index/plataplication3.png") center
    center no-repeat;
  background-size: cover;
}
.desciption {
  font-size: 16px;
  padding-top: 15px;
  margin: 0 0 10px;
  .tl();
}
.navigation {
  width: 100%;
  height: 150px;
  .tc();
  ul {
    .ib();
    width: 80%;
    height: 90px;
    margin: 30px 0;
    padding: 0;
    li {
      float: left;
      list-style: none;
      width: 25%;
      height: 100%;
    }
  }
}
.pd {
  padding: 25px 0px 0px 75px;
}
.buffer {
  vertical-align: middle;
  height: 300px;
  div {
    width: 22%;
    padding: 5px;
    .fl();
    .ib();
    &:hover {
      background-color: #fff;
      box-shadow: 0 22px 43px rgba(0, 0, 0, 0.15);
      -webkit-transform: translateY(-4px);
    }
  }
}
.is-top {
  color: white !important;
}
#search {
  .tc();
}
#content {
  width: 45%;
  .ib();
}
.input {
  margin-bottom: 15px;
}
.seartime {
  .tl();
  font-size: 15px;
  font-weight: 700;
  margin-top: 15px;
  span {
    margin: 0 10px;
  }
}
</style>
