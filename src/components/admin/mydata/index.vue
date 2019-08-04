<template>
  <div id="mydata">
    <div class="left">
      <div class="con">
        <Title titleName="我上传的数据"></Title>

        <div></div>
      </div>
    </div>
    <div class="right">
      <div class="con">
        <InputList :title="dataTitle"
                   :show="false"></InputList>
        <div class="table">
          <el-table :data="tableData"
                    style="width: 100%"
                    :default-sort="{prop: 'date', order: 'descending'}"
                    border>
            <el-table-column prop="id"
                             label="序号"
                             sortable>
            </el-table-column>
            <el-table-column prop="Aname"
                             label="图层别名"
                             sortable>
            </el-table-column>
            <el-table-column prop="resAddress"
                             label="注册单位">
            </el-table-column>
            <el-table-column prop="appTime"
                             label="申请时间">
            </el-table-column>
            <el-table-column prop="data"
                             label="图源层数据">
            </el-table-column>
            <el-table-column prop="appstatus"
                             label="审批状态">
            </el-table-column>
            <el-table-column prop="show"
                             label="操作">
            </el-table-column>
            <el-table-column prop="map"
                             label="地图">
            </el-table-column>
          </el-table>
        </div>
        <div class="page">
          <el-pagination background
                         layout="prev, pager, next"
                         :total="1000">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import InputList from '../components/inputlist'
import Title from '../components/title'
export default {
  name: 'mydata',
  components: {
    InputList, Title
  },
  data () {
    return {
      dataTitle: ['图层别名：', '审批状态', '', '申请时间：'],
      tableData: [
        { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
#mydata {
  .p10();
  height: 600px;
  .left {
    width: 20%;
    height: 100%;
    .ib();
    // background-color: black;
    .con {
      .box-check();
      height: 100%;
    }
  }
  .right {
    width: 78%;
    height: 100%;
    .fr();
    .ib();
    .con {
      .box-check();
      height: 100%;
    }
  }
}
</style>
