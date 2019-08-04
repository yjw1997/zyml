<template>
  <div id="map">
    <el-divider></el-divider>
    <div class="container">
      <div class="left tc">
        <el-card shadow="hover"
                 class="body"
                 :body-style="{ padding: ' 0px 5px' }">
          <el-collapse v-model="activeName"
                       accordion>
            <el-collapse-item title="关键字搜索"
                              name="1">
              <div style="height: 330px">
                <div style="margin-top: 15px;">
                  <el-input placeholder="请输入内容"
                            v-model="input"
                            class="input-with-select">
                    <el-button slot="append"
                               icon="el-icon-search"></el-button>
                  </el-input>
                </div>
              </div>
            </el-collapse-item>
            <el-collapse-item title="交通查询"
                              name="2">
              <div style="height: 330px">
                <el-input placeholder="请输入内容"
                          v-model="startAddress">
                  <template slot="prepend">起点:</template>
                </el-input>
                <div style="margin-top: 15px;">
                  <el-input placeholder="请输入内容"
                            v-model="endAddress"
                            class="input-with-select">
                    <template slot="prepend">终点:</template>
                    <el-button slot="append"
                               icon="el-icon-search"></el-button>
                  </el-input>
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </div>
      <div class="right box-check">
        这里是地图
      </div>
    </div>
    <el-divider></el-divider>
    <Footer></Footer>

  </div>

</template>
<script>
import Footer from '../footer'
export default {
  name: 'home',
  components: {
    Footer
  },
  data () {
    return {
      activeName: '1',
      input: '',
      startAddress: '',
      endAddress: ''
    }
  }
}
</script>
<style lang="less" scoped>
#map {
  .ib();
  width: 100%;
  height: 475px;
  .tc();
  .left {
    .ib();
    width: 20%;
    height: 100%;
    .fl();
  }
  .right {
    .ib();
    width: 78%;
    height: 100%;
  }
}
.container {
  width: 98% !important;
}
</style>
