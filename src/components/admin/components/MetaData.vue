<template>
  <el-tabs type="border-card">
    <el-tab-pane label="基本信息">
      <el-form ref="form"
               :model="form.irmServiceInfo[0]"
               inline
               label-width="130px"
               :rules="rules">
        <el-form-item label="数据服务类型："
                      prop="type">
          <el-select v-model="form.irmServiceInfo[0].serType"
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
          <el-select v-model="form.irmServiceInfo[0].checkType"
                     placeholder="请选择"
                     @change="changePage(form.irmServiceInfo[0].checkType)">
            <el-option v-for="item in checkOptions"
                       :key="item.id"
                       :label="item.name"
                       :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="发布日期：">
          <el-date-picker v-model="form.irmServiceInfo[0].pubDate"
                          style="width:200px;"
                          type="date"
                          range-separator="-"
                          value-format='yyyy-MM-dd'
                          placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="服务类型版本：">
          <el-input v-model="form.irmServiceInfo[0].version"></el-input>
        </el-form-item>
        <el-form-item label="发布单位："
                      prop="pubUnit">
          <el-input v-model="form.irmServiceInfo[0].unit"></el-input>
        </el-form-item>
        <el-form-item label="服务名："
                      prop="serName">
          <el-input v-model="form.irmServiceInfo[0].serName"></el-input>
        </el-form-item>
        <el-form-item label="关键词："
                      prop="summary">
          <el-input v-model="form.irmServiceInfo[0].summary"></el-input>
        </el-form-item>
        <el-form-item label="服务别名："
                      prop="alias">
          <el-input v-model="form.irmServiceInfo[0].alias"></el-input>
        </el-form-item>
        <el-form-item label="上传缩略图："
                      prop="thumbnail"
                      v-model="form.irmServiceInfo[0].imgUrl">
          <el-upload class="upload-demo"
                     action="http://192.168.2.121:9088/upload"
                     list-type="picture-card"
                     :on-success="handleAvatarSuccess"
                     :before-upload="beforeAvatarUpload"
                     :data='uploadData'
                     :limit="1">
            <el-button size="small"
                       type="primary">点击上传</el-button>
            <div slot="tip"
                 class="el-upload__tip">只能上传jpg/png文件，且不超过2MB</div>
          </el-upload>
          <el-dialog :visible.sync="showImg">
            <img width="100%"
                 :src="dialogImageUrl"
                 alt="">
          </el-dialog>
        </el-form-item>
        <el-form-item label="摘要："
                      prop="keyword">
          <el-input v-model="form.irmServiceInfo[0].keyword"
                    type="textarea"></el-input>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="发布单位信息">
      <el-form ref="form"
               :model="form.irmServiceInfo[0]"
               inline
               label-width="130px"
               :rules="rules">
        <el-form-item label="单位名称："
                      prop="bqdw">
          <el-input v-model="form.irmServiceInfo[0].bqdw"></el-input>
        </el-form-item>
        <el-form-item label="城市：">
          <el-input v-model="form.irmServiceInfo[0].city"></el-input>
        </el-form-item>
        <el-form-item label="单位网址：">
          <el-input v-model="form.irmServiceInfo[0].unitUrl"></el-input>
        </el-form-item>
        <el-form-item label="详细地址：">
          <el-input v-model="form.irmServiceInfo[0].address"></el-input>
        </el-form-item>
        <el-form-item label="联系人：">
          <el-input v-model="form.irmServiceInfo[0].principal"></el-input>
        </el-form-item>
        <el-form-item label="邮编：">
          <el-input v-model="form.irmServiceInfo[0].postalCode"></el-input>
        </el-form-item>
        <el-form-item label="联系人单位：">
          <el-input v-model="form.irmServiceInfo[0].bqdwzz"></el-input>
        </el-form-item>
        <el-form-item label="电话："
                      prop="phone">
          <el-input v-model="form.irmServiceInfo[0].phone"></el-input>
        </el-form-item>
        <el-form-item label="国家：">
          <el-input v-model="form.irmServiceInfo[0].country"></el-input>
        </el-form-item>
        <el-form-item label="传真：">
          <el-input v-model="form.irmServiceInfo[0].fax"></el-input>
        </el-form-item>
        <el-form-item label="省（直辖市）：">
          <el-input v-model="form.irmServiceInfo[0].province"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱：">
          <el-input v-model="form.irmServiceInfo[0].email"></el-input>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="服务使用限制">
      <el-form ref="form"
               :model="form.irmSerUseLimit[0]"
               label-width="130px"
               :rules="rules">
        <el-form-item label="访问限制：">
          <el-input v-model="form.irmSerUseLimit[0].use"></el-input>
        </el-form-item>
        <el-form-item label="使用限制：">
          <el-input v-model="form.irmSerUseLimit[0].visit"></el-input>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="数据描述信息">
      <el-form ref="form"
               :model="form.irmDataDescription[0]"
               label-width="130px"
               :rules="rules">
        <el-form-item label="空间参考系：">
          <el-input v-model="form.irmDataDescription[0].spatialReferSystem"></el-input>
        </el-form-item>
        <el-form-item label="空间表示类型：">
          <el-input v-model="form.irmDataDescription[0].type"></el-input>
        </el-form-item>
        <el-form-item label="空间分辨率：">
          <el-input v-model="form.irmDataDescription[0].resolution"></el-input>
        </el-form-item>
        <el-form-item label="专题类型：">
          <el-input v-model="form.irmDataDescription[0].thematicType"></el-input>
        </el-form-item>
        <el-form-item label="其他说明：">
          <el-input v-model="form.irmDataDescription[0].description"></el-input>
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
        <el-table :data="form.irmSerOperation[0]"
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
        <el-table :data="form.irmServiceInstance[0]"
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
        <el-table :data="form.irmLayerInfo[0]"
                  border
                  style="width: 100%">
          <el-table-column prop="date"
                           type="selection"
                           width="55"
                           align="center">
          </el-table-column>
          <el-table-column prop="id"
                           label="索引"
                           align="center">
          </el-table-column>
          <el-table-column prop="layerName"
                           label="名称"
                           align="center">
          </el-table-column>
          <el-table-column prop="alias"
                           label="别名"
                           align="center">
          </el-table-column>
          <el-table-column prop="state"
                           label="摘要"
                           align="center">
          </el-table-column>
          <el-table-column prop="style"
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
        <el-table :data="form.irmServiceRange[0]"
                  border
                  style="width: 100%">
          <el-table-column prop="select"
                           type="selection"
                           align="center"
                           width="55">
          </el-table-column>
          <el-table-column prop="coordinate"
                           label="坐标系"
                           align="center">
          </el-table-column>
          <el-table-column prop="minX"
                           label="最小x坐标"
                           align="center">
          </el-table-column>
          <el-table-column prop="minY"
                           label="最小y坐标"
                           align="center">
          </el-table-column>
          <el-table-column prop="maxX"
                           label="最大x坐标"
                           align="center">
          </el-table-column>
          <el-table-column prop="maxY"
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

    <!-- <el-tab-pane label="要素类型信息"
                 v-if="show3">
      <el-card class="box-card">
        <div slot="header"
             class="clearfix">
          <el-button style="float: right; padding: 3px 0;color:red"
                     type="text">删除</el-button>
          <el-button style="float: right; padding: 3px 0"
                     type="text">添加</el-button>
        </div>
        <el-table :data="form.irmFeatureType[0]"
                  border
                  style="width: 100%">
          <el-table-column prop="date"
                           type="selection"
                           width="55"
                           align="center">
          </el-table-column>
          <el-table-column prop="name"
                           label="名称"
                           align="center">
          </el-table-column>
          <el-table-column prop="alias"
                           label="别名"
                           align="center">
          </el-table-column>
          <el-table-column prop="summary"
                           label="摘要"
                           align="center">
          </el-table-column>
          <el-table-column prop="keyword"
                           label="关键词"
                           align="center">
          </el-table-column>
          <el-table-column prop="cloumn"
                           label="字段"
                           align="center">
          </el-table-column>
          <el-table-column prop="coordinateSystem"
                           label="默认坐标系"
                           align="center">
          </el-table-column>
          <el-table-column prop="otherCoordinate"
                           label="支持的其他坐标系"
                           align="center">
          </el-table-column>
          <el-table-column prop="format"
                           label="输出格式"
                           align="center">
          </el-table-column>
        </el-table>
      </el-card>
    </el-tab-pane> -->

    <!-- <el-tab-pane label="Fliter支持信息"
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
            <el-input v-model="form.irmSpaceSupport[0].geometryType"></el-input>
          </el-form-item>
          <el-form-item label="空间操作符：">
            <el-input v-model="form.irmSpaceSupport[0].spaceOperator"></el-input>
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
            <el-input v-model="form.irmScalarSupport[0].logicalOpera"></el-input>
          </el-form-item>
          <el-form-item label="比较操作符：">
            <el-input v-model="form.irmScalarSupport[0].comparisonOpera "></el-input>
          </el-form-item>
          <el-form-item label="算数操作符：">
            <el-input v-model="form.irmScalarSupport[0].countOpera "></el-input>
          </el-form-item>
        </el-form>
      </el-card>
    </el-tab-pane> -->
    <!-- <el-tab-pane label="瓦片信息"
                 v-if="show5"
                 name="six">
      <el-card class="box-card">
        <div slot="header"
             class="clearfix">
          <span>切片信息</span>
        </div>
        <el-form label-width="130px"
                 label-position="left">
          <el-form-item label="瓦片格式："
                        prop="type">
            <el-input v-model="form.irmSliceInfo[0].format"></el-input>
          </el-form-item>
          <el-form-item label="切片信息标识符：">
            <el-input v-model="form.irmSliceInfo[0].identity"></el-input>
          </el-form-item>
          <el-form-item label="切边坐标系：">
            <el-input v-model="form.irmSliceInfo[0].cutCoordinate"></el-input>
          </el-form-item>
        </el-form>
      </el-card>
      <div class="table p10">
        <el-table :data="form.irmSliceInfo"
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
          <el-table-column prop="resolution"
                           label="分辨率"
                           align='center'>
          </el-table-column>
          <el-table-column prop="leftCornerCoordinates"
                           label="左上角坐标"
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
          <el-table-column prop="tileColumnNum"
                           label="瓦片总列数"
                           align='center'>
          </el-table-column>
          <el-table-column prop="tileRowNum"
                           label="瓦片总行数"
                           align='center'>
          </el-table-column>
        </el-table>
      </div>
    </el-tab-pane> -->
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
      uploadData: {
        suolue: '50*50',
        access_token: this.GLOBAL.userData,
        clienntId: '時空'
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
      ],
      showImg: false,
      dialogImageUrl: '',
    }
  },
  mounted: async function () {
    console.log('我是form', this.form.irmServiceInfo)
    //  获取下拉框数据
    let res = await getTreeData({})
    console.log('我是tree结构', res.data.data)
    this.options = res.data.data
  },
  methods: {
    handleAvatarSuccess (res, file) {
      console.log(res, file)
      this.fileData = res.data[0]
      console.log(this.fileData)
      this.form.imgUrl = this.fileData
    },
    //  限制上传内容
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
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
        return {
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
        }
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
    }
  },
}
</script>
