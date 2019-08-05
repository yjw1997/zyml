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
            <el-button @click.native.prevent="preview(scope.row.serId)"
                       type="primary"
                       size="small">
              预览
            </el-button>
            <el-button @click.native.prevent="writeMetaData(scope.row.serId)"
                       type="info"
                       size="small">
              元数据
            </el-button>
            <el-button @click.native.prevent="comment(scope.row.serId)"
                       type="success"
                       size="small">
              评论
            </el-button>
            <el-button @click.native.prevent="deleteOne(scope.row.serId)"
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
    <!-- //  点击服务预览按钮 -->
    <el-dialog title="服务详情预览"
               center
               :visible.sync="ServicePreview"
               width="800px">
      <ServiceInfo :formnoPass='formnoPass'
                   :show="false"
                   :tableData='[]'></ServiceInfo>
      <span slot="footer"
            class="dialog-footer">
        <el-button type="primary"
                   @click="ServicePreview =false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- //  点击元数据按钮 -->
    <el-dialog title="修改元数据信息"
               center
               :visible.sync="writeShow"
               width="1000px">
      <MetaData :form="form2"
                :tableData="tableData5"
                :tableData2="tableData6"
                :tableData3="tableData7"
                :show1="true"></MetaData>
      <span slot="footer"
            class="dialog-footer">
        <el-button type="primary"
                   @click="writeMetaDataSave">保 存</el-button>
        <el-button type="default"
                   @click="writeShow =false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- //  点击评论按钮 -->
    <el-dialog title="评论"
               center
               :visible.sync="commentShow"
               width="600px">
      <el-input type="textarea"
                v-model="commentContent"></el-input>
      <el-checkbox v-model="checked">匿名评论</el-checkbox>
      <span slot="footer"
            class="dialog-footer">
        <el-button type="primary"
                   @click="commentSave">保 存</el-button>
        <el-button type="default"
                   @click="commentShow =false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { getTableData, ServicePreview } from '@api/admin/myService'
import ServiceInfo from '@admin/components/serviceInfo'
import MetaData from '@admin/components/MetaData'
import { async } from 'q'
export default {
  name: 'appService',
  components: {
    ServiceInfo, MetaData
  },
  data () {
    return {
      formInline: {
        approval: '0',
        service: '0',
        change: '1'
      },
      form: {},
      tableData: [],
      pageSize: 3,
      total: 7,
      approval: '',
      service: '',
      selection: [],
      ServicePreview: false,
      formnoPass: {},
      writeShow: false,
      form2: {},
      tableData5: [],
      tableData6: [],
      tableData7: [],
      commentShow: false,
      iscomment: false,
      commentContent: '',
      checked: false
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
    },
    //  ----------------------------点击表格按钮事件----------------------
    //  预览
    preview: async function (id) {
      this.ServicePreview = true
      console.log(id)
      let res = await ServicePreview({ id })
      console.log(res)
      this.formnoPass = res.data[0]
    },
    //  删除
    deleteOne: async function (id) {
      console.log(id)
      this.selection = []
      this.selection.push(id)
      this.$message({
        message: '删除成功',
        type: 'success'
      })
      this.selection = []
      this.getTable()
    },
    //  元数据
    writeMetaData: async function (id) {
      console.log(id)
      this.writeShow = true
    },
    //  元数据--- 点击保存
    writeMetaDataSave: async function () {
      console.log(this.form2)
    },
    // 评论
    comment: async function (id) {
      if (this.iscomment) return false
      console.log(id)
      this.commentShow = true
    },
    //  评论---点击保存按钮
    commentSave: async function () {
      console.log(this.commentContent, this.iscomment, this.checked)//  评论内容 是否已经评论过  是否匿名评论
      this.commentShow = false
    }
  }
}
</script>
<style lang="less" scoped>
#appService-head {
  padding: 10px;
}
</style>
