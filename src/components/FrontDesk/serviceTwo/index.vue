<template>
  <div class="index"
       id="serviceTwo">
    <!-- //  我的导航 -->
    <div class="myNav">
      <div class="title">
        <img src="@static/img/frontdesk/logo.png">
        <img src="@static/img/frontdesk/tdtTitle.png" />
        <img src="@static/img/frontdesk/tdtName.png" />
      </div>
      <el-dropdown id="myMenu"
                   placement="bottom"
                   @click.native="showResource">
        <i class="iconfont icongouwuche"
           style="font-size:25px"></i>
        <el-dropdown-menu slot="dropdown"
                          class="dropdown">
          <el-dropdown-item>
            <el-tree :data="resData"
                     :props="defaultProps2"
                     @node-click="handleNodeClick2"
                     default-expand-all></el-tree>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="personalCenter">
        <i class="el-icon-user-solid"
           style="font-size:25px"></i>
      </div>

    </div>
    <!-- //  我的导航结束 -->
    <MyMenu activeIndex="2"></MyMenu>
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>当前位置：</el-breadcrumb-item>
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>资源中心</el-breadcrumb-item>
        <el-breadcrumb-item>服务资源</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="box tc">
      <div class="w60 ib">
        <div class="serviceTwoLeft">
          <div class="search">
            <el-input v-model="searchContent2"
                      placeholder="请输入搜索关键字"
                      style="width: 155px"></el-input>
            <el-button>搜索</el-button>
          </div>
          <el-tree :data="data"
                   @node-click="handleNodeClick"
                   node-key="id"></el-tree>
        </div>
        <div class="serviceTwoRight">
          <!-- <img src="@static/img/frontdesk/serviceMap.png"> -->
        </div>
      </div>
    </div>
    <Footer></Footer>
    <!-- //  资源基本信息 -->
    <el-dialog title="资源基本信息"
               :visible.sync="showInfo"
               width="616px"
               label-position="right">
      <el-form :model="formInfo"
               inline
               label-width="120px">
        <el-form-item label="资源名称：">
          <span>{{formInfo.name1}}</span>
        </el-form-item>
        <el-form-item label="项目名称：">
          <span>{{formInfo.name2}}</span>
        </el-form-item>
        <el-form-item label="生产完成时间：">
          <span>{{formInfo.name3}}</span>
        </el-form-item>
        <el-form-item label="数据生产类型：">
          <span>{{formInfo.name4}}</span>
        </el-form-item>
        <el-form-item label="比例尺：">
          <span>{{formInfo.name5}}</span>
        </el-form-item>
        <el-form-item label="坐标系：">
          <span>{{formInfo.name6}}</span>
        </el-form-item>
        <el-form-item label="现势性：">
          <span>{{formInfo.name7}}</span>
        </el-form-item>
        <el-form-item label="访问次数：">
          <span>{{formInfo.name8}}</span>
        </el-form-item>
        <el-form-item label="覆盖面积/长度：">
          <span>{{formInfo.name9}}</span>
        </el-form-item>
        <el-form-item>
          <span>
            <router-link to="/">详细信息>>></router-link>
          </span>
        </el-form-item>
      </el-form>
      <span slot="footer"
            class="dialog-footer tc">
        <el-button type="primary"
                   @click="addData">加入资源车</el-button>
      </span>
    </el-dialog>
    <!-- //  点击资源车 -->
    <el-dialog title="资源车"
               :visible.sync="showResourceS"
               width="616px"
               label-position="right">
      <div v-if="showStep === 1">
        <div>
          <el-checkbox v-model="checked">全选</el-checkbox>
          <div class="shopInfo">商品信息</div>
        </div>
        <div class="resourceTitle">
          申请单条服务
        </div>
        <div class="resourceCon">
          <el-checkbox v-model="checked1"></el-checkbox>
          <span>资源名：资源一</span>
          <span>类型：某某某</span>
          <span>使用范围描述：某某某</span>
          <span>使用时限：某某</span>
          <a @click="deleteResource">删除</a>
        </div>
        <div class="resourceTitle">
          申请融合服务
        </div>
        <div class="resourceCon">
          <el-checkbox v-model="checked1"></el-checkbox>
          <span>资源名：资源一</span>
          <span>类型：某某某</span>
          <span>使用范围描述：某某某</span>
          <span>使用时限：某某</span>
          <a @click="deleteResource">删除</a>
        </div>
        <div class="resourceCon">
          <el-checkbox v-model="checked1"></el-checkbox>
          <span>资源名：资源二</span>
          <span>类型：某某某</span>
          <span>使用范围描述：某某某</span>
          <span>使用时限：某某</span>
          <a @click="deleteResource">删除</a>
        </div>
      </div>
      <div v-if="showStep === 2">
        <div class="resourceTitle">
          融合服务一
        </div>
        <div class="resourceCon">
          <span>资源名：资源一</span>
          <span>类型：某某某</span>
          <span>使用范围描述：某某某</span>
          <span>使用时限：某某</span>
        </div>
        <div class="resourceTitle">
          融合服务二
        </div>
        <div class="resourceCon">
          <span>资源名：资源一</span>
          <span>类型：某某某</span>
          <span>使用范围描述：某某某</span>
          <span>使用时限：某某</span>
        </div>
        <div class="resourceCon">
          <span>资源名：资源二</span>
          <span>类型：某某某</span>
          <span>使用范围描述：某某某</span>
          <span>使用时限：某某</span>
        </div>
      </div>
      <span slot="footer"
            class="dialog-footer ">
        <el-button type="primary"
                   @click="showStep = 2"
                   v-if="showStep === 1">下一步</el-button>
        <el-button type="primary"
                   @click="showStep = 1;showResourceS =false"
                   v-if="showStep === 2">提交</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import MyNav from '@fd/serviceTwo/components/myNav'
import MyMenu from '@fc/myMenu'
import Footer from '@fc/footer'
export default {
  name: 'serviceTwo',
  components: {
    MyNav, MyMenu, Footer
  },
  data () {
    return {
      data: [
        {
          id: 1,
          label: '行业时空数据资源',
          children: [
            {
              id: 4,
              label: '部件普查',
              children: [
                {
                  id: 12,
                  label: '2019年福州市主城区部件普查'
                },
                {
                  id: 13,
                  label: '2018年福州市主城区部件普查'
                },
                {
                  id: 14,
                  label: '2017年福州市主城区部件普查'
                },
                {
                  id: 15,
                  label: '2016年福州市主城区部件普查'
                },
                {
                  id: 16,
                  label: '2015年福州市主城区部件普查'
                },
                {
                  id: 17,
                  label: '2014年福州市主城区部件普查'
                }
              ]
            },
            {
              id: 5,
              label: '地址编码',
              children: [
                {
                  id: 18,
                  label: '2019年地址编码'
                },
                {
                  id: 19,
                  label: '2018年地址编码'
                },
                {
                  id: 20,
                  label: '2017年地址编码'
                },
                {
                  id: 21,
                  label: '2016年地址编码'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: '基础时空数据资源',
          children: [
            {
              id: 6,
              label: '电子地图',
              children: [
                {
                  id: 22,
                  label: '2015年CGCS2000矢量地图'
                }

              ]
            },
            {
              id: 7,
              label: '数字线划图（DLG)',
              children: [
                {
                  id: 23,
                  label: '2017',
                  children: [
                    {
                      id: 24,
                      label: '2017年福州市域影像电子地图'
                    }
                  ]
                },
                {
                  id: 25,
                  label: '2016',
                  children: [
                    {
                      id: 26,
                      label: '资源一'
                    },
                    {
                      id: 27,
                      label: '资源二'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 3,
          label: '空间算法工具',
          children: [
            {
              id: 8,
              label: '日照分析'
            },
            {
              id: 9,
              label: '天际线分析'
            },
            {
              id: 10,
              label: '三维查询'
            },
            {
              id: 11,
              label: '三维高级分析'
            }
          ]
        }
      ],
      searchContent: '',
      resData: [
        {
          label: '申请单条服务',
          children: [{
            label: '资源一'
          }]
        },
        {
          label: '申请融合服务',
          children: [{
            label: '资源一'
          },
          {
            label: '资源二'
          }]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      defaultProps2: {
        children: 'children',
        label: 'label'
      },
      searchContent2: '',
      showInfo: false,
      formInfo: {
        name1: '',
        name2: '',
        name3: '',
        name4: '',
        name5: '',
        name6: '',
        name7: '',
        name8: '',
        name9: ''
      },
      treeData: {},
      showResourceS: true,
      checked: false,
      checked1: false,
      checked2: false,
      showStep: 1
    }
  },
  methods: {
    //  点击导航tree信息
    handleNodeClick2 (data) {
      console.log(data)
    },
    //  点击左边tree信息
    handleNodeClick (data) {
      this.treeData = data
      if (data.children !== undefined && data.children.length !== 0) return false
      console.log(data)
      console.log(data.children)
      //  弹出框数据
      this.showInfo = true
      this.formInfo.name1 = data.label
    },
    //  点击加入资源车
    addData () {
      console.log(this.treeData)
      console.log(this.resData[0])
      this.resData[0].children.push({ id: (this.resData[0].children.length) + 1, label: this.treeData.label })
      this.showInfo = false
      this.$message({
        message: '添加资源车成功',
        type: 'success'
      })
    },
    //  点击资源车图标
    showResource () {
      console.log(11111)
      this.showResourceS = true
    },
    //  资源车单条点击删除
    deleteResource () {

    }
  }
}
</script>
<style lang="less" scoped>
#serviceTwo {
  .breadcrumb {
    margin-left: 386px;
    display: inline-block;
    .p10();
  }
  .box {
    height: 891px !important;
  }
  .serviceTwoLeft {
    width: 25%;
    .ib();
    .fl();
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.06);
    border-radius: 0px 0px 4px 4px;
    .search {
      .psx();
    }
  }
  .serviceTwoRight {
    width: 74%;
    display: inline-block;
    height: 799px;
    overflow: auto;
    background-image: url("../../.././static/img/frontdesk/serviceMap.png");
    background-repeat: no-repeat;
    background-size: 120% 120%;
    background-position: -5px -3px;
  }
  .w40 {
    width: 40%;
    .ib();
  }
}
#serviceTwo /deep/ .el-form-item {
  width: 275px;
}
#serviceTwo /deep/ .el-dialog__footer {
  .tc();
}
.myNav {
  width: 1920px;
  padding: 32px 0px 25px 0px;
  line-height: 32px;
  position: relative;
  border-bottom: 1px solid #bababa;
  .title {
    position: relative;
    margin-left: 365px;
    .psx();
    .ib();
    img {
      vertical-align: middle;
      margin-left: 23px;
    }
  }
  .search {
    .ib();
    z-index: 2;
    margin-left: 302px;
    position: absolute;
    top: 46px;
  }
  .logn {
    z-index: 2;
    font-size: 14px;
    position: absolute;
    right: 346px;
    top: 46px;
  }
  .bc2 {
    z-index: -2;
  }
}
.dropdown {
  li {
    // float: left;
    // padding: 0px 30px;
    a {
      .ib();
      width: 100%;
      height: 100%;
    }
  }
}
#myMenu {
  margin-left: 365px;
}
.personalCenter {
  .ib();
  border: 1px solid gray;
  border-radius: 50%;
  margin-left: 30px;
  width: 25px;
  height: 25px;
  color: #0186e6;
}
.myNav /deep/ .el-tree-node__label {
  font-size: 16px;
  color: #0186e6;
}
.shopInfo {
  color: #999999;
  font-size: 12px;
  .ib();
  margin-left: 20px;
}
.resourceTitle {
  color: #0186e6;
  font-size: 16px;
  font-weight: 400;
  padding: 15px 0px;
}
.resourceCon {
  padding: 15px 0px;
  span {
    padding: 0px 8px;
  }
  a {
    padding: 0px 15px;
    color: #0186e6;
  }
}
</style>
