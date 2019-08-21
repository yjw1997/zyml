<template>
  <div id="serviceDetails"
       class="index">
    <MyNav></MyNav>
    <MyMenu activeIndex="2"></MyMenu>
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>当前位置：</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/index/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/index/service' }">资源中心</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/index/service' }">服务资源</el-breadcrumb-item>
        <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="box tc">
      <div class="w60 ib">
        <div class="sdLeft">
          <div class="box-check pzy "
               style="height:794px">
            <el-collapse v-model="activeName"
                         accordion>
              <el-collapse-item title="基础信息"
                                name="1">
                <div class="serviceInfoBox">
                  <el-form :model="formInline"
                           class="demo-form-inline"
                           label-width="60"
                           label-position="left">
                    <el-form-item label="服务别名：">
                      <span>{{formInline.alias}}</span>
                    </el-form-item>
                    <el-form-item label="服务名：">
                      <span>{{formInline.serName}}</span>
                    </el-form-item>
                    <el-form-item label="服务id：">
                      <span>{{formInline.id}}</span>
                    </el-form-item>
                    <el-form-item label="摘要：">
                      <span>{{formInline.keyword}}</span>
                    </el-form-item>
                    <el-form-item label="关键词：">
                      <span>{{formInline.summary}}</span>
                    </el-form-item>
                    <el-form-item label="发布单位：">
                      <span>{{formInline.pubUnit}}</span>
                    </el-form-item>
                    <el-form-item label="发布日期：">
                      <span>{{formInline.pubDate}}</span>
                    </el-form-item>
                    <el-form-item label="服务地址：">
                      <span>{{formInline.serUrl}}</span>
                    </el-form-item>
                    <el-form-item label="服务类型：">
                      <span>{{formInline.serType}}</span>
                    </el-form-item>
                    <el-form-item label="服务类型版本：">
                      <span>{{formInline.version}}</span>
                    </el-form-item>
                  </el-form>

                </div>
              </el-collapse-item>
              <el-collapse-item title="服务发布单位详情信息"
                                name="2">
                <div class="serviceInfoBox">
                  <el-form :model="formInline"
                           class="demo-form-inline"
                           label-width="60"
                           label-position="left">
                    <el-form-item label="单位名称：">
                      <span>{{formInline.pubUnit}}</span>
                    </el-form-item>
                    <el-form-item label="单位网址：">
                      <span>{{formInline.unitUrl}}</span>

                    </el-form-item>
                    <el-form-item label="国家：">
                      <span>{{formInline.country}}</span>

                    </el-form-item>
                    <el-form-item label="省（直辖市）：">
                      <span>{{formInline.province}}</span>

                    </el-form-item>
                    <el-form-item label="城市：">
                      <span>{{formInline.city}}</span>

                    </el-form-item>
                    <el-form-item label="详细地址：">
                      <span>{{formInline.address}}</span>

                    </el-form-item>
                    <el-form-item label="邮编：">
                      <span>{{formInline.postalCode}}</span>

                    </el-form-item>
                    <el-form-item label="电话：">
                      <span>{{formInline.phone}}</span>

                    </el-form-item>
                    <el-form-item label="传真：">
                      <span>{{formInline.fax}}</span>

                    </el-form-item>
                    <el-form-item label="电子邮箱：">
                      <span>{{formInline.email}}</span>

                    </el-form-item>
                    <el-form-item label="联系人：">
                      <span>{{formInline.principal}}</span>

                    </el-form-item>
                    <el-form-item label="联系人职位：">
                      <span>{{formInline.bqdwzz}}</span>
                    </el-form-item>
                  </el-form>
                </div>
              </el-collapse-item>
              <el-collapse-item title="服务使用限制"
                                name="3">
                <el-form :model="formInline"
                         class="demo-form-inline"
                         label-width="60"
                         label-position="left">
                  <el-form-item label="访问限制：">
                    <span>{{formInline.use}}</span>

                  </el-form-item>
                  <el-form-item label="使用限制：">
                    <span>{{formInline.visit}}</span>
                  </el-form-item>
                </el-form>
              </el-collapse-item>
              <el-collapse-item title="数据描述信息"
                                name="4">
                <el-form :model="formInline"
                         class="demo-form-inline"
                         label-width="60"
                         label-position="left">
                  <el-form-item label="空间参考系：">
                    <span>{{formInline.spatialReferSystem}}</span>

                  </el-form-item>
                  <el-form-item label="空间表达类型：">
                    <span>{{formInline.type}}</span>
                  </el-form-item>
                  <el-form-item label="空间分辨率：">
                    <span>{{formInline.resolution}}</span>

                  </el-form-item>
                  <el-form-item label="其他说明：">
                    <span>{{formInline.description}}</span>
                  </el-form-item>
                </el-form>
              </el-collapse-item>
              <el-collapse-item title="支持操作"
                                name="5">
                <span>无</span>
              </el-collapse-item>
              <el-collapse-item title="瓦片信息"
                                name="6">
                <el-form :model="formInline"
                         class="demo-form-inline"
                         label-width="60"
                         label-position="left">

                  <el-form-item label="级别">
                    <span>{{formInline.level}}</span>
                  </el-form-item>
                  <el-form-item label="比例尺">
                    <span>{{formInline.scale}}</span>
                  </el-form-item>
                  <el-form-item label="切图起始点">
                    <span>{{formInline.CutStartPoint}}</span>
                  </el-form-item>
                  <el-form-item label="瓦片宽">
                    <span>{{formInline.TileWidth}}</span>
                  </el-form-item>
                  <el-form-item label="瓦片高">
                    <span>{{formInline.TileHeight}}</span>
                  </el-form-item>
                </el-form>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
        <div class="sdRight">
          <el-tooltip class="item position1"
                      effect="dark"
                      content="放大图片"
                      placement="left-start">
            <el-button>
              <icon class="iconfont  iconjia"></icon>
            </el-button>
          </el-tooltip>
          <el-tooltip class="item position2"
                      effect="dark"
                      content="缩小图片"
                      placement="left-start">
            <el-button>
              <icon class="iconfont  iconjian"></icon>
            </el-button>
          </el-tooltip>
          <el-tooltip class="item position3"
                      effect="dark"
                      content="点击申请"
                      placement="left-start">
            <el-button @click="applicationData">
              <icon class="iconfont  iconshenqing"></icon>
            </el-button>
          </el-tooltip>
          <el-tooltip class="item position4"
                      effect="dark"
                      content="点击收藏"
                      placement="left-start">
            <el-button @click="collection">
              <icon class="iconfont  iconxiangzi"></icon>
            </el-button>
          </el-tooltip>
        </div>
      </div>
    </div>
    <Footer></Footer>
    <el-dialog title="服务申请"
               :visible.sync="showApplication"
               width="30%"
               class="tc">
      <div style="width:63%"
           class="ib tc">
        <el-form :model="AppformInline"
                 class="demo-form-inline"
                 label-position="left"
                 label-width="120px">
          <el-form-item label="对接系统名称：">
            <el-select v-model="AppformInline.appName">
              <el-option label="政务大数据平台"
                         value="政务大数据平台"></el-option>
              <el-option label="时空平台"
                         value="时空平台"></el-option>
              <el-option label="市民服务中心平台"
                         value="市民服务中心平台"></el-option>
              <el-option label="其他"
                         value="label4"></el-option>
            </el-select>
            <el-input v-model="AppformInline.appName2"
                      :disabled="disabled"
                      placeholder="请输入对接系统名称"></el-input>
          </el-form-item>
          <el-form-item label="应用系统描述：">
            <el-input type="textarea"
                      v-model="AppformInline.appDescription"></el-input>
          </el-form-item>
          <el-form-item label="需求描述：">
            <el-input type="textarea"
                      v-model="AppformInline.description"></el-input>
          </el-form-item>
        </el-form>
      </div>

      <span slot="footer"
            class="dialog-footer">
        <el-button type="primary"
                   @click="applicationDataUpdate">提交申请</el-button>
        <el-button type="success"
                   @click="showApplication = false">保存</el-button>
        <el-button @click="showApplication = false">取消</el-button>

      </span>
    </el-dialog>

  </div>
</template>
<script>
import MyNav from '@fc/nav'
import MyMenu from '@fc/myMenu'
import Footer from '@fc/footer'
import { ServicePreview } from '@api/admin/myService'
import { getCollectionId, getApplicationId } from '@api/frontdesk/myService'
import { async } from 'q';
export default {
  name: 'serviceDetails',
  components: {
    MyNav, MyMenu, Footer
  },
  data () {
    return {
      activeName: 1,
      title: '中国影像地图服务',
      formInline: {
        appName: '政务大数据平台',
        system: '',
        orderName: ''
      },
      showApplication: false,
      disabled: true,
      AppformInline: {}
    }
  },
  mounted () {
    if (this.$route.params.id === undefined) {
      this.$router.push({
        name: `service`,
      })
    } else {
      console.log(this.$route.params)
      this.getServiceInfo()
    }
  },
  methods: {
    //  根据id获取服务信息
    getServiceInfo: async function () {
      // this.$route.params.id   //id
      let data = await ServicePreview({ serviceId: this.$route.params.id })
      this.formInline = data.data[0]
    },
    //  点击申请按钮
    applicationData: async function () {
      this.showApplication = true
    },
    //  点击提交申请按钮
    applicationDataUpdate: async function () {
      this.showApplication = false
      console.log(this.AppformInline)
      this.AppformInline.serviceId = this.$route.params.id
      if (this.AppformInline.appName === 'label4') {
        this.AppformInline.appName = this.AppformInline.appName2
      }
      let res = await getApplicationId(this.AppformInline)
      this.$message({
        message: '申请成功',
        type: 'success'
      });
    },
    //  点击收藏
    collection: async function () {
      //  存到收藏表里面
      await getCollectionId({ serviceId: this.$route.params.id })
      this.$message({
        message: '收藏成功',
        type: 'success'
      });
      this.$router.push({ name: `collection`, params: this.$route.params.id })
    }
  },

  watch: {
    'AppformInline.appName': function (newVal, oldVal) {
      console.log(newVal)
      if (newVal === 'label4') {
        this.disabled = false
      } else {
        this.disabled = true
      }
    }
  },
}
</script>
<style lang="less" scoped>
#serviceDetails {
  .breadcrumb {
    margin-left: 386px;
    display: inline-block;
    .p10();
  }
  .box {
    height: 800px !important;
    .sdLeft {
      width: 28%;
      .ib();
      height: 100%;
      .fl();
    }
    .sdRight {
      width: 71%;
      .ib();
      height: 100%;
      background-image: url("../../../../static/img/frontdesk/serviceBig.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      position: relative;
      .position1 {
        position: absolute;
        right: 0px;
        bottom: 220px;
      }
      .position2 {
        position: absolute;
        right: 0px;
        bottom: 160px;
      }
      .position3 {
        position: absolute;
        right: 0px;
        bottom: 100px;
      }
      .position4 {
        position: absolute;
        right: 0px;
        bottom: 40px;
      }
    }
  }
}
.serviceInfoBox {
  height: 200px;
  overflow: auto;
}
.sdLeft /deep/ .el-form-item__label {
  font-size: 12px;
}
.sdLeft /deep/ .el-form-item__content {
  font-size: 12px;
  text-align: left;
}
.sdLeft /deep/ .el-input__inner {
  height: 25px !important;
}
.sdLeft /deep/ .el-form-item {
  margin-bottom: 0px;
}
</style>
