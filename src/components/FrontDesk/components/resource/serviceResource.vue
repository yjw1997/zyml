<template>
  <div id="serviceResource">
    <div class="serNav">
      <div class="container tl mtb24">
        <el-breadcrumb
          separator="/"
          class="ib"
        >
          <el-breadcrumb-item :to="{ path: '/index/home' }">当前位置首页</el-breadcrumb-item>
          <el-breadcrumb-item>资源中心</el-breadcrumb-item>
          <el-breadcrumb-item>服务资源</el-breadcrumb-item>
        </el-breadcrumb>
        <el-tag
          type="success"
          closable
          v-show="show == 1"
          :disable-transitions="false"
          @close="show =0"
        >标准分类：智慧地图</el-tag>
        <el-button
          round
          class="fr"
        >登陆</el-button>
        <el-button
          round
          class="fr"
        ><i class="iconfont iconcart"></i>资源车</el-button>
      </div>
    </div>
    <div class="con">
      <div
        class="boxCheck left"
        style="font-size:12px"
      >
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
      </div>
      <div class="center">

      </div>
      <div class="right">
        <div class="box-check">
          <div class="pd">
            <span>资源基本信息</span>
            <el-divider direction="horizontal"></el-divider>
          </div>
          <div style="padding:0px 5px">
            <el-form
              label-position="left"
              label-width="110px"

              :model="formLabelAlign"
            >
              <el-form-item label="资源名称：" style="font-size:12px">
                <el-input v-model="formLabelAlign.name"></el-input>
              </el-form-item>
              <el-form-item label="项目名称：">
                <el-input v-model="formLabelAlign.Aname"></el-input>
              </el-form-item>
              <el-form-item label="生产完成时间：">
                <el-input v-model="formLabelAlign.endTime"></el-input>
              </el-form-item>
              <el-form-item label="生产数据类型：">
                <el-input v-model="formLabelAlign.type"></el-input>
              </el-form-item>
              <el-form-item label="比例尺：">
                <el-input v-model="formLabelAlign.rule"></el-input>
              </el-form-item>
              <el-form-item label="坐标系：">
                <el-input v-model="formLabelAlign.xy"></el-input>
              </el-form-item>
              <el-form-item label="现势性：">
                <el-input v-model="formLabelAlign.lz"></el-input>
              </el-form-item>
              <el-form-item label="访问次数：">
                <el-input v-model="formLabelAlign.time"></el-input>
              </el-form-item>
              <el-form-item label="覆盖面积长度：">
                <el-input v-model="formLabelAlign.long"></el-input>
              </el-form-item>
              <el-form-item label="覆盖范围：">
                <el-input v-model="formLabelAlign.area"></el-input>
              </el-form-item>
              <el-form-item label="摘要：">
                <el-input v-model="formLabelAlign.summary"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: 'serviceResource',
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
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      },
      show: 1
    }
  },
  methods: {
    handleNodeClick (data) {
      console.log(data)
    },
    handleClose () {
      console.log(this)
    }
  }
}
</script>
<style lang="less" scoped>
#serviceResource {
  width: 100%;
  height: 800px;
  .tc();
  .left {
    .ib();
    width: 18%;
    height: 100%;
    .fl();
    font-size: 14px;
  }
  .right {
    .ib();
    width: 22%;
    height: 100%;
    .fl();
  }
  .center {
    .ib();
    width: 59%;
    height: 100%;
    .fl();
    border: 1px solid black;
  }
  .con {
    width: 100%;
    height: 100%;
    .ib();
  }
}
.el-card__body {
  padding: 10px 0px !important;
}
.box-card {
  height: 100%;
}
.el-form-item__label{
  font-size: 12px;
}
</style>
