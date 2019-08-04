<template>
  <div id="myLog"
       class="wd">
    <InputList :title="title"
               :process="typeData"
               :show="false"
               @sendMsg="sendMsg">
    </InputList>
    <div class="table p10">
      <el-table :data="tableData"
                border
                style="width: 100%">
        <el-table-column prop="username"
                         label="用户名称"
                         align='center'>
        </el-table-column>
        <el-table-column prop="userUnit"
                         label="用户所属单位"
                         align='center'>
        </el-table-column>
        <el-table-column prop="serName"
                         label="服务名称"
                         align='center'>
        </el-table-column>
        <el-table-column prop="serType"
                         label="服务类型"
                         align='center'
                         :formatter="formatter">
        </el-table-column>
        <el-table-column prop="interviewTime"
                         label="访问时间"
                         align='center'>
        </el-table-column>
        <el-table-column prop="duration"
                         label="访问时长"
                         align='center'>
        </el-table-column>
        <el-table-column prop="ip"
                         label="IP"
                         align='center'>
        </el-table-column>
        <el-table-column prop="processResult"
                         label="处理结果"
                         align='center'>
        </el-table-column>
      </el-table>
    </div>
    <!-- //  分页 -->
    <div class="page">
      <el-pagination background
                     layout="prev, pager, next"
                     :total="total"
                     :page-size="pageSize"
                     @current-change="changeSize">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import InputList from '../components/inputlist'
import { getMyLogData } from '@api/admin/myLog.js'
export default {
  name: 'myLog',
  components: {
    InputList
  },
  data () {
    return {
      title: ['服务名称：', '服务类型：', '', '访问时间：'],
      typeData: [
        { id: '', name: '--请选择--' },
        { id: '0', name: 'CSW' },
        { id: '1', name: 'GPServer' },
        { id: '2', name: 'MAPServer' },
        { id: '3', name: 'WCS' },
        { id: '4', name: 'WFS-G' },
        { id: '5', name: 'WMTS' }
      ],
      tableData: [],
      total: 7,
      pageSize: 3,
      serName: '',
      serType: '',
      startTime: '',
      endTime: ''
    }
  },
  mounted () {
    this.getTableData()
  },
  methods: {
    //  获取表格数据
    getTableData: async function () {
      let res = await getMyLogData({ pageNum: 1, pageSize: this.pageSize, serName: this.serName, serType: this.serType, startTime: this.startTime, endTime: this.endTime })
      console.log(res)
      this.tableData = res.data.list
      this.total = res.data.total
    },
    //  点击分页
    changeSize: async function (page) {
      console.log(page)
      let res = await getMyLogData({ pageNum: 1, pageSize: this.pageSize, serName: this.serName, serType: this.serType, startTime: this.startTime, endTime: this.endTime })
      console.log(res)
      this.tableData = res.data.list
    },
    //  点击搜索按钮接收子组件传递过来的值
    sendMsg: async function (msg) {
      console.log(msg)
      this.serName = msg.unit || ''
      this.serType = msg.process || ''
      this.startTime = msg.starTime || ''
      this.endTime = msg.endTime || ''
      let res = await getMyLogData({ pageNum: 1, pageSize: this.pageSize, serName: this.serName, serType: this.serType, startTime: this.startTime, endTime: this.endTime })
      console.log(res)
      this.tableData = res.data.list
      this.total = res.data.total
    },
    formatter (row, column) {
      if (row.serType === '0') {
        return 'CSW'
      } else if (row.serType === '1') {
        return 'GPServer'
      } else if (row.serType === '2') {
        return 'MAPServer'
      } else if (row.serType === '3') {
        return 'WCS'
      } else if (row.serType === '4') {
        return 'WFS-G'
      } else if (row.serType === '5') {
        return 'WMTS'
      }
    }
  }
}
</script>
<style lang="less" scoped>
</style>
