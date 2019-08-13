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
                    <span>{{formInline.user}}</span>
                  </el-form-item>
                  <el-form-item label="服务名：">
                    <span>{{formInline.user}}</span>
                    <span>{{formInline.user}}</span>
                  </el-form-item>
                  <el-form-item label="服务id：">
                    <span>{{formInline.user}}</span>
                  </el-form-item>
                  <el-form-item label="摘要：">
                    <span>{{formInline.user}}</span>
                  </el-form-item>
                  <el-form-item label="关键词：">
                    <span>{{formInline.user}}</span>
                  </el-form-item>
                  <el-form-item label="发布单位：">
                    <span>{{formInline.user}}</span>
                  </el-form-item>
                  <el-form-item label="发布日期：">
                    <span>{{formInline.user}}</span>
                  </el-form-item>
                  <el-form-item label="服务地址：">
                    <span>{{formInline.user}}</span>
                  </el-form-item>
                  <el-form-item label="服务类型：">
                    <span>{{formInline.user}}</span>
                  </el-form-item>
                  <el-form-item label="服务类型版本：">
                    <span>{{formInline.user}}</span>
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
                    <span>{{formInline.user}}</span>
                  </el-form-item>
                  <el-form-item label="单位网址：">
                    <span>{{formInline.user}}</span>

                  </el-form-item>
                  <el-form-item label="国家：">
                    <span>{{formInline.user}}</span>

                  </el-form-item>
                  <el-form-item label="省（直辖市）：">
                    <span>{{formInline.user}}</span>

                  </el-form-item>
                  <el-form-item label="城市：">
                    <span>{{formInline.user}}</span>

                  </el-form-item>
                  <el-form-item label="详细设计：">
                    <span>{{formInline.user}}</span>

                  </el-form-item>
                  <el-form-item label="邮编：">
                    <span>{{formInline.user}}</span>

                  </el-form-item>
                  <el-form-item label="电话：">
                    <span>{{formInline.user}}</span>

                  </el-form-item>
                  <el-form-item label="传真：">
                    <span>{{formInline.user}}</span>

                  </el-form-item>
                  <el-form-item label="电子邮箱：">
                    <span>{{formInline.user}}</span>

                  </el-form-item>
                  <el-form-item label="联系人：">
                    <span>{{formInline.user}}</span>

                  </el-form-item>
                  <el-form-item label="联系人职位：">
                    <span>{{formInline.user}}</span>
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
                  <span>{{formInline.user}}</span>

                </el-form-item>
                <el-form-item label="使用限制：">
                  <span>{{formInline.user}}</span>
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
                  <span>{{formInline.user}}</span>

                </el-form-item>
                <el-form-item label="空间表达类型：">
                  <span>{{formInline.user}}</span>
                </el-form-item>
                <el-form-item label="空间分辨率：">
                  <span>{{formInline.user}}</span>

                </el-form-item>
                <el-form-item label="其他说明：">
                  <span>{{formInline.user}}</span>
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
                  <span>{{formInline.user}}</span>
                </el-form-item>
                <el-form-item label="比例尺">
                  <span>{{formInline.user}}</span>
                </el-form-item>
                <el-form-item label="切图起始点">
                  <span>{{formInline.user}}</span>
                </el-form-item>
                <el-form-item label="瓦片宽">
                  <span>{{formInline.user}}</span>
                </el-form-item>
                <el-form-item label="瓦片高">
                  <span>{{formInline.user}}</span>
                </el-form-item>
              </el-form>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div class="sdRight">

        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import MyNav from '@fc/nav'
import MyMenu from '@fc/myMenu'
import Footer from '@fc/footer'
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
        user: '111'
      }
    }
  }
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
    }
    .sdRight {
      width: 71%;
      .ib();
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
