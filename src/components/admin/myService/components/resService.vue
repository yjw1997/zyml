<template>
  <div id="resService">
    <div id="resService-head">
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
                     style="width:150px">
            <el-option value=""
                       label="全部"></el-option>
            <el-option value="0"
                       label="已通过"></el-option>
            <el-option value="1"
                       label="未通过"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="服务状态：">
          <el-select v-model="formInline.service"
                     size="small"
                     style="width:150px"
                     placeholder="全部">
            <el-option value=""
                       label="全部"></el-option>
            <el-option value="0"
                       label="运行"></el-option>
            <el-option value="1"
                       label="停止"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="fr">
          <el-button type="primary"
                     @click="resService">服务注册</el-button>
        </el-form-item>
        <el-form-item class="fr">
          <el-button type="primary"
                     @click="deleteList">删除服务</el-button>
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
        <el-table-column prop="id"
                         label="编号"
                         align='center'>
        </el-table-column>
        <el-table-column prop="serName"
                         label="服务名称"
                         align='center'
                         width="150">
        </el-table-column>
        <el-table-column prop="alias"
                         label="服务别名"
                         align='center'
                         width="150">
        </el-table-column>
        <el-table-column prop="serType"
                         label="服务类型"
                         align='center'
                         width="150">
        </el-table-column>
        <el-table-column prop="registerDate"
                         label="注册时间"
                         align='center'
                         width="200">
        </el-table-column>
        <el-table-column prop="updateDate"
                         label="更新时间"
                         align='center'
                         width="200">
        </el-table-column>
        <el-table-column prop="runTimeStatus"
                         label="服务状态"
                         align='center'>
        </el-table-column>
        <el-table-column prop="approvalStatus"
                         label="审批状态"
                         align='center'>
        </el-table-column>
        <el-table-column label="运行/停止"
                         align='center'>
          <template slot-scope="scope">
            <el-button type="success"
                       size="mini"
                       v-if="scope.row.runTimeStatus === '停止'"
                       @click="showOperating(scope.row,0)">运行</el-button>
            <el-button type="info"
                       size="mini"
                       v-if="scope.row.runTimeStatus === '运行'"
                       @click="showOperating(scope.row,1)">停止</el-button>
          </template>

        </el-table-column>
        <el-table-column prop="serUrl"
                         label="服务地址"
                         align='center'
                         width="150">
        </el-table-column>
        <el-table-column fixed="right"
                         label="操作"
                         width="370"
                         align='center'>
          <template slot-scope="scope">
            <el-button size="small"
                       type="primary"
                       plain
                       @click="preview(scope.row.id)">预览</el-button>
            <el-button size="small"
                       type="warning"
                       plain
                       @click="Feedback(scope.row.id)">反馈</el-button>
            <el-button size="small"
                       type="info"
                       plain
                       @click="write(scope.row.id)">修改</el-button>
            <el-button size="small"
                       type="success"
                       plain
                       @click="viewUser(scope.row.id)">用户</el-button>
            <el-button size="small"
                       type="danger"
                       plain
                       @click="deleteOne(scope.row.id)">删除</el-button>
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
    <!-- // 点击服务注册按钮 -->
    <el-dialog title="服务注册"
               :visible.sync="dialogVisible"
               width="1100px"
               center>
      <el-steps :active="active"
                finish-status="success">
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3"></el-step>
      </el-steps>
      <div v-show="active == 0">
        1、填写服务地址
        <el-input placeholder="请填写服务地址url"
                  v-model="serviceUrl">
          <i slot="prefix"
             class="el-input__icon el-icon-link"></i>
        </el-input>
      </div>
      <div v-show="active == 1">
        2、填写元数据
        <MetaData :form="form"
                  :tableData="tableData"
                  :tableData2="tableData2"
                  :tableData3="tableData3"></MetaData>
      </div>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="active--"
                   v-if="active >0">上一步</el-button>
        <el-button type="primary"
                   @click="active++"
                   v-if="active !== 1">下一步</el-button>
        <el-button type="primary"
                   @click="resServiceSave"
                   v-if="active === 1">完成</el-button>
      </span>
    </el-dialog>
    <!-- //  点击服务预览按钮 -->
    <el-dialog title="服务详情预览"
               center
               :visible.sync="ServicePreview"
               width="800px">
      <ServiceInfo :formnoPass='formnoPass'
                   :tableData='tableData4'></ServiceInfo>
      <span slot="footer"
            class="dialog-footer">
        <el-button type="primary"
                   @click="ServicePreview =false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- //  点击服务反馈按钮 -->
    <el-dialog title="我注册的服务-部件-反馈信息"
               center
               :visible.sync="serFeedback"
               width="800px">
      <el-table :data="serFeedbackTableData"
                border
                style="width: 100%">
        <el-table-column prop="fbName"
                         label="反馈人姓名"
                         align='center'>
        </el-table-column>
        <el-table-column prop="fbUnit"
                         label="反馈人单位"
                         align='center'>
        </el-table-column>
        <el-table-column prop="fbTel"
                         label="反馈人联系方式"
                         align='center'>
        </el-table-column>
        <el-table-column prop="fbTime"
                         label="反馈时间"
                         align='center'>
        </el-table-column>
        <el-table-column prop="fbContent"
                         label="反馈内容"
                         align='center'>
        </el-table-column>
      </el-table>
      <span slot="footer"
            class="dialog-footer">
        <el-button type="primary"
                   @click="serFeedback =false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- //  点击用户按钮 -->
    <el-dialog title="用户详情"
               center
               :visible.sync="viewUserS"
               width="1000px">
      <InputList :title="titles"
                 :show="false"
                 :process="Status"
                 @sendMsg="sendMsg"></InputList>
      <el-table :data="viewUserData"
                border
                style="width: 100%">
        <el-table-column prop="UserName"
                         label="用户名称"
                         align='center'>
        </el-table-column>
        <el-table-column prop="UserUnit"
                         label="用户单位"
                         align='center'>
        </el-table-column>
        <el-table-column prop="appTime"
                         label="申请时间"
                         align='center'>
        </el-table-column>
        <el-table-column prop="appStatus"
                         label="申请状态"
                         align='center'>
          <template slot-scope="scope">
            <div v-if="scope.row.appStatus === '0'">已通过</div>
            <div v-if="scope.row.appStatus === '1'">未通过</div>
          </template>
        </el-table-column>
      </el-table>
      <!-- //  分页 -->
      <div class="page">
        <el-pagination background
                       layout="prev, pager, next"
                       :total="viewUserTotal"
                       :page-size="viewUserpageSize"
                       @current-change="UserChangePage">
        </el-pagination>
      </div>
    </el-dialog>
    <!-- //  点击修改按钮 -->
    <el-dialog title="修改元数据信息"
               center
               :visible.sync="writeShow"
               width="1000px">
      <MetaData :form="form2"
                :tableData="tableData5"
                :tableData2="tableData6"
                :tableData3="tableData7"
                :show1="true"
                :show2="true"></MetaData>
      <span slot="footer"
            class="dialog-footer">
        <el-button type="primary"
                   @click="saveMetaData">确 定</el-button>
        <el-button type="default"
                   @click="writeShow = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { getTableData, ServicePreview, getSerFeedbackTableData, getViewUserData, getshowOperating, addResService } from '@api/admin/myService'
import ServiceInfo from '@admin/components/serviceInfo'
import { async } from 'q'
import InputList from '../../components/inputlist'
import MetaData from '@admin/components/MetaData'
export default {
  name: 'resService',
  components: {
    ServiceInfo, InputList, MetaData
  },
  data () {
    return {
      formInline: {
        approval: '',
        service: '',
        change: '0'
      },
      pageNum: 1,
      form: {
        "irmDataDescription": [
          {
            "description": "",
            "id": "",
            "resolution": "",
            "spatialReferSystem": "",
            "thematicType": "",
            "type": ""
          }
        ],
        "irmFeatureType": [
          {
            "alias": "",
            "cloumn": "",
            "coordinateSystem": "",
            "format": "",
            "id": "",
            "keyword": "",
            "name": "",
            "otherCoordinate": "",
            "summary": ""
          }
        ],
        "irmLayerInfo": [
          {
            "alias": "",
            "id": "",
            "layerName": "",
            "state": "",
            "style": ""
          }
        ],
        "irmLayerMeta": [
          {
            "attField": "",
            "attField2": "",
            "className": "",
            "createDate": "",
            "dataFileName": "",
            "description": "",
            "elemNum": "",
            "format": "",
            "formatVersion": "",
            "id": "",
            "layerName": "",
            "level": "",
            "mdCharacter": "",
            "mdLanguage": "",
            "productDate": "",
            "productName": "",
            "referenceSystem": "",
            "sort": "",
            "type": "",
            "unit": "",
            "updateDate": "",
            "version": ""
          }
        ],
        "irmParamDescription": [
          {
            "id": "",
            "isNeed": "",
            "isRepeat": "",
            "paramDesc": "",
            "paramDirection": "",
            "paramName": "",
            "range": ""
          }
        ],
        "irmScalarSupport": [
          {
            "comparisonOpera": "",
            "countOpera": "",
            "id": "",
            "logicalOpera": ""
          }
        ],
        "irmSerOperation": [
          {
            "description": "",
            "distributedPlatform": "",
            "id": "",
            "operaName": "",
            "url": ""
          }
        ],
        "irmSerUseLimit": [
          {
            "id": "",
            "use": "",
            "visit": ""
          }
        ],
        "irmServiceInfo": [
          {
            "address": "",
            "alias": "",
            "applyNum": 0,
            "bqdw": "",
            "bqdwzz": "",
            "city": "",
            "country": "",
            "dataPermit": 0,
            "dataScopes": "",
            "dataSource": "",
            "dataType": "",
            "delete": 0,
            "description": "",
            "email": "",
            "fax": "",
            "fgfw": "",
            "hits": 0,
            "id": "",
            "keyword": "",
            "local": "",
            "operation": "",
            "oriServiceUrl": "",
            "phone": "",
            "postalCode": "",
            "principal": "",
            "province": "",
            "pubDate": "",
            "pubUnit": "",
            "runTimeStatus": 0,
            "scdw": "",
            "serName": "",
            "serType": " ",
            "serUrl": "",
            "summary": "",
            "thumbnail": "",
            "unitUrl": "",
            "updateDate": "",
            "userCode": "",
            "version": "",
            "xsx": ""
          }
        ],
        "irmServiceInstance": [
          {
            "description": "",
            "id": "",
            "url": ""
          }
        ],
        "irmServiceRange": [
          {
            "coordinate": "",
            "id": "",
            "maxX": "",
            "maxY": "",
            "minX": "",
            "minY": ""
          }
        ],
        "irmSliceInfo": [
          {
            "cutCoordinate": "",
            "format": "",
            "id": "",
            "identity": ""
          }
        ],
        "irmSpaceSupport": [
          {
            "geometryType": "",
            "id": "",
            "spaceOperator": ""
          }
        ],
        "irmTileInfo": [
          {
            "id": "",
            "leftCornerCoordinates": "",
            "level": "",
            "resolution": "",
            "scale": "",
            "tileColumnNum": 0,
            "tileHeight": "",
            "tileRowNum": 0,
            "tileWidth": ""
          }
        ]
      },
      tableData: [],
      pageSize: 3,
      total: 7,
      dialogVisible: false,
      active: 0,
      serviceUrl: '',
      tableData2: [],
      approval: '',
      service: '',
      selection: [],
      ServicePreview: false,
      formnoPass: {},
      tableData3: [],
      tableData4: [],
      serFeedback: false,
      serFeedbackTableData: [],
      viewUserS: false,
      titles: ['用户：', '申请状态：', '', '申请时间：'],
      Status: [
        { 'id': '', 'name': '全部' },
        { 'id': '0', 'name': '已通过' },
        { 'id': '1', 'name': '未通过' }
      ],
      viewUserData: [],
      viewUserpageNum: 1,
      viewUserpageSize: 3,
      UserName: '',
      appTime: '',
      appStatus: '',
      startTime: '',
      endTime: '',
      viewUserTotal: 7,
      writeShow: false,
      form2: {},
      tableData5: [],
      tableData6: [],
      tableData7: []
    }
  },
  mounted: async function () {
    this.getTable()
  },
  //  监听审批状态服务状态变换改变tabledata
  watch: {
    //  点击选项卡筛选字段
    formInline: {
      handler: async function (newValue, oldValue) {
        let pageSize = this.pageSize
        this.approval = newValue.approval
        this.service = newValue.service
        let res = await getTableData({ page: 1, pageSize, approval: newValue.approval, service: newValue.service, flag: 0 })
        console.log('我是反回的结果', res)
        this.tableData = res.data.list
        this.total = res.data.total
      },
      deep: true
    }
  },
  methods: {
    //  获取表格数据
    getTable: async function () {
      let res = await getTableData({ pageNum: this.pageNum, pageSize: this.pageSize })
      console.log(res)
      this.tableData = res.data.list
      this.total = res.data.total
      this.pageNum = res.data.pageNum
      this.pageSize = res.data.pageSize
    },
    //  切换我申请的服务和我注册的服务
    changeSerVice (value) {
      if (value === '0') {
        this.$router.push({ path: '/admin/myService/resService' })
      } else if (value === '1') {
        this.$router.push({ path: '/admin/myService/appService' })
      }
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
    //  自定义渲染字段
    formatter2 (row, column) {
      // if (row.serStatus === '0') {
      //   return '运行'
      // } else if (row.serStatus === '1') {
      //   return '停止'
      // }
    },
    //  点击分页按钮
    changeSize: async function (page) {
      console.log(page)
      this.pageNum = page
      let res = await getTableData({ pageNum: this.pageNum, pageSize: this.pageSize })
      console.log(res)
      this.tableData = res.data.list
      this.total = res.data.total
      this.pageNum = res.data.pageNum
      this.pageSize = res.data.pageSize
    },
    //  点击复选框按钮
    deleteData (selection, row) {
      this.selection = selection
    },
    //  点击删除服务按钮
    deleteList: async function () {
      //  提取数组的id
      if (this.selection.length === 0) return false

      let arr = this.selection.map((value, key, arr) => {
        return value.serId
      })
      console.log(arr)
      // let res = await deleteTableData()
      // console.log(res)
      this.$message({
        message: '删除成功',
        type: 'success'
      })
      this.getTable()
    },
    //  点击服务注册按钮
    resService: async function () {
      this.dialogVisible = true
      this.active = 0
      //  获取表格信息

    },
    //服务注册 --  点击保存按钮
    resServiceSave: async function () {
      console.log(this.form)
      // this.active = 0

      // this.dialogVisible = false
      let data = await addResService(this.form)

      console.log(data)
      // this.$message({
      //   message: '注册成功',
      //   type: 'success'
      // });
    },
    //  ----------------------------点击表格按钮事件-----------------------------------
    //  点击运行/停止
    showOperating: async function (data, status) {
      console.log(data)
      await getshowOperating({ serviceId: data.id, operation: status })
      this.getTable()
    },
    //  预览
    preview: async function (id) {
      this.ServicePreview = true
      console.log(id)
      let res = await ServicePreview({ serviceId: id })
      this.formnoPass = res.data[0]
    },
    //  反馈
    Feedback: async function (id) {
      this.serFeedback = true
      console.log(id)
      let res = await getSerFeedbackTableData({ id })
      console.log(res)
      this.serFeedbackTableData = res.data[0].data
      //  获取表格数据

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
    //  修改
    write: async function (id) {
      this.writeShow = true
    },
    //  修改---点击保存
    saveMetaData: async function () {
      this.writeShow = false
    },
    //  用户
    viewUser: async function (id) {
      //  获取表格数据
      let res = await getViewUserData({ pageNum: this.viewUserpageNum, pageSize: this.viewUserpageSize, UserName: this.UserName, startTime: this.startTime, endTime: this.endTime, appStatus: this.appStatus })
      this.viewUserS = true
      console.log('我是用户数据', res)
      this.viewUserData = res.data.list
      this.viewUserTotal = res.data.total
      // this.viewUserS = true
      // console.log(id)
    },
    //  用户---点击搜索
    sendMsg: async function (msg) {
      console.log(msg)
      this.UserName = msg.unit
      this.appStatus = msg.process
      this.startTime = msg.starTime || ''
      this.endTime = msg.endTime || ''
      let res = await getViewUserData({ pageNum: 1, pageSize: this.viewUserpageSize, UserName: this.UserName, startTime: this.startTime, endTime: this.endTime, appStatus: this.appStatus })
      console.log(res)
      this.viewUserData = res.data.list
      this.total = res.data.total
    },
    //  用户---点击分页
    UserChangePage: async function (page) {
      console.log(page)
      this.page = page
      let res = await getViewUserData({ pageNum: this.viewUserpageNum, pageSize: this.viewUserpageSize, UserName: this.UserName, startTime: this.startTime, endTime: this.endTime, appStatus: this.appStatus })
      console.log(res)
      this.viewUserData = res.data.list
    }
  }
}
</script>
<style lang="less" scoped>
#resService-head {
  padding: 10px;
}
// #resService {
//   display: inline-block;
// }
</style>
