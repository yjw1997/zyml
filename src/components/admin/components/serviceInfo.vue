<template>
  <el-tabs v-model="activeName"
           type="card"
           class="tc">
    <el-tab-pane label="基本信息"
                 name="first">
      <div style="width:80%"
           class="ib">
        <el-form ref="formnoPass"
                 :model="formnoPass"
                 label-width="150px"
                 label-position="left">
          <el-form-item label="服务地址：">
            <el-input v-model="formnoPass.serUrl"
                      disabled></el-input>
          </el-form-item>
          <el-form-item label="服务类型：">
            <el-input v-model="formnoPass.serType"
                      disabled></el-input>
          </el-form-item>
          <el-form-item label="服务类型版本：">
            <el-input v-model="formnoPass.version"
                      disabled></el-input>
          </el-form-item>
          <el-form-item label="服务名：">
            <el-input v-model="formnoPass.serName"
                      disabled></el-input>
          </el-form-item>
          <el-form-item label="服务别名：">
            <el-input v-model="formnoPass.alias"
                      disabled></el-input>
          </el-form-item>
          <el-form-item label="服务Id：">
            <el-input v-model="formnoPass.id"
                      disabled></el-input>
          </el-form-item>
          <el-form-item label="摘要：">
            <el-input v-model="formnoPass.keyword"
                      disabled></el-input>
          </el-form-item>
          <el-form-item label="关键词：">
            <el-input v-model="formnoPass.summary"
                      disabled></el-input>
          </el-form-item>
          <el-form-item label="发布单位：">
            <el-input v-model="formnoPass.pubUnit"
                      disabled></el-input>
          </el-form-item>
          <el-form-item label="发布日期：">
            <el-input v-model="formnoPass.pubDate"
                      disabled></el-input>
          </el-form-item>
        </el-form>
      </div>
    </el-tab-pane>
    <el-tab-pane label="服务发布单位详情信息"
                 name="second">
      <el-form ref="formnoPass"
               :model="formnoPass"
               label-width="120px"
               label-position="left"
               :inline="true">
        <el-form-item label="单位名称：">
          <el-input v-model="formnoPass.pubUnit"
                    disabled></el-input>
        </el-form-item>
        <el-form-item label="单位网址：">
          <el-input v-model="formnoPass.unitUrl"
                    disabled></el-input>
        </el-form-item>
        <el-form-item label="国 家 ：">
          <el-input v-model="formnoPass.country"
                    disabled></el-input>
        </el-form-item>
        <el-form-item label="省（直辖市）：">
          <el-input v-model="formnoPass.province"
                    disabled></el-input>
        </el-form-item>
        <el-form-item label="城 市：">
          <el-input v-model="formnoPass.city"
                    disabled></el-input>
        </el-form-item>
        <el-form-item label="详细地址：">
          <el-input v-model="formnoPass.address"
                    disabled></el-input>
        </el-form-item>
        <el-form-item label="邮编：">
          <el-input v-model="formnoPass.postalCode"
                    disabled></el-input>
        </el-form-item>
        <el-form-item label="电话：">
          <el-input v-model="formnoPass.phone"
                    disabled></el-input>
        </el-form-item>
        <el-form-item label="传真：">
          <el-input v-model="formnoPass.fax"
                    disabled></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱：">
          <el-input v-model="formnoPass.email"
                    disabled></el-input>
        </el-form-item>
        <el-form-item label="联系人：">
          <el-input v-model="formnoPass.principal"
                    disabled></el-input>
        </el-form-item>
        <el-form-item label="联系人职位：">
          <el-input v-model="formnoPass.bqdwzz"
                    disabled></el-input>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="服务使用限制"
                 name="third">
      <el-form ref="formnoPass"
               :model="formnoPass"
               label-width="120px"
               label-position="left"
               :inline="true">
        <el-form-item label="访问限制：">
          <el-input v-model="formnoPass.use"
                    disabled
                    :rows="3"
                    type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="使用限制：">
          <el-input v-model="formnoPass.visit"
                    type="textarea"
                    :rows="3"
                    disabled></el-input>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="数据描述信息"
                 name="fourth">
      <div class="ib"
           style="80%">
        <el-form ref="formnoPass"
                 :model="formnoPass"
                 label-width="120px"
                 label-position="left">

          <el-form-item label="空间参考系：">
            <el-input v-model="formnoPass.spatialReferSystem"
                      disabled></el-input>
          </el-form-item>
          <el-form-item label="空间表示类型：">
            <el-input v-model="formnoPass.type"
                      disabled></el-input>
          </el-form-item>
          <el-form-item label="空间分辨率：">
            <el-input v-model="formnoPass.resolution"
                      disabled></el-input>
          </el-form-item>
          <el-form-item label="专题类型：">
            <el-input v-model="formnoPass.thematicType"
                      disabled></el-input>
          </el-form-item>
          <el-form-item label="其它说明：">
            <el-input v-model="formnoPass.description"
                      disabled></el-input>
          </el-form-item>
        </el-form>
      </div>
    </el-tab-pane>
    <el-tab-pane label="支持操作"
                 name="five">无</el-tab-pane>
    <el-tab-pane v-if="show"
                 label="瓦片信息"
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
export default {
  name: 'serviceInfo',
  data () {
    return {
      activeName: 'first'
    }
  },
  props: {
    formnoPass: {
      type: Object,
      default: () => {
        return {

        }
      }
    },
    tableData: {
      type: Array,
      default: () => {
        return []
      }
    },
    show: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style lang="less" scoped>
</style>
