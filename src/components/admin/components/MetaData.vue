<template>
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
                      prop="ServiceName">
          <el-input v-model="form.ServiceName"></el-input>
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
        <el-table :data="tableData3"
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
    <el-tab-pane label="服务范围信息"
                 v-if="show1">
      <el-card class="box-card">
        <div slot="header"
             class="clearfix">
          <el-button style="float: right; padding: 3px 0;color:red"
                     type="text">删除</el-button>
          <el-button style="float: right; padding: 3px 0"
                     type="text">添加</el-button>
        </div>
        <el-table :data="tableData4"
                  border
                  style="width: 100%">
          <el-table-column prop="date"
                           label="操作名"
                           type="selection"
                           width="55"
                           align="center">
          </el-table-column>
          <el-table-column prop="CoordinateSystem"
                           label="坐标系"
                           align="center">
          </el-table-column>
          <el-table-column prop="Minx"
                           label="最小x坐标"
                           align="center">
          </el-table-column>
          <el-table-column prop="Miny"
                           label="最小y坐标"
                           align="center">
          </el-table-column>
          <el-table-column prop="Maxx"
                           label="最大x坐标"
                           align="center">
          </el-table-column>
          <el-table-column prop="Maxy"
                           label="最大y坐标"
                           align="center">
          </el-table-column>
          <el-table-column prop="TemporaryTableName"
                           label="临时表名"
                           align="center">
          </el-table-column>
        </el-table>
      </el-card>
    </el-tab-pane>
    <el-tab-pane label="服务范围信息"
                 v-if="show2">
      <el-card class="box-card">
        <div slot="header"
             class="clearfix">
          <span>切片信息</span>
        </div>
        <el-form label-width="130px"
                 label-position="left">
          <el-form-item label="瓦片信息："
                        prop="type">
            <el-select v-model="form2.imageFormat"
                       placeholder="不限"
                       style="width:200px">
              <el-option label="全部"
                         value=""></el-option>
              <el-option label="png"
                         value="0"></el-option>
              <el-option label="gif"
                         value="1"></el-option>
              <el-option label="jpeg"
                         value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="切图信息标识符：">
            <el-input v-model="form2.Identifier"></el-input>
          </el-form-item>
          <el-form-item label="切图坐标系：">
            <el-input v-model="form2.coordinate"></el-input>
          </el-form-item>
        </el-form>
      </el-card>
      <el-card class="box-card">
        <div slot="header"
             class="clearfix">
          <span>瓦片信息</span>
          <el-button style="float: right; padding: 3px 0;color:red"
                     type="text">删除</el-button>
          <el-button style="float: right; padding: 3px 0"
                     type="text">添加</el-button>
        </div>
        <el-table :data="tableData5"
                  border
                  style="width: 100%">
          <el-table-column prop="date"
                           label="操作名"
                           type="selection"
                           width="55"
                           align="center">
          </el-table-column>
          <el-table-column prop="CoordinateSystem"
                           label="坐标系"
                           align="center">
          </el-table-column>
          <el-table-column prop="Minx"
                           label="最小x坐标"
                           align="center">
          </el-table-column>
          <el-table-column prop="Miny"
                           label="最小y坐标"
                           align="center">
          </el-table-column>
          <el-table-column prop="Maxx"
                           label="最大x坐标"
                           align="center">
          </el-table-column>
          <el-table-column prop="Maxy"
                           label="最大y坐标"
                           align="center">
          </el-table-column>
          <el-table-column prop="TemporaryTableName"
                           label="临时表名"
                           align="center">
          </el-table-column>
        </el-table>
      </el-card>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  name: 'MetaData',
  data () {
    return {
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
      uploadata: {
        suolue: '50*50'
        // access_token:
      },
      fileList: []
    }
  },
  props: {
    form: {
      type: Object,
      default: () => {
        return {}
      }
    },
    tableData: {
      type: Array,
      default: () => {
        return []
      }
    },
    tableData2: {
      type: Array,
      default: () => {
        return []
      }
    },
    tableData3: {
      type: Array,
      default: () => {
        return []
      }
    },
    tableData4: {
      type: Array,
      default: () => {
        return []
      }
    },
    tableData5: {
      type: Array,
      default: () => {
        return []
      }
    },
    form2: {
      type: Object,
      default: () => {
        return {
          imageFormat: ''
        }
      }
    },
    show1: {
      type: Boolean,
      default: false
    },
    show2: {
      type: Boolean,
      default: false
    }
  },
  methods: {
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
    }
  }
}
</script>
