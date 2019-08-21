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
          <el-select v-model="form.serType"
                     placeholder="请选择"
                     multiple>
            <el-option-group v-for="group in options"
                             :key="group.catalogId"
                             :label="group.catalogName"
                             :value="group.catalogId">
              <el-option v-for="item in group.children"
                         :key="item.catalogId"
                         :label="item.catalogName"
                         :value="item.catalogId">
              </el-option>
            </el-option-group>
          </el-select>
        </el-form-item>
        <el-form-item label="类型分类："
                      prop="checkType">
          <el-select v-model="form.checkType"
                     placeholder="请选择"
                     @change="changePage(form.checkType)">
            <el-option v-for="item in checkOptions"
                       :key="item.id"
                       :label="item.name"
                       :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="发布日期：">
          <el-date-picker v-model="form.pubDate"
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
                      prop="pubUnit">
          <el-input v-model="form.unit"></el-input>
        </el-form-item>
        <el-form-item label="服务名："
                      prop="serName">
          <el-input v-model="form.serName"></el-input>
        </el-form-item>
        <el-form-item label="关键词："
                      prop="summary">
          <el-input v-model="form.summary"></el-input>
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
                      prop="keyword">
          <el-input v-model="form.keyword"
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
                      prop="bqdw">
          <el-input v-model="form.bqdw"></el-input>
        </el-form-item>
        <el-form-item label="城市：">
          <el-input v-model="form.city"></el-input>
        </el-form-item>
        <el-form-item label="单位网址：">
          <el-input v-model="form.unitUrl"></el-input>
        </el-form-item>
        <el-form-item label="详细地址：">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="联系人：">
          <el-input v-model="form.principal"></el-input>
        </el-form-item>
        <el-form-item label="邮编：">
          <el-input v-model="form.postalCode"></el-input>
        </el-form-item>
        <el-form-item label="联系人单位：">
          <el-input v-model="form.bqdwzz"></el-input>
        </el-form-item>
        <el-form-item label="电话："
                      prop="phone">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="国家：">
          <el-input v-model="form.country"></el-input>
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
          <el-input v-model="form.use"></el-input>
        </el-form-item>
        <el-form-item label="使用限制：">
          <el-input v-model="form.visit"></el-input>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="数据描述信息">
      <el-form ref="form"
               :model="form"
               label-width="130px"
               :rules="rules">
        <el-form-item label="空间参考系：">
          <el-input v-model="form.spatialReferSystem"></el-input>
        </el-form-item>
        <el-form-item label="空间表示类型：">
          <el-input v-model="form.type"></el-input>
        </el-form-item>
        <el-form-item label="空间分辨率：">
          <el-input v-model="form.resolution"></el-input>
        </el-form-item>
        <el-form-item label="专题类型：">
          <el-input v-model="form.thematicType"></el-input>
        </el-form-item>
        <el-form-item label="其他说明：">
          <el-input v-model="form.description"></el-input>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="操作描述信息">
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
          <el-table-column prop="select"
                           type="selection"
                           align="center"
                           width="55">
          </el-table-column>
          <el-table-column prop="operaName "
                           label="操作名"
                           align="center">
          </el-table-column>
          <el-table-column prop="description"
                           label="操作描述"
                           align="center">
          </el-table-column>
          <el-table-column prop="distributedPlatform"
                           label="分布式平台"
                           align="center">
          </el-table-column>
          <el-table-column prop="url"
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
                           type="selection"
                           width="55"
                           align="center">
          </el-table-column>
          <el-table-column prop="paramName"
                           label="参数名"
                           align="center">
          </el-table-column>
          <el-table-column prop="paramDirection"
                           label="参数方向"
                           align="center">
          </el-table-column>
          <el-table-column prop="paramDesc"
                           label="参数描述"
                           align="center">
          </el-table-column>
          <el-table-column prop="isNeed"
                           label="是否描述"
                           align="center">
          </el-table-column>
          <el-table-column prop="isRepeat"
                           label="是否可重复"
                           align="center">
          </el-table-column>
          <el-table-column prop="range"
                           label="取值范围"
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
                           type="selection"
                           width="55"
                           align="center">
          </el-table-column>
          <el-table-column prop="url"
                           label="操作地址"
                           align="center">
          </el-table-column>
          <el-table-column prop="description"
                           label="操作说明"
                           align="center">
          </el-table-column>
        </el-table>
      </el-card>
    </el-tab-pane>
    <el-tab-pane label="服务图层信息"
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
                           type="selection"
                           width="55"
                           align="center">
          </el-table-column>
          <el-table-column prop="CoordinateSystem"
                           label="索引"
                           align="center">
          </el-table-column>
          <el-table-column prop="Minx"
                           label="名称"
                           align="center">
          </el-table-column>
          <el-table-column prop="Miny"
                           label="别名"
                           align="center">
          </el-table-column>
          <el-table-column prop="Maxx"
                           label="摘要"
                           align="center">
          </el-table-column>
          <el-table-column prop="Maxy"
                           label="关键词"
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
          <span>服务范围信息</span>
          <el-button style="float: right; padding: 3px 0;color:red"
                     type="text">删除</el-button>
          <el-button style="float: right; padding: 3px 0"
                     type="text">添加</el-button>
        </div>
        <el-table :data="tableData"
                  border
                  style="width: 100%">
          <el-table-column prop="select"
                           type="selection"
                           align="center"
                           width="55">
          </el-table-column>
          <el-table-column prop="operaName "
                           label="坐标系"
                           align="center">
          </el-table-column>
          <el-table-column prop="description"
                           label="最小x坐标"
                           align="center">
          </el-table-column>
          <el-table-column prop="distributedPlatform"
                           label="最小y坐标"
                           align="center">
          </el-table-column>
          <el-table-column prop="url"
                           label="最大x坐标"
                           align="center">
          </el-table-column>
          <el-table-column prop="url"
                           label="最大y坐标"
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
                           type="selection"
                           width="55"
                           align="center">
          </el-table-column>
          <el-table-column prop="paramName"
                           label="参数名"
                           align="center">
          </el-table-column>
          <el-table-column prop="paramDirection"
                           label="参数方向"
                           align="center">
          </el-table-column>
          <el-table-column prop="paramDesc"
                           label="参数描述"
                           align="center">
          </el-table-column>
          <el-table-column prop="isNeed"
                           label="是否描述"
                           align="center">
          </el-table-column>
          <el-table-column prop="isRepeat"
                           label="是否可重复"
                           align="center">
          </el-table-column>
          <el-table-column prop="range"
                           label="取值范围"
                           align="center">
          </el-table-column>
        </el-table>
      </el-card>
    </el-tab-pane>
    <el-tab-pane label="要素类型信息"
                 v-if="show3">
      <el-card class="box-card">
        <div slot="header"
             class="clearfix">
          <el-button style="float: right; padding: 3px 0;color:red"
                     type="text">删除</el-button>
          <el-button style="float: right; padding: 3px 0"
                     type="text">添加</el-button>
        </div>
        <el-table :data="tableData5"
                  border
                  style="width: 100%">
          <el-table-column prop="date"
                           type="selection"
                           width="55"
                           align="center">
          </el-table-column>
          <el-table-column prop="CoordinateSystem"
                           label="名称"
                           align="center">
          </el-table-column>
          <el-table-column prop="Minx"
                           label="别名"
                           align="center">
          </el-table-column>
          <el-table-column prop="Miny"
                           label="摘要"
                           align="center">
          </el-table-column>
          <el-table-column prop="Maxx"
                           label="关键词"
                           align="center">
          </el-table-column>
          <el-table-column prop="Maxy"
                           label="字段"
                           align="center">
          </el-table-column>
          <el-table-column prop="Maxy"
                           label="默认坐标系"
                           align="center">
          </el-table-column>
          <el-table-column prop="Maxy"
                           label="支持的其他坐标系"
                           align="center">
          </el-table-column>
          <el-table-column prop="Maxy"
                           label="输出格式"
                           align="center">
          </el-table-column>
        </el-table>
      </el-card>
    </el-tab-pane>
    <el-tab-pane label="Fliter支持信息"
                 v-if="show4">
      <el-card class="box-card">
        <div slot="header"
             class="clearfix">
          <span>空间操作支持</span>
        </div>
        <el-form label-width="130px"
                 label-position="left">
          <el-form-item label="可操作几何类型："
                        prop="type">
            <el-input v-model="form2.Identifier"></el-input>
          </el-form-item>
          <el-form-item label="空间操作符：">
            <el-input v-model="form2.Identifier"></el-input>
          </el-form-item>
        </el-form>
      </el-card>
      <el-card class="box-card">
        <div slot="header"
             class="clearfix">
          <span>标量操作支持</span>
        </div>
        <el-form label-width="130px"
                 label-position="left">
          <el-form-item label="逻辑操作符："
                        prop="type">
            <el-input v-model="form2.Identifier"></el-input>
          </el-form-item>
          <el-form-item label="比较操作符：">
            <el-input v-model="form2.Identifier"></el-input>
          </el-form-item>
          <el-form-item label="算数操作符：">
            <el-input v-model="form2.Identifier"></el-input>
          </el-form-item>
        </el-form>
      </el-card>
    </el-tab-pane>
    <el-tab-pane label="瓦片信息"
                 v-if="show5"
                 name="six">
      <div class="table p10">
        <el-table :data="tableData"
                  border
                  style="width: 100%">
          <el-table-column prop="level"
                           label="级别"
                           align='center'>
          </el-table-column>
          <el-table-column prop="scale"
                           label="比例尺"
                           align='center'>
          </el-table-column>
          <el-table-column prop="CutStartPoint"
                           label="切图起始点"
                           align='center'>
          </el-table-column>
          <el-table-column prop="TileWidth"
                           label="瓦片宽"
                           align='center'>
          </el-table-column>
          <el-table-column prop="TileHeight"
                           label="瓦片高"
                           align='center'>
          </el-table-column>
        </el-table>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import { getTreeData } from '@api/admin/myDirectory'
import { async } from 'q';
import { fail } from 'assert';

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
      fileList: [],
      options: [],
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      checkOptions: [
        {
          id: 1,
          name: 'addSerivce'
        },
        {
          id: 2,
          name: 'GPSService'
        },
        {
          id: 3,
          name: '其他'
        },
        {
          id: 4,
          name: '功能服务'
        },
        {
          id: 5,
          name: 'WCS'
        },
        {
          id: 6,
          name: 'WMTS'
        },
        {
          id: 7,
          name: 'MAPService'
        },
        {
          id: 8,
          name: 'WFS-SUP'
        },
        {
          id: 9,
          name: 'WFS-GEOSTAR'
        },
        {
          id: 10,
          name: 'CSW'
        },
        {
          id: 11,
          name: 'WFS-G'
        },
        {
          id: 12,
          name: 'WMS-SUP'
        },
        {
          id: 13,
          name: 'WMS-GEOSTAR'
        }
      ]
    }
  },
  mounted: async function () {
    //  获取下拉框数据
    let res = await getTreeData({})
    console.log('我是tree结构', res.data.data)
    this.options = res.data.data
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
    },
    changePage (val) {
      console.log(val)
      //  wmts  服务范围信息  瓦片信息
      if (val === 6) {
        this.show1 = false
        this.show2 = true
        this.show3 = false
        this.show4 = false
        this.show5 = true
      } else if (val === 7) {
        this.show1 = true
        this.show2 = false
        this.show3 = false
        this.show4 = false
        this.show5 = false
      } else if (val === 8 || val === 9 || val === 10 || val === 11) {
        this.show1 = false
        this.show2 = false
        this.show3 = false
        this.show4 = true
        this.show5 = true
      } else if (val === 12 || val === 13) {
        this.show1 = true
        this.show2 = true
        this.show3 = false
        this.show4 = false
        this.show5 = false
      } else {
        this.show1 = false
        this.show2 = false
        this.show3 = false
        this.show4 = false
        this.show5 = false
      }
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
  },
}
</script>
