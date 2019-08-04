<template>
  <div id="appService">
    <div id="appService-head">
      <el-form :inline="true"
               :model="formInline"
               class="demo-form-inline">
        <el-form-item label="服务状态：">
          <el-select v-model="formInline.change"
                     size="small"
                     style="width:150px"
                     placeholder="我注册的服务"
                     @change="changeSerVice(formInline.change)">
            <el-option value="0"
                       label="我注册的服务"></el-option>
            <el-option value="1"
                       label="我申请的服务"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="审批状态：">
          <el-select v-model="formInline.approval"
                     size="small"
                     style="width:150px"
                     placeholder="全部">
            <el-option value=""
                       label="全部"></el-option>
            <el-option value="0"
                       label="已通过"></el-option>
            <el-option value="1"
                       label="未通过"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="fr">
          <el-button type="primary"
                     @click="deleteList">退订服务</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="table p10">
      <el-table :data="tableData"
                border
                style="width: 100%"
                @select="deleteData">
        <el-table-column type="selection"
                         width="55"
                         align='center'
                         fixed="left">
        </el-table-column>
        <el-table-column prop="serId"
                         label="编号"
                         width="55"
                         align='center'>
        </el-table-column>
        <el-table-column prop="serName"
                         label="服务名称"
                         width="177"
                         align='center'>
        </el-table-column>
        <el-table-column prop="serByName"
                         label="服务别名"
                         width="170"
                         align='center'>
        </el-table-column>
        <el-table-column prop="serAddress"
                         label="服务地址"
                         width="225"
                         align='center'>
        </el-table-column>
        <el-table-column prop="publishUnit"
                         label="服务发布单位"
                         width="150"
                         align='center'>
        </el-table-column>
        <el-table-column prop="updateTime"
                         label="申请时间"
                         width="175"
                         align='center'>
        </el-table-column>
        <el-table-column prop="approvalStatus"
                         label="审批状态"
                         width="85"
                         align='center'
                         :formatter="formatter">
        </el-table-column>
        <el-table-column fixed="right"
                         label="操作"
                         width="300">
          <template slot-scope="scope">
            <el-button @click.native.prevent="deleteRow(scope.$index, tableData)"
                       type="primary"
                       size="small">
              预览
            </el-button>
            <el-button @click.native.prevent="deleteRow(scope.$index, tableData)"
                       type="info"
                       size="small">
              元数据
            </el-button>
            <el-button @click.native.prevent="deleteRow(scope.$index, tableData)"
                       type="success"
                       size="small">
              评论
            </el-button>
            <el-button @click.native.prevent="deleteRow(scope.$index, tableData)"
                       type="danger"
                       size="small">
              退订
            </el-button>
          </template>
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
import { getTableData } from '@api/admin/myService'
export default {
  name: 'appService',
  data () {
    return {
      formInline: {
        approval: '0',
        service: '0',
        change: '1'
      },
      form: {

      },
      tableData: [],
      pageSize: 3,
      total: 7,
      approval: '',
      service: '',
      selection: []
    }
  },
  mounted () {
    this.getTable()
  },
  //  监听审批状态服务状态变换改变tabledata
  watch: {
    formInline: {
      handler: async function (newValue, oldValue) {
        let pageSize = this.pageSize
        this.approval = newValue.approval
        this.service = newValue.service
        let res = await getTableData({ page: 1, pageSize, approval: newValue.approval, service: newValue.service, flag: 1 })
        this.tableData = res.data.list
        this.total = res.data.total
      },
      deep: true
    }

  },
  methods: {
    //  获取表格数据
    getTable: async function () {
      let pageSize = this.pageSize
      let res = await getTableData({ page: 1, pageSize, approval: this.approval, service: this.service, flag: 1 })
      console.log(res)
      this.tableData = res.data.list
      this.total = res.data.total
    },
    //  切换我申请的服务和我注册的服务
    changeSerVice (value) {
      console.log('这里是测试', value)
      if (value === '0') {
        this.$router.push({ path: '/admin/myService/resService' })
      } else if (value === '1') {
        this.$router.push({ path: '/admin/myService/appService' })
      }
    },
    //  点击分页按钮
    changeSize: async function (page) {
      console.log(page)
      let pageSize = this.pageSize
      let res = await getTableData({ page: 1, pageSize, approval: this.approval, service: this.service, flag: 1 })
      console.log(res)
      this.tableData = res.data.list
    },
    //  自定义渲染字段
    formatter (row, column) {
      if (row.approvalStatus === '') {
        return '未审批'
      } else if (row.approvalStatus === '0') {
        return '已通过'
      } else if (row.approvalStatus === '1') {
        return '未通过'
      }
    },
    //  点击复选框按钮
    deleteData (selection, row) {
      this.selection = selection
    },
    //  点击删除按钮
    deleteList: async function () {
      //  提取数组的id
      // console.log(this.selection)
      if (this.selection.length === 0) return false

      let arr = this.selection.map((value, key, arr) => {
        return value.serId
      })
      console.log(arr)
      // let res = await deleteTableData()
      // console.log(res)
      this.$message({
        message: '退订服务成功',
        type: 'success'
      })
      this.getTable()
    }
  }
}
</script>
<style lang="less" scoped>
#appService-head {
  padding: 10px;
}
</style>
