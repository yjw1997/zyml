<template>
  <div class="index"
       id="serviceTwo">
    <MyNav></MyNav>
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
            <el-input v-model="searchContent"
                      placeholder="请输入搜索关键字"
                      style="width: 155px"></el-input>
            <el-button>搜索</el-button>
          </div>
          <el-tree :data="data"
                   @node-click="handleNodeClick"
                   node-key="id"></el-tree>
        </div>
        <div class="serviceTwoRight">

        </div>
      </div>
    </div>

    <Footer></Footer>
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
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      searchContent: ''
    }
  },
  methods: {
    handleNodeClick (data) {
      console.log(data)
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
  }
}
</style>
