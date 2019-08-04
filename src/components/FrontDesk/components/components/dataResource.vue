<template>
  <div id="dataRecourse">
    <div id="con">
      <div id="left">
        <div class="padding">
          <router-link to="/recourse/serverRecourse">服务资源</router-link>
        </div>
        <div class="padding">
          <router-link to="/recourse/dataResource">数据资源</router-link>
        </div>
        <div class="shadow">
          <span @click="showdataList2">来源目录</span>
          <span class="fr" @click="showdataList">主题目录</span>
          <Tree :data="data2"></Tree>
        </div>
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
              <Icon type="ios-cafe"></Icon> 数据资源
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
          <Table :columns="columns" :data="data"></Table>
          <div class="p15">
            <Page :total="100" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data2: [
        {
          title: '一级目录',
          expand: true,
          children: [
            {
              title: '福州市勘测院'
            },
            {
              title: '福州市交巡警支队'
            },
            {
              title: '公安消防支队'
            },
            {
              title: '福州市工商局'
            },
            {
              title: '福州市马尾区交通局'
            },
            {
              title: '福州市华榕集团'
            },
            {
              title: '福州市华润燃气'
            },
            {
              title: '福州市林业局'
            },
          ]
        },
      ],
      columns: [
        {
          title: '图层别名',
          key: 'name'
        },
        {
          title: '来源单位',
          key: 'age'
        },
        {
          title: '注册时间',
          key: 'address'
        },
        {
          title: '浏览量',
          key: 'name'
        },
        {
          title: '申请量/下载量',
          key: 'age'
        },
        {
          title: '所属服务',
          key: 'address'
        },
        {
          title: '操作',
          key: 'address'
        }
      ],
      data: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
      ]
    }
  },
  methods: {
    showdataList () {
      this.data2 = [
        {
          title: '民生专题数据',
          expand: true,
          children: [
            {
              title: '交通出行'
            },
            {
              title: '休闲旅游'
            },
            {
              title: '教育专题'
            },
            {
              title: '医疗卫生'
            },
          ]
        },
        {
          title: '网络数据',
          expand: true,
        }
      ]
    },
    showdataList2 () {
      this.data2 = [
        {
          title: '一级目录',
          expand: true,
          children: [
            {
              title: '福州市勘测院'
            },
            {
              title: '福州市交巡警支队'
            },
            {
              title: '公安消防支队'
            },
            {
              title: '福州市工商局'
            },
            {
              title: '福州市马尾区交通局'
            },
            {
              title: '福州市华榕集团'
            },
            {
              title: '福州市华润燃气'
            },
            {
              title: '福州市林业局'
            },
          ]
        },
      ]
    }
  }
}
</script>
<style lang="less" scoped>
#dataRecourse {
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
          width: 23%;
          height: 30%;
          .ib();
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
            .tc();
            span {
              font-size: 12px !important;
              color: #999999 !important;
              font-weight: normal !important;
              .ib();
              .tc();
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
