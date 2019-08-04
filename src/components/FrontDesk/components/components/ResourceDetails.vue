<template>
  <div id="ResourceDetails">
    <div id="con">
      <div class="p15 tl">
        <Breadcrumb>
          <BreadcrumbItem to="/index">首页</BreadcrumbItem>
          <BreadcrumbItem to="/recourse/serverRecourse">资源中心</BreadcrumbItem>
          <BreadcrumbItem to="/recourse/serverRecourse">服务资源</BreadcrumbItem>
          <BreadcrumbItem to="/recourse/serverRecourse">中国影像地图服务</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div
        id="left"
        class="p15"
      >
        <Tags :approvalData="approvalData"></Tags>
      </div>
      <div
        id="right"
        class="fr p15"
      >
        <Button
          type="info"
          size="large"
          @click="apple"
        >申请</Button>
        <div class="cscenter">
          <div>
            申请量：111
          </div>
          <div>浏览量：1212</div>
        </div>
      </div>
      <div class="imgs">
        <img
          src="../../../assets/u113.png"
          alt="地图插件"
          width="100%"
          height="100%"
        >
      </div>
      <div
        id="comment"
        class="p15"
      >
        <div class="title p15">
          <Icon type="ios-chatbubbles" />评论(2)</div>
        <Scroll>
          <div class="box">
            <div class="name">二狗子</div>
            <div class="content">今天有点热</div>
            <div class="time">2018-3-28</div>
          </div>
          <div class="box">
            <div class="name">匿名</div>
            <div class="content">哇啊啊啊啊啊啊</div>
            <div class="time">2018-3-28</div>
          </div>
           <div class="box">
            <div class="name">二狗子</div>
            <div class="content">今天有点热</div>
            <div class="time">2018-3-28</div>
          </div>
          <div class="box">
            <div class="name">匿名</div>
            <div class="content">哇啊啊啊啊啊啊</div>
            <div class="time">2018-3-28</div>
          </div>
        </Scroll>

      </div>
    </div>
    <Modal
      v-model="modal1"
      title="服务申请"
      style="text-align:center"
      :closable="true"
      :mask-closable="true"
    >
      <div>
        <ul
          class="ul-title"
          style="line-height: 49px;"
        >
          <li>对接系统名称：</li>
          <li>应用系统描述：</li>
          <li>需求描述：</li>
          <li>申请时间：</li>
        </ul>
        <ul style="width:49%;display: inline-block;list-style:none;line-height: 49px;">
          <li>
            <Select class="inputs">
              <Option value="111">111</Option>
            </Select>
          </li>
          <li>
            <Input
              placeholder="应用系统描述"
              type="textarea"
              class="inputs"
            />
          </li>
          <li>
            <Input
              type="textarea"
              placeholder="需求描述"
              class="inputs"
            />
          </li>
          <li>
            <Input
              placeholder="Enter something..."
              class="inputs"
            />
          </li>
        </ul>
      </div>
      <div slot="footer">
        <Button type="info">提交申请</Button>
        <Button type="info">保存</Button>
        <Button
          type="default"
          @click="moken"
        >取消</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
import Tags from '../../../components/tags'
export default {
  components: {
    Tags
  },
  data() {
    return {
      approvalData: {},
      modal1: false,
    }
  },
  methods: {
    // 点击申请按钮
    apple() {
      this.modal1 = true
    },
    // 点击取消按钮
    moken() {
      this.modal1 = false
    }
  }

}
</script>
<style lang="less" scoped>
#ResourceDetails {
  width: 100%;
  .tc();
  #con {
    width: 75%;
    .ib();
    #left {
      width: 75%;
      .ib();
      .border-right();
    }
    #right {
      width: 24%;
      .ib();
      position: relative;
      height: 400px;
    }
    .imgs {
      width: 100%;
      height: 332px;
    }
    #comment {
      width: 100%;
      .tl();
      .box-check();
      .box {
        .p15();
        .border-bottom();
        font-size: 15px;
        .name {
          color: red;
          font-weight: 700;
        }
        .content {
          font-weight: 700;
          .p15();
        }
      }
    }
  }
}
</style>
