<template>
  <div id="dataResource">
    <div
      style="width:90%"
      class="ib"
    >

      <div class="dataNav">
        <div class=" tl">
          <el-breadcrumb
            separator="/"
            class="ib"
          >
            <el-breadcrumb-item :to="{ path: '/index/home' }">当前位置：首页</el-breadcrumb-item>
            <el-breadcrumb-item>资源中心</el-breadcrumb-item>
            <el-breadcrumb-item>数据资源</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <el-divider></el-divider>
      <div class="left">
        <el-card
          class="box-card fl"
          style="font-size:12px"
        >
          <div
            slot="header"
            class="clearfix"
          >
            <span>资源基本信息</span>
          </div>
          <el-select
            v-model="value8"
            filterable
            placeholder="请选择"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <div class="tree">
            <el-tree
              :data="data"
              :props="defaultProps"
              @node-click="handleNodeClick"
              :default-expand-all="true"
            ></el-tree>
          </div>
        </el-card>
      </div>
      <el-divider direction="vertical"></el-divider>
      <div class="right">
        <div class="area mtb24">
          <div class="fl ib">领域：</div>
          <div
            class="ib  tl"
            style="width:90%"
          >
            <el-badge
              :value="item.num"
              class="item"
              v-for="item in typeName "
              :key="item.id"
            >
              <el-button size="small">{{item.name}}</el-button>
            </el-badge>
          </div>
        </div>
        <div class="condition tl ">
          筛选条件：

        </div>
        <el-card class="box-card tl">
          <el-select
            v-model="value"
            filterable
            placeholder="请输入资源名称"
          >
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <div class="areaNav pd mtb24">
            <span class="tl">共<span style="color:dodgerblue">{{dataNum}}</span>个数据集</span>
            <div class="fr ib">
              <span>
                <i class="iconfont iconfangwenliang"></i>
                访问量
                <i class="el-icon-caret-bottom"></i>
              </span>
              <span>
                <i class="iconfont iconPCbofangye_gengxinshijian"></i>
                更新时间
                <i class="el-icon-caret-bottom"></i>
              </span>
              <span>
                <i class="iconfont iconxiazailiang"></i>
                下载量
                <i class="el-icon-caret-bottom"></i>
              </span>
              <span>
                <i class="iconfont iconshuju"></i>
                数据容量
                <i class="el-icon-caret-bottom"></i>
              </span>
              <span>
                <i class="iconfont iconpingfen"></i>
                评分
                <i class="el-icon-caret-bottom"></i>
              </span>
            </div>
          </div>
          <div id="table">
            <div class="pd" style="height:156px">
              <div class="head">
                <h4
                  class="ib"
                  style="color: dodgerblue;font-size:16px"
                >公路水运工程施工企业安全生产</h4>
                <el-rate
                  class="ib"
                  v-model="value2"
                  :colors="colors"
                >
                </el-rate>
                <div class="need"> 数据容量：12345</div>
                <div class="fr"><i class="iconfont iconshoucang"></i> 收藏</div>
              </div>
              <div>公路水运工程施工企业安全生产三类人员信息</div>
              <div
                class="pd"
                style="color: dodgerblue"
              >
                <span>XLS</span>
                <span>CSV</span>
                <span>XML</span>
                <span>JSON</span>
                <span>RDF</span>
                <span
                  class="fr"
                  style="color: black"
                >提供者：省交通运输局</span>
                <span
                  class="fr"
                  style="color: black"
                >数据领域：交通运输</span>
              </div>
              <div class="w">
                <el-button
                  size="mini"
                  class="fl"
                >数据预览</el-button>
                <div class="fr">
                  <span>查看：8996次</span>
                  <span>下载：78次</span>
                  <span>更新时间：2019-06-14</span>
                </div>
              </div>
            </div>
            <div class="pd" style="height:156px">
              <div class="head">
                <h4
                  class="ib"
                  style="color: dodgerblue;font-size:16px"
                >公路水运工程施工企业安全生产</h4>
                <el-rate
                  class="ib"
                  v-model="value2"
                  :colors="colors"
                >
                </el-rate>
                <div class="need"> 数据容量：12345</div>
                <div class="fr"><i class="iconfont iconshoucang"></i> 收藏</div>
              </div>
              <div>公路水运工程施工企业安全生产三类人员信息</div>
              <div
                class="pd"
                style="color: dodgerblue"
              >
                <span>XLS</span>
                <span>CSV</span>
                <span>XML</span>
                <span>JSON</span>
                <span>RDF</span>
                <span
                  class="fr"
                  style="color: black"
                >提供者：省交通运输局</span>
                <span
                  class="fr"
                  style="color: black"
                >数据领域：交通运输</span>
              </div>
              <div class="w">
                <el-button
                  size="mini"
                  class="fl"
                >数据预览</el-button>
                <div class="fr">
                  <span>查看：8996次</span>
                  <span>下载：78次</span>
                  <span>更新时间：2019-06-14</span>
                </div>
              </div>
            </div>
          </div>
          <div class="page">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="1000">
            </el-pagination>
          </div>

        </el-card>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: 'dataResource',
  data () {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      options2: [
        {
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value8: '',
      data: [
        {
          label: '公共专题时空数据资源',
          children: [{
            label: '部件普查',
            children: [
              {
                label: '2019福州市主城区部件普查'
              },
              {
                label: '2018福州市主城区部件普查'
              },
              {
                label: '2017福州市主城区部件普查'
              },
              {
                label: '2016福州市主城区部件普查'
              },
              {
                label: '2015福州市主城区部件普查'
              },
              {
                label: '2014福州市主城区部件普查'
              }
            ]
          },
          {
            label: '地址编码',
            children: [
              {
                label: '2019年地址编码'
              },
              {
                label: '2018年地址编码'
              },
              {
                label: '2017年地址编码'
              },
              {
                label: '2016年地址编码'
              }
            ]
          }]
        },
        {
          label: '基础时空数据资源',
          children: [
            {
              label: '电子地图',
              children: [
                {
                  label: '2015年CGCS2000矢量地图'
                }
              ]
            },
            {
              label: '数字线画图（DLG）',
              children: [
                {
                  label: '2017'
                },
                {
                  label: '2016'
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      typeName: [
        {
          id: 1,
          name: '不限',
          num: 12
        },
        {
          id: 2,
          num: 12,
          name: '安全生产'
        },
        {
          id: 3,
          num: 12,
          name: '教育文化'
        },
        {
          id: 4,
          num: 12,
          name: '科技创新'
        },
        {
          id: 5,
          num: 12,
          name: '气象服务'
        },
        {
          id: 6,
          num: 12,
          name: '商贸流通'
        },
        {
          id: 7,
          num: 12,
          name: '社保就业'
        },
        {
          id: 8,
          num: 12,
          name: '社会救助'
        },
        {
          id: 9,
          num: 12,
          name: '生活服务'
        },
        {
          id: 10,
          num: 12,
          name: '生活服务'
        },
        {
          id: 11,
          num: 12,
          name: '生活服务'
        },
        {
          id: 12,
          num: 12,
          name: '生活服务'
        },
        {
          id: 13,
          num: 12,
          name: '生活服务'
        },
        {
          id: 14,
          num: 12,
          name: '生活服务'
        },
        {
          id: 15,
          num: 12,
          name: '生活服务'
        },
        {
          id: 16,
          num: 12,
          name: '生活服务'
        }
      ],
      restaurants: [],
      state: '',
      timeout: null,
      value: '',
      dataNum: 471,
      value2: null,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900', '#FF5A69']
    }
  },
  methods: {
    handleNodeClick (data) {
      console.log(data)
    },
    handleClose () {
      console.log(this)
    },
    checkType (id, index) {
      console.log(this, index)
      console.log(id)
    }

  }
}
</script>
<style lang="less" scoped>
#dataResource {
  width: 100%;
  height: 500px;
  .tc();
  .left {
    .ib();
    width: 20%;
    height: 100%;
  }
  .right {
    .ib();
    width: 70%;
    height: 100%;
    .fr();
  }
  .area {
    span {
      margin: 10px 5px;
    }
  }
}
.item {
  margin-top: 10px;
  margin-right: 40px;
}
.condition {
  border: 1px solid #e1dddd;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.15);
  padding: 10px 10px;
}
.areaNav {
  border-top: 1px solid #e1dddd;
  border-bottom: 1px solid #e1dddd;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.15);
}
.need {
  font-size: 12px;
  margin: 0px 10px;
  color: darkgray;
  .ib();
}
#table {
  font-size: 12px;
  span {
    padding: 0 10px;
  }
  > div:nth-child(2n){background:ghostwhite;  height: 156px;}
}
</style>
