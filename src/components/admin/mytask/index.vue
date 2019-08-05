<template>
  <div id="mytask">
    <InputList :title='inputTitle'
               :process='processData'
               :status="statusData"
               @sendMsg='sendMsg'></InputList>
    <div class="table p10">
      <el-table :data="tableData"
                border
                style="width: 100%">
        <el-table-column prop="id"
                         label="序号"
                         align='center'>
        </el-table-column>
        <el-table-column prop="taskCreator"
                         label="申请单位"
                         align='center'>
        </el-table-column>
        <el-table-column prop="taskStatus"
                         label="当前节点"
                         align='center'>
        </el-table-column>
        <el-table-column prop="taskName"
                         label="流程"
                         align='center'
                         :formatter="formatter">
        </el-table-column>
        <el-table-column prop="checkerStatus"
                         label="状态"
                         align='center'>
          <template slot-scope="scope">
            <div style="color:skyblue;font-weight:600"
                 v-if="scope.row.checkerStatus==='0'">通过</div>
            <div style="color:red;font-weight:600"
                 v-if="scope.row.checkerStatus==='1'">未通过</div>
            <div style="color:green;font-weight:600"
                 v-if="scope.row.checkerStatus==='2'">代办</div>
          </template>
        </el-table-column>
        <el-table-column prop="remark"
                         label="备注"
                         align='center'>
          <template slot-scope="scope">
            <div v-if="scope.row.checkerStatus==='0'"
                 style="color:green">审批通过</div>
            <div v-if="scope.row.checkerStatus==='1'"
                 style="color:red">数据有误</div>
          </template>
        </el-table-column>
        <el-table-column prop="taskCreatorTime"
                         label="审批时间"
                         align='center'>
        </el-table-column>
        <el-table-column prop="show"
                         label="详情"
                         align='center'>
          <template slot-scope="scope">
            <!-- //  通过 -->
            <div v-if="scope.row.checkerStatus==='0'">
              <el-button type="primary"
                         @click="passShowData = true;showTime=scope.row.id"
                         size="small"
                         plain>查看</el-button>
            </div>
            <!-- //  未通过 -->
            <div v-if="scope.row.checkerStatus==='1'">
              <el-button type="primary"
                         @click="noPassShowData = true;showTime=scope.row.id"
                         size="small"
                         plain>查看</el-button>
            </div>
            <!-- //  代办 -->
            <div v-if="scope.row.checkerStatus==='2'">
              <el-button type="primary"
                         size="small"
                         @click="approvalData = true;showTime=scope.row.id"
                         plain>审批</el-button>
            </div>
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
    <!-- //   ----------------------------表格按钮点击事件 -------------------->
    <!-- //  审批通过 -->
    <el-dialog title="服务申请详情"
               center
               :visible.sync="passShowData"
               width="800px">
      <el-form ref="form"
               :model="form"
               label-width="150px">
        <el-form-item label="申请单位：">
          <el-input v-model="form.appUnit"
                    disabled></el-input>
        </el-form-item>
        <el-form-item label="经办人：">
          <el-input v-model="form.manager"
                    disabled></el-input>
        </el-form-item>
        <el-form-item label="应用系统名称：">
          <el-input v-model="form.name"
                    disabled></el-input>
        </el-form-item>
        <el-form-item label="应用系统描述：">
          <el-input v-model="form.systemName"
                    disabled></el-input>
        </el-form-item>
        <el-form-item label="需求描述：">
          <el-input v-model="form.requirement"
                    disabled></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer"
            class="dialog-footer">
        <el-button type="primary"
                   @click="passShowData = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- //  审批未通过 -->
    <el-dialog title="服务注册详情"
               center
               :visible.sync="noPassShowData"
               width="800px">
      <ServiceInfo :formnoPass='formnoPass'
                   :tableData='tableData'></ServiceInfo>
      <span slot="footer"
            class="dialog-footer">
        <el-button type="primary"
                   @click="noPassShowData =false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- //  代办任务 -->
    <el-dialog title="申请表单"
               center
               :visible.sync="approvalData"
               width="800px">
      <ServiceInfo :formnoPass='formnoPass'
                   :tableData='tableData'></ServiceInfo>
      <el-tabs type="card"
               class="tc"
               v-model="activeName">
        <el-tab-pane label="历史审批意见"
                     name="first">
          <el-table :data="tableData2"
                    stripe
                    border
                    style="width: 100%">
            <el-table-column prop="name"
                             label="审批人">
            </el-table-column>
            <el-table-column prop="result"
                             label="审批结果">
            </el-table-column>
            <el-table-column prop="time"
                             label="审批时间">
            </el-table-column>
            <el-table-column prop="opinion"
                             label="审批意见">
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
      <el-tabs type="card"
               class="tc"
               v-model="activeName">
        <el-tab-pane label="填写审批意见"
                     name="first">
          审批建议：
          <el-input type="textarea"
                    :rows="4"
                    placeholder="请输入内容"
                    v-model="ApprovalComments">
          </el-input>
        </el-tab-pane>
      </el-tabs>
      <span slot="footer"
            class="dialog-footer">
        <el-button type="primary"
                   @click="approvalData =false">确 定</el-button>
        <el-button type="text"
                   @click="approvalData =false">取 消</el-button>
      </span>
    </el-dialog>

  </div>
</template>
<script>
import InputList from '@admin/components/inputList'
import { getPersonInfo, getPassShowData, getNoPassShowData } from '@api/admin/myTask.js'
import ServiceInfo from '@admin/components/serviceInfo'
export default {
  name: 'mytask',
  components: {
    InputList, ServiceInfo
  },
  data () {
    return {
      form: {
        appUnit: '',
        manager: '',
        name: '',
        systemName: '',
        requirement: ''
      },
      formnoPass: {},
      inputTitle: ['申请单位：', '流程：', '状态：', '审批时间：'],
      processData: [
        { id: '', name: '所有流程' },
        { id: '0', name: '账号注册' },
        { id: '1', name: '数据目录新建' },
        { id: '2', name: '空间数据上传' },
        { id: '3', name: '数据申请' },
        { id: '4', name: '服务注册' }
      ],
      statusData: [
        { id: '', name: '全部' },
        { id: '0', name: '通过' },
        { id: '1', name: '未通过' },
        { id: '2', name: '代办' }
      ],
      tableData: [],
      tableData2: [],
      pageSize: 3,
      total: 7,
      taskCreator: '',
      taskName: '',
      checkerStatus: '',
      startTime: '',
      endTime: '',
      approvalData: false,
      noPassShowData: false,
      passShowData: false,
      showTime: '',
      activeName: 'first',
      ApprovalComments: ''
    }
  },
  watch: {
    //  监听按钮点击事件，判断点击按钮接收对应的数据
    showTime: async function (newVal, oldVal) {
      //  监听<!-- //  代办 -->
      if (this.approvalData === true) {
        let res = await getNoPassShowData({ id: this.showTime })
        console.log(res)
        this.formnoPass = res.data[0]
      } else if (this.noPassShowData === true) {
        //  监听未通过
        let res = await getNoPassShowData({ id: this.showTime })
        console.log(res)
        this.formnoPass = res.data[0]
      } else if (this.passShowData === true) {
        //  监听已通过
        let res = await getPassShowData({ id: this.showTime })
        console.log(res)
        this.form = res.data[0]
      }
    }
  },
  mounted: async function () {
    this.getMytaskData()
  },
  methods: {
    //  获取表格数据
    getMytaskData: async function () {
      let res = await getPersonInfo({ pageNum: 1, pageSize: this.pageSize, taskCreator: this.taskCreator, taskName: this.taskName, checkerStatus: this.checkerStatus, startTime: this.startTime, endTime: this.endTime })
      console.log(res)
      this.tableData = res.data.list
      this.total = res.data.total
    },
    //  点击搜索按钮接收子组件传递过来的值
    sendMsg: async function (msg) {
      console.log(msg)
      this.taskCreator = msg.unit
      this.taskName = msg.process
      this.checkerStatus = msg.status
      this.startTime = msg.starTime || ''
      this.endTime = msg.endTime || ''
      let res = await getPersonInfo({ pageNum: 1, pageSize: this.pageSize, taskCreator: this.taskCreator, taskName: this.taskName, checkerStatus: this.checkerStatus, startTime: this.startTime, endTime: this.endTime })
      console.log(res)
      this.tableData = res.data.list
      this.total = res.data.total
    },
    //  点击分页
    changeSize: async function (page) {
      console.log(page)
      let res = await getPersonInfo({ pageNum: 1, pageSize: this.pageSize, taskCreator: this.taskCreator, taskName: this.taskName, checkerStatus: this.checkerStatus, startTime: this.startTime, endTime: this.endTime })
      console.log(res)
      this.tableData = res.data.list
    },
    //  表单-- 流程状态返回字段转换
    formatter (row, column) {
      if (row.taskName === '0') {
        return '账号注册'
      } else if (row.taskName === '1') {
        return '数据目录新建'
      } else if (row.taskName === '2') {
        return '空间数据上传'
      } else if (row.taskName === '3') {
        return '数据申请'
      } else if (row.taskName === '4') {
        return '服务注册'
      }
    }

  }
}
</script>
<style lang="less" scoped>
#mytask {
  width: 100%;
  height: 100%;
}
</style>
