<template>
  <div
    id="annDetailsIndex"
    class=""
  >
    <div
      id="print"
      class="con box-check ib p30"
    >
      <div class="title">2018年11月影像更新日志</div>
      <div
        class="p15 border-bottom"
        style="height:50px"
      >
        <div class="ib fl">发布时间:2018-11-23 11:30:23</div>
        <div class="ib fr noprint">
          <div class="ib">【字体:
            <Tag
              class="p15lr"
              checkable
              :checked="checked1"
              color="primary"
              @on-change="big"
            >大</Tag>
            <Tag
              class="p15lr"
              checkable
              color="primary"
              @on-change="medium"
              :checked="checked2"
            >中</Tag>
            <Tag
              class="p15lr"
              checkable
              color="primary"
              @on-change="small"
              :checked="checked3"
            >小</Tag>】
          </div>
          <div
            class="ib"
            @click="print"
          >
            <Icon type="md-print" />打印</div>
        </div>
      </div>
      <div
        id="content"
        :style="style"
      >
        {{content}}
      </div>
      <div class="time tr p30">
        责任编辑:刘雯
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'annDetailsIndex',
  data() {
    return {
      style: {
        'font-size': '15px'
      },
      checked1: false,
      checked2: true,
      checked3: false,
      content: '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + `社会主义核心价值观是社会主义核心价值体系的内核，体现社会主义核心价值体系的根本性质和基本特征，反映社会主义核心价值体系的丰富内涵和实践要求，是社会主义核心价值体系的高度凝练和集中表达。 [1-4]
        党的十八大以来，中央高度重视培育和践行社会主义核心价值观。习近平总书记多次作出重要论述、提出明确要求。中央政治局围绕培育和弘扬社会主义核心价值观、弘扬中华传统美德进行集体学习。中办下发《关于培育和践行社会主义核心价值观的意见》。党中央的高度重视和有力部署，为加强社会主义核心价值观教育实践指明了努力方向，提供了重要遵循。 [1-4]
        2017年10月18日，习近平同志在十九大报告中指出，要培育和践行社会主义核心价值观。要以培养担当民族复兴大任的时代新人为着眼点，强化教育引导、实践养成、制度保障，发挥社会主义核心价值观对国民教育、精神文明创建、精神文化产品创作生产传播的引领作用，把社会主义核心价值观融入社会发展各方面，转化为人们的情感认同和行为习惯。
        `
    }
  },
  methods: {
    //  点击字体大中小标签
    big() {

      this.checked1 = true,
        this.checked2 = false,
        this.checked3 = false,
        this.style = {
          'font-size': '20px',
          'line-height': '50px'
        }
    },
    medium() {
      this.checked1 = false,
        this.checked2 = true,
        this.checked3 = false,
        this.style = {
          'font-size': '18px',
          'line-height': '32px'
        }
    },
    small() {
      this.checked1 = false,
        this.checked2 = false,
        this.checked3 = true,
        this.style = {
          'font-size': '15px',
          'line-height': '25px'
        }
    },
    //  点击打印按钮
    print() {
      var printBox = document.getElementById('print');
      
      var noprint = document.getElementsByClassName('noprint') 
      noprint[0].style.visibility = 'hidden'
      //  拿到打印的区域的html内容
      var newContent = printBox.innerHTML
      //将旧的页面储存起来，当打印完成后返给给页面。
      var oldContent = document.body.innerHTML
      var wind = window.open("",'newwindow', 'height=700, width=1000, top=100, left=100, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=n o, status=no')
      wind.document.body.innerHTML = newContent
      // return false
      wind.print()
      wind.close()
      // 重新加载页面，以刷新数据。以防打印完之后，页面不能操作的问题
      window.location.reload()
      document.body.innerHTML = oldContent
      return false
    }
  }
}
</script>
<style lang="less" scoped>
#annDetailsIndex {
  width: 100%;
  .tc();
  .mb15();
  .con {
    width: 70%;
  }
  #content {
    width: 100%;
    .p30();
    .tl();
    line-height: 32px;
  }
}
//  不需要打印的区域
.noprint {
  visibility: none;
}
</style>
