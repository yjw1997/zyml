<template>
  <div id="suggest"
       class="index">
    <MyNav></MyNav>
    <MyMenu activeIndex="1"></MyMenu>
    <el-breadcrumb separator="/"
                   class="breadcrumb">
      <el-breadcrumb-item>当前位置：</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/index/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>建议列表</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="box tc">
      <div class="w60 ib">
        <div class="pr">
          <el-input type="textarea"
                    :rows="5"
                    placeholder="请输入您的反馈意见（字数1000字以内）"></el-input>
          <el-button type="primary"
                     size="mini"
                     class="fr"
                     style="position: absolute;bottom: 5px;right: 5px">提交建议</el-button>
        </div>
        <div style="margin: 20px"
             class="tl">
          <el-tabs v-model="activeName"
                   @tab-click="handleClick"
                   type="card">
            <el-tab-pane label="最新提交"
                         name="first">
              <div class="checkSugest">
                <div style="margin-left:20px">
                  <el-form :model="ruleForm">
                    <el-form-item label="产品："
                                  prop="resource">
                      <el-radio-group>
                        <el-radio label="全部"></el-radio>
                        <el-radio label="分析型数据库MySQL版 "></el-radio>
                        <el-radio label="云服务器ESC "></el-radio>
                        <el-radio label="快储存 "></el-radio>
                        <el-radio label="弹性伸缩 "></el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </el-form>
                  <el-form :model="ruleForm">
                    <el-form-item label="阶段："
                                  prop="resource">
                      <el-radio-group>
                        <el-radio label="全部"></el-radio>
                        <el-radio label="预审通过 "></el-radio>
                        <el-radio label="已采纳 "></el-radio>
                        <el-radio label="已实现 "></el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </el-form>
                  <el-form :model="ruleForm">
                    <el-form-item label="类型："
                                  prop="resource">
                      <el-radio-group>
                        <el-radio label="全部"></el-radio>
                        <el-radio label="功能建议 "></el-radio>
                        <el-radio label="产品缺陷 "></el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </el-form>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="赞同最多"
                         name="second">配置管理</el-tab-pane>
            <el-tab-pane label="评论最多"
                         name="third">角色管理</el-tab-pane>
            <el-tab-pane label="最新奖励"
                         name="fourth">定时任务补偿</el-tab-pane>
          </el-tabs>
          <div class="psx tc totle">累计 已提交{{totle}}条建议（部分建议未公开）</div>
          <div id="suggestList"
               style="overflow:auto">
            <div v-infinite-scroll="load"
                 infinite-scroll-disabled="disabled">
              <div class="suggestBox"
                   v-for="i in count"
                   :key="i">
                <div class="ib sugTitle">
                  【功能建议】 建议个人用户的实名认证信息应提供修改功能
                </div>
                <el-button type="success"
                           class="fr">已实现</el-button>
                <div>
                  <el-tag type="info">个人用户</el-tag>
                  <el-tag type="info">实名认证</el-tag>
                </div>
                <div class="sugContent">大多数小公司在初次使用阿里云时，都是小范围尝试使用。所以，注册的用户大多都是以公司员工的个人身份进行的申请和认证，并陆续购买了ECS或相关服务，并提供公司使用。但随着公司业务的发展，在已经开通的个人账户名下已经申请了开通了很多业务，但随着认证人的离职，会造成很多麻烦。建议应针对已经认证的个人用户，增加重新认证的功能，在原认证人许可的前提下，可以用户关联的已认证用户的真实姓名、认证支付宝账号等进行重新认证、变更......</div>
                <div class="headImg ">
                  <img src="@static/img/frontdesk/logo.png"
                       width="100%"
                       height="100%">
                </div>
                <div class="ib fz12 "
                     style="color: #0186E6;height: 35px;vertical-align: middle;">Linlin</div>
                <div class="ib fz12 "
                     style="color: #999999;height: 35px;vertical-align: middle;">发布时间：2017-11-16 15:14:37</div>
                <div class="fr">
                  <span class="icon">
                    <icon class="iconfont iconyanjing"></icon> 1000
                  </span>
                  <span class="icon">
                    <icon class="iconfont iconliaotian"></icon> 1000
                  </span>
                  <span class="icon">
                    <icon class="iconfont icondianzan1-copy"></icon> 1000
                  </span>
                  <span class="icon">
                    <icon class="iconfont iconstart-copy"></icon> 1000
                  </span>
                </div>
              </div>
            </div>
            <p v-if="loading">加载中...</p>
            <p v-if="noMore">没有更多了</p>
          </div>
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
  name: 'suggest',
  components: {
    MyNav, MyMenu, Footer
  },
  data () {
    return {
      activeName: 'first',
      ruleForm: {

      },
      totle: 1111,
      count: 5,
      loading: false
    }
  },
  computed: {
    noMore () {
      return this.count >= 10
    },
    disabled () {
      return this.loading || this.noMore
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    load () {
      this.loading = true
      setTimeout(() => {
        this.count += 2
        this.loading = false
      }, 2000)
    }
  }
}
</script>
<style lang="less" scoped>
#suggest {
  .breadcrumb {
    margin-left: 386px;
    display: inline-block;
    .p10();
  }
  .box {
    height: 800px !important;
    .checkSugest {
      width: 100%;
      height: 198px;
      border: 2px solid rgba(242, 242, 242, 1);
      border-top: 2px solid #0186e6;
      font-size: 14px;
      font-weight: 400;
      color: rgba(55, 61, 65, 1);
    }
    #suggestList {
      height: 300px;
      .suggestBox {
        padding: 15px 0px;
        border-bottom: 1px solid rgba(225, 225, 225, 1);
        .sugTitle {
          padding: 15px 0px;
          font-size: 14px;
          font-weight: 400;
          color: rgba(55, 61, 65, 1);
        }
        .sugContent {
          font-size: 12px;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          .psx();
        }
        .headImg {
          .ib();
          width: 35px;
          height: 35px;
          border-radius: 50%;
          overflow: hidden;
        }
      }
    }
  }
}
.totle {
  background-color: rgb(200, 229, 250);
  margin-top: 20px;
}
</style>
