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
                     @click="dialogVisible = true;active = 0">服务注册</el-button>
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
        <el-table-column prop="serId"
                         label="编号"
                         align='center'>
        </el-table-column>
        <el-table-column prop="serName"
                         label="服务名称"
                         align='center'
                         width="150">
        </el-table-column>
        <el-table-column prop="serByName"
                         label="服务别名"
                         align='center'
                         width="150">
        </el-table-column>
        <el-table-column prop="serType"
                         label="服务类型"
                         align='center'
                         width="150">
        </el-table-column>
        <el-table-column prop="serRegisterTime"
                         label="注册时间"
                         align='center'
                         width="200">
        </el-table-column>
        <el-table-column prop="serUpdateTime"
                         label="更新时间"
                         align='center'
                         width="200">
        </el-table-column>
        <el-table-column prop="serStatus"
                         label="服务状态"
                         align='center'
                         :formatter="formatter2">
        </el-table-column>
        <el-table-column prop="approvalStatus"
                         label="审批状态"
                         align='center'
                         :formatter="formatter">
        </el-table-column>
        <el-table-column label="反注册/恢复"
                         align='center'>
          <a>反注册</a>
        </el-table-column>
        <el-table-column prop="change1"
                         label="运行/停止"
                         align='center'>
        </el-table-column>
        <el-table-column prop="serAddress"
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
                       @click="preview(scope.row.serId)">预览</el-button>
            <el-button size="small"
                       type="warning"
                       plain
                       @click="Feedback(scope.row.serId)">反馈</el-button>
            <el-button size="small"
                       type="info"
                       plain
                       @click="handleDelete(scope.$index, scope.row)">修改</el-button>
            <el-button size="small"
                       type="success"
                       plain
                       @click="handleDelete(scope.$index, scope.row)">用户</el-button>
            <el-button size="small"
                       type="danger"
                       plain
                       @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
               width="800px"
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
        <el-tabs type="border-card">
          <el-tab-pane label="基本信息">
            <el-form ref="form"
                     :model="form"
                     inline
                     label-width="130px"
                     :rules="rules">
              <el-form-item label="数据服务类型："
                            prop="type">
                <el-select v-model="form.type"
                           placeholder="--请选择--"
                           style="width:200px">
                  <el-option label="ADDServer"
                             value="0"></el-option>
                  <el-option label="CSW"
                             value="1"></el-option>
                  <el-option label="GPServer"
                             value="2"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="发布日期：">
                <el-date-picker v-model="form.ReleaseDate"
                                style="width:200px;"
                                type="date"
                                range-separator="-"
                                value-format='yyyy-MM-dd'
                                placeholder="选择日期时间">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="服务类型版本：">
                <el-input v-model="form.version"></el-input>
              </el-form-item>
              <el-form-item label="发布单位："
                            prop="unit">
                <el-input v-model="form.unit"></el-input>
              </el-form-item>
              <el-form-item label="服务名："
                            prop="version">
                <el-input v-model="form.version"></el-input>
              </el-form-item>
              <el-form-item label="关键词："
                            prop="keywork">
                <el-input v-model="form.keywork"></el-input>
              </el-form-item>
              <el-form-item label="服务别名："
                            prop="alias">
                <el-input v-model="form.alias"></el-input>
              </el-form-item>
              <el-form-item label="上传缩略图："
                            prop="thumbnail">
                <el-upload class="upload-demo"
                           action="http://192.168.2.121:9088/upload"
                           :on-preview="handlePreview"
                           :on-remove="handleRemove"
                           :before-remove="beforeRemove"
                           multiple
                           :data="uploadata"
                           :limit="3"
                           :on-exceed="handleExceed"
                           :file-list="fileList">
                  <el-button size="small"
                             type="primary">点击上传</el-button>
                  <div slot="tip"
                       class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
              </el-form-item>
              <el-form-item label="摘要："
                            prop="Summary">
                <el-input v-model="form.Summary"
                          type="textarea"></el-input>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="发布单位信息">
            <el-form ref="form"
                     :model="form"
                     inline
                     label-width="130px"
                     :rules="rules">
              <el-form-item label="单位名称："
                            prop="unitName">
                <el-input v-model="form.unitName"></el-input>
              </el-form-item>
              <el-form-item label="城市：">
                <el-input v-model="form.city"></el-input>
              </el-form-item>
              <el-form-item label="单位地址：">
                <el-input v-model="form.unitAddress"></el-input>
              </el-form-item>
              <el-form-item label="详细地址：">
                <el-input v-model="form.detailAddress"></el-input>
              </el-form-item>
              <el-form-item label="联系人：">
                <el-input v-model="form.contact"></el-input>
              </el-form-item>
              <el-form-item label="邮编：">
                <el-input v-model="form.ZipCode"></el-input>
              </el-form-item>
              <el-form-item label="联系人单位：">
                <el-input v-model="form.ContactUnit"></el-input>
              </el-form-item>
              <el-form-item label="电话："
                            prop="phone">
                <el-input v-model="form.phone"></el-input>
              </el-form-item>
              <el-form-item label="国家：">
                <el-input v-model="form.counity"></el-input>
              </el-form-item>
              <el-form-item label="传真：">
                <el-input v-model="form.fax"></el-input>
              </el-form-item>
              <el-form-item label="省（直辖市）：">
                <el-input v-model="form.province"></el-input>
              </el-form-item>
              <el-form-item label="电子邮箱：">
                <el-input v-model="form.email"></el-input>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="服务使用限制">
            <el-form ref="form"
                     :model="form"
                     label-width="130px"
                     :rules="rules">
              <el-form-item label="访问限制：">
                <el-input v-model="form.accessRestrictions"></el-input>
              </el-form-item>
              <el-form-item label="使用限制：">
                <el-input v-model="form.useRestrictions"></el-input>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="数据描述信息">
            <el-form ref="form"
                     :model="form"
                     label-width="130px"
                     :rules="rules">
              <el-form-item label="空间参考系：">
                <el-input v-model="form.ReferenceSystem"></el-input>
              </el-form-item>
              <el-form-item label="空间表示类型：">
                <el-input v-model="form.RepresentationType"></el-input>
              </el-form-item>
              <el-form-item label="空间分辨率：">
                <el-input v-model="form.Resolution"></el-input>
              </el-form-item>
              <el-form-item label="专题类型：">
                <el-input v-model="form.ThematicType"></el-input>
              </el-form-item>
              <el-form-item label="其他说明：">
                <el-input v-model="form.otherInstructions"></el-input>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="操作描述">
            <el-card class="box-card">
              <div slot="header"
                   class="clearfix">
                <span>服务操作方式</span>
                <el-button style="float: right; padding: 3px 0;color:red"
                           type="text">删除</el-button>
                <el-button style="float: right; padding: 3px 0"
                           type="text">添加</el-button>
              </div>
              <el-table :data="tableData"
                        border
                        style="width: 100%">
                <el-table-column prop="date"
                                 label="操作名"
                                 type="selection"
                                 align="center"
                                 width="55">
                </el-table-column>
                <el-table-column prop="date"
                                 label="操作名"
                                 align="center">
                </el-table-column>
                <el-table-column prop="name"
                                 label="操作描述"
                                 align="center">
                </el-table-column>
                <el-table-column prop="address"
                                 label="分布式平台"
                                 align="center">
                </el-table-column>
                <el-table-column prop="address"
                                 label="访问地址"
                                 align="center">
                </el-table-column>
              </el-table>
            </el-card>
            <el-card class="box-card">
              <div slot="header"
                   class="clearfix">
                <span>方式参数说明</span>
                <el-button style="float: right; padding: 3px 0;color:red"
                           type="text">删除</el-button>
                <el-button style="float: right; padding: 3px 0"
                           type="text">添加</el-button>
              </div>
              <el-table :data="tableData2"
                        border
                        style="width: 100%">
                <el-table-column prop="date"
                                 label="操作名"
                                 type="selection"
                                 width="55"
                                 align="center">
                </el-table-column>
                <el-table-column prop="date"
                                 label="参数名"
                                 align="center">
                </el-table-column>
                <el-table-column prop="name"
                                 label="参数方向"
                                 align="center">
                </el-table-column>
                <el-table-column prop="address"
                                 label="参数描述"
                                 align="center">
                </el-table-column>
                <el-table-column prop="address"
                                 label="是否描述"
                                 align="center">
                </el-table-column>
                <el-table-column prop="address"
                                 label="是否可重复"
                                 align="center">
                </el-table-column>
                <el-table-column prop="address"
                                 label="取值访问"
                                 align="center">
                </el-table-column>
              </el-table>
            </el-card>
          </el-tab-pane>
          <el-tab-pane label="服务调用示例">

            <el-card class="box-card">
              <div slot="header"
                   class="clearfix">
                <span>卡片名称</span>
                <el-button style="float: right; padding: 3px 0;color:red"
                           type="text">删除</el-button>
                <el-button style="float: right; padding: 3px 0"
                           type="text">添加</el-button>
              </div>
              <el-table :data="tableData2"
                        border
                        style="width: 100%">
                <el-table-column prop="date"
                                 label="操作名"
                                 type="selection"
                                 width="55"
                                 align="center">
                </el-table-column>
                <el-table-column prop="date"
                                 label="操作地址"
                                 align="center">
                </el-table-column>
                <el-table-column prop="name"
                                 label="操作说明"
                                 align="center">
                </el-table-column>
              </el-table>
            </el-card>
          </el-tab-pane>
        </el-tabs>
      </div>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="active--"
                   v-if="active >0">上一步</el-button>
        <el-button type="primary"
                   @click="active++"
                   v-if="active !== 1">下一步</el-button>
        <el-button type="primary"
                   @click="active = 0;dialogVisible = false"
                   v-if="active === 1">完成</el-button>
      </span>
    </el-dialog>
    <!-- //  点击服务预览按钮 -->
    <el-dialog title="服务详情预览"
               center
               :visible.sync="ServicePreview"
               width="800px">
      <ServiceInfo :formnoPass='formnoPass'
                   :tableData='tableData3'></ServiceInfo>
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
  </div>
</template>
<script>
import { getTableData, ServicePreview, getSerFeedbackTableData } from '@api/admin/myService'
import ServiceInfo from '@admin/components/serviceInfo'
export default {
  name: 'resService',
  components: {
    ServiceInfo
  },
  data () {
    return {
      formInline: {
        approval: '',
        service: '',
        change: '0'
      },
      form: {},
      tableData: [],
      pageSize: 3,
      total: 7,
      dialogVisible: false,
      active: 0,
      serviceUrl: '',
      rules: {
        type: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        unit: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        version: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        keywork: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        alias: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        thumbnail: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        Summary: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        unitName: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      },
      tableData2: [],
      fileList: [],
      uploadata: {
        suolue: '50*50'
        // access_token:
      },
      approval: '',
      service: '',
      selection: [],
      ServicePreview: false,
      formnoPass: {},
      tableData3: [],
      serFeedback: false,
      serFeedbackTableData: []
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
      let pageSize = this.pageSize
      let res = await getTableData({ page: 1, pageSize, approval: this.approval, service: this.service, flag: 0 })
      console.log(res)
      this.tableData = res.data.list
      this.total = res.data.total
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
      if (row.serStatus === '0') {
        return '运行'
      } else if (row.serStatus === '1') {
        return '停止'
      }
    },
    //  点击分页按钮
    changeSize: async function (page) {
      console.log(page)
      let pageSize = this.pageSize
      let res = await getTableData({ page: 1, pageSize, approval: this.approval, service: this.service, flag: 0 })
      console.log(res)
      this.tableData = res.data.list
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
        message: '删除成功',
        type: 'success'
      })
      this.getTable()
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    //  点击表格按钮事件
    //  预览
    preview: async function (id) {
      this.ServicePreview = true
      console.log(id)
      let res = await ServicePreview({ id })
      console.log(res)
      this.formnoPass = res.data[0]
    },
    //  反馈
    Feedback: async function (id) {
      this.serFeedback = true
      console.log(id)
      let res = await getSerFeedbackTableData({ id })
      console.log(res)
      this.formnoPass = res.data[0]
    }
    
  }
}
</script>
<style lang="less" scoped>
#resService-head {
  padding: 10px;
}
</style>
