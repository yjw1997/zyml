<template>
  <div id="serverRecourse">
    <div id="con">
      <div id="left">
        <div class="padding"><router-link to="/recourse/serverRecourse">服务资源</router-link></div>
        <Tree :data="data2" show-checkbox></Tree>
        <div class="padding"><router-link to="/recourse/dataResource">数据资源</router-link></div>
      </div>
      <div id="right">
        <div>
          <Breadcrumb>
            <BreadcrumbItem to="/index">
              <Icon type="ios-home-outline"></Icon> 首页
            </BreadcrumbItem>
            <BreadcrumbItem to="/recourse/serverRecourse">
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
              <CheckboxGroup>
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
          <ul>
            <li @click = "ResourceDetails">
              <img
                src="http://demo.cssmoban.com/cssthemes5/cpts_1664_coz/images/g7.jpg"
                width="100%"
                height="100%"
              />
              <span>政务内网区</span>
              <div id="btt">
                <span>发布时间：2015/10/06</span><span>服务类型： WMTS</span>
                <span>提供单位:XXXX</span><span>1234人浏览</span>
              </div>
            </li>
            <li>
              <img
                src="http://demo.cssmoban.com/cssthemes5/cpts_1664_coz/images/g7.jpg"
                width="100%"
                height="100%"
              />
              <span>政务内网区</span>
              <div id="btt">
                <span>发布时间：2015/10/06</span><span>服务类型： WMTS</span>
                <span>提供单位:XXXX</span><span>1234人浏览</span>
              </div>
            </li>
            <li>
              <img
                src="http://demo.cssmoban.com/cssthemes5/cpts_1664_coz/images/g7.jpg"
                width="100%"
                height="100%"
              />
              <span>政务内网区</span>
              <div id="btt">
                <span>发布时间：2015/10/06</span><span>服务类型： WMTS</span>
                <span>提供单位:XXXX</span><span>1234人浏览</span>
              </div>
            </li>
            <li>
              <img
                src="http://demo.cssmoban.com/cssthemes5/cpts_1664_coz/images/g7.jpg"
                width="100%"
                height="100%"
              />
              <span>政务内网区</span>
              <div id="btt">
                <span>发布时间：2015/10/06</span><span>服务类型： WMTS</span>
                <span>提供单位:XXXX</span><span>1234人浏览</span>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <img
                src="http://demo.cssmoban.com/cssthemes5/cpts_1664_coz/images/g7.jpg"
                width="100%"
                height="100%"
              />
              <span>政务内网区</span>
              <div id="btt">
                <span>发布时间：2015/10/06</span><span>服务类型： WMTS</span>
                <span>提供单位:XXXX</span><span>1234人浏览</span>
              </div>
            </li>
            <li>
              <img
                src="http://demo.cssmoban.com/cssthemes5/cpts_1664_coz/images/g7.jpg"
                width="100%"
                height="100%"
              />
              <span>政务内网区</span>
              <div id="btt">
                <span>发布时间：2015/10/06</span><span>服务类型： WMTS</span>
                <span>提供单位:XXXX</span><span>1234人浏览</span>
              </div>
            </li>
            <li>
              <img
                src="http://demo.cssmoban.com/cssthemes5/cpts_1664_coz/images/g7.jpg"
                width="100%"
                height="100%"
              />
              <span>政务内网区</span>
              <div id="btt">
                <span>发布时间：2015/10/06</span><span>服务类型： WMTS</span>
                <span>提供单位:XXXX</span><span>1234人浏览</span>
              </div>
            </li>
            <li>
              <img
                src="http://demo.cssmoban.com/cssthemes5/cpts_1664_coz/images/g7.jpg"
                width="100%"
                height="100%"
              />
              <span>政务内网区</span>
              <div id="btt">
                <span>发布时间：2015/10/06</span><span>服务类型： WMTS</span>
                <span>提供单位:XXXX</span><span>1234人浏览</span>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <img
                src="http://demo.cssmoban.com/cssthemes5/cpts_1664_coz/images/g7.jpg"
                width="100%"
                height="100%"
              />
              <span>政务内网区</span>
              <div id="btt">
                <span>发布时间：2015/10/06</span><span>服务类型： WMTS</span>
                <span>提供单位:XXXX</span><span>1234人浏览</span>
              </div>
            </li>
            <li>
              <img
                src="http://demo.cssmoban.com/cssthemes5/cpts_1664_coz/images/g7.jpg"
                width="100%"
                height="100%"
              />
              <span>政务内网区</span>
              <div id="btt">
                <span>发布时间：2015/10/06</span><span>服务类型： WMTS</span>
                <span>提供单位:XXXX</span><span>1234人浏览</span>
              </div>
            </li>
            <li>
              <img
                src="http://demo.cssmoban.com/cssthemes5/cpts_1664_coz/images/g7.jpg"
                width="100%"
                height="100%"
              />
              <span>政务内网区</span>
              <div id="btt">
                <span>发布时间：2015/10/06</span><span>服务类型： WMTS</span>
                <span>提供单位:XXXX</span><span>1234人浏览</span>
              </div>
            </li>
            <li>
              <img
                src="http://demo.cssmoban.com/cssthemes5/cpts_1664_coz/images/g7.jpg"
                width="100%"
                height="100%"
              />
              <span>政务内网区</span>
              <div id="btt">
                <span>发布时间：2015/10/06</span><span>服务类型： WMTS</span>
                <span>提供单位:XXXX</span><span>1234人浏览</span>
              </div>
            </li>
          </ul>
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
          title: '服务类型',
          expand: true,
          children: [
            {
              title: 'leaf 1-1-1'
            },
            {
              title: 'leaf 1-1-2'
            }
          ]
        },
        {
          title: '主题分类',
          expand: true,
          children: [
            {
              title: 'leaf 1-2-1'
            },
            {
              title: 'leaf 1-2-1'
            }
          ]
        },
        {
          title: '提供单位',
          expand: true,
          children: [
            {
              title: 'leaf 1-2-1'
            },
            {
              title: 'leaf 1-2-1'
            }
          ]
        },
        {
          title: '覆盖区域',
          expand: true,
          children: [
            {
              title: 'leaf 1-2-1'
            },
            {
              title: 'leaf 1-2-1'
            }
          ]
        },
        {
          title: '更新周期',
          expand: true,
          children: [
            {
              title: 'leaf 1-2-1'
            },
            {
              title: 'leaf 1-2-1'
            }
          ]
        },
        {
          title: '坐标系',
          expand: true,
          children: [
            {
              title: 'leaf 1-2-1'
            },
            {
              title: 'leaf 1-2-1'
            }
          ]
        },
        {
          title: '投影类型',
          expand: true,
          children: [
            {
              title: 'leaf 1-2-1'
            },
            {
              title: 'leaf 1-2-1'
            }
          ]
        },
        {
          title: '使用权限',
          expand: true,
          children: [
            {
              title: 'leaf 1-2-1'
            },
            {
              title: 'leaf 1-2-1'
            }
          ]
        }
      ]
    }
  },
  methods:{
    ResourceDetails() {
      this.$router.push({path: '/recourse/ResourceDetails'})
    }
  }
}
</script>
<style lang="less" scoped>
#serverRecourse {
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
        height: 1080px;
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
