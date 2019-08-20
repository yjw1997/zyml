<template>
  <div id="directory">
    <div class="left">
      <div class="pd">
        <div class="p10">
          <el-button type="primary"
                     size="mini"
                     @click="addDirectory">添加目录</el-button>
          <el-button type="danger"
                     class="fr"
                     size="mini"
                     @click="deleteDirectory">删除目录</el-button>
        </div>

        <div class="searchDirectory p10">
          <el-input placeholder="请输入你要搜索的目录"
                    v-model="searchDirectory"
                    size="small">
            <el-button slot="append"
                       icon="el-icon-search"
                       type="primary"
                       circle></el-button>
          </el-input>
        </div>
        <el-tree :data="treeData"
                 :props="defaultProps"
                 @node-click="handleNodeClick"
                 show-checkbox
                 check-strictly
                 ref="tree"
                 node-key="catalogId"></el-tree>
      </div>
    </div>
    <div class="right">
      <div class="pd">
        <div class="psx">
          <el-breadcrumb separator=">>">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">目录管理</a></el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <el-divider></el-divider>
        <div class="table">
          <el-card class="box-card">
            <div slot="header"
                 class="tl">
              <span>{{metaTitle}}</span>
              <el-button style="float: right;"
                         type="primary"
                         @click="rewriteInfo">修改目录信息</el-button>
            </div>
            <el-form :model="formInline"
                     label-width="120px">
              <el-form-item label="目录编号：">
                <el-input v-model="formInline.id"
                          :disabled="true"
                          placeholder="目录编号"></el-input>
              </el-form-item>
              <el-form-item label="目录名称：">
                <el-input v-model="formInline.dictName"
                          :disabled="true"
                          placeholder="目录名称"></el-input>
              </el-form-item>
              <el-form-item label="更新时间：">
                <el-input v-model="formInline.updateTime"
                          :disabled="true"
                          placeholder="更新时间"></el-input>
              </el-form-item>、
              <el-form-item label="创建时间：">
                <el-input v-model="formInline.createTime"
                          :disabled="true"
                          placeholder="创建时间"></el-input>
              </el-form-item>
              <el-form-item label="目录描述：">
                <el-input v-model="formInline.description"
                          :disabled="true"
                          placeholder="目录描述"></el-input>
              </el-form-item>
            </el-form>
          </el-card>
        </div>
        <!-- <div class="page">
          <el-pagination background
                         layout="prev, pager, next"
                         :total="total"
                         :page-size="pageSize"
                         @current-change="changeSize">>
          </el-pagination>
        </div> -->
      </div>
    </div>
    <!-- //  点击添加目录按钮 -->
    <el-dialog title="目录注册"
               center
               :visible.sync="addDirectoryS">
      <el-form ref="addDirectoryData"
               :model="addDirectoryData"
               label-width="120px">
        <el-form-item label="上级目录：">
          <el-select v-model="addDirectoryData.parentId">
            <el-option v-for="item in previousDirectory"
                       :label="item.catalogName"
                       :value="item.catalogId"
                       :key="item.catalogId">

            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="目录名称：">
          <el-input v-model="addDirectoryData.catalogName"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer"
            class="dialog-footer">
        <el-button type="primary"
                   @click="addDirectorySave">确 认</el-button>
        <el-button type="default"
                   @click="addDirectoryS =false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- //  点击修改目录信息按钮 -->
    <el-dialog title="修改目录信息"
               center
               :visible.sync="rewriteDirectoryS">
      <el-form :model="formInline2"
               label-width="120px">
        <el-form-item label="目录编号：">
          <el-input v-model="formInline2.id"
                    placeholder="目录编号"
                    :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="目录名称：">
          <el-input v-model="formInline2.dictName"
                    placeholder="目录编号"></el-input>
        </el-form-item>
        <el-form-item label="更新时间：">
          <el-input v-model="formInline2.updateTime"
                    placeholder="更新时间"
                    :disabled="true"></el-input>
        </el-form-item>、
        <el-form-item label="创建时间：">
          <el-input v-model="formInline2.createTime"
                    placeholder="创建时间"
                    :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="目录描述：">
          <el-input v-model="formInline2.description"
                    placeholder="目录描述"></el-input>
        </el-form-item>
        <el-form-item class="tr">
          <span class="fr">
            <el-button type="primary"
                       @click="onSubmit">保存</el-button>
            <el-button @click="rewriteDirectoryS = false;formInline2 = {}">取消</el-button>
          </span>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import { async } from 'q'
import { getTreeData, getAddDirectorySave, getPreviousDirectoryData, getDeleteDirectory, getDirectoryDataInfo, getOnSubmit } from '@api/admin/myDirectory'
export default {
  name: 'directory',
  data () {
    return {
      treeData: [],
      defaultProps: {
        children: 'children',
        label: 'catalogName',
        id: 'catalogId'
      },
      searchDirectory: '',
      metaTitle: '我是标题',
      tableData: [],
      addDirectoryS: false,
      addDirectoryData: {
        parentId: '',
        catalogName: ''
      },
      previousDirectory: [
        { catalogId: '0', catalogName: '无' }
      ],
      checkedNodes: [],
      total: 0,
      pageSize: 0,
      formInline: {},
      formInline2: {},
      rewriteDirectoryS: false
    }
  },
  mounted: async function () {
    this.getDirectoryData()
    let res = await getDirectoryDataInfo({ id: 1, pageSize: this.pageSize })
    console.log(res)
    this.tableData = res.data.list
    this.total = res.data.total
    this.pageSize = res.data.pageSize
  },
  methods: {
    //  获取目录tree数据
    getDirectoryData: async function () {
      let res = await getTreeData({})
      console.log('我是tree结构', res)
      this.treeData = res.data.data
    },
    //  添加目录
    addDirectory: async function () {
      this.addDirectoryS = true
      //  获取上级目录信息
      this.getPreviousDirectory()
    },
    //  获取上级目录信息
    getPreviousDirectory: async function () {
      let res = await getPreviousDirectoryData({})
      console.log(res)
      this.previousDirectory = [...this.previousDirectory, ...res.data]
      console.log(this.previousDirectory)
    },
    //  添加目录 --- 点击保存
    addDirectorySave: async function () {
      console.log(this.addDirectoryData)
      let res = await getAddDirectorySave({ parentId: this.addDirectoryData.parentId, catalogName: this.addDirectoryData.catalogName })
      console.log(res)
      this.$message({
        type: 'success',
        message: '注册成功'
      })
      this.addDirectoryS = false
      this.getDirectoryData()
    },
    //  点击删除目录按钮
    deleteDirectory: async function () {
      console.log(this.$refs.tree.getCheckedKeys()) // 获取复选框点击选择的数据id数组
      if (this.$refs.tree.getCheckedKeys().length === 0) return false
      for (var item of this.$refs.tree.getCheckedKeys()) {
        console.log(item)
        await getDeleteDirectory({ ids: item })
      }
      this.getDirectoryData()
      this.$message({
        type: 'success',
        message: '删除成功'
      })
    },
    //  点击树节点查看具体信息
    handleNodeClick: async function (data) {
      if (data.children !== null) return false
      console.log(data) //  nodeData
      //  获取目录数据信息
      let res = await getDirectoryDataInfo({ id: data.catalogId })
      //  修改标题信息
      this.metaTitle = res.data.data[0].dictName
      this.formInline = res.data.data[0]
    },
    // // 点击分页按钮
    // changeSize: async function (page) {
    //   console.log(page)
    //   this.pageSize = page
    //   let res = await getDirectoryDataInfo({ id: 1, pageSize: this.pageSize })
    //   console.log(res)
    //   this.tableData = res.data.list
    //   this.total = res.data.total
    //   this.pageSize = res.data.pageSize
    // },
    //  点击修改目录信息按钮
    rewriteInfo: async function () {
      if (Object.keys(this.formInline).length === 0) return false
      //  显示弹窗
      this.rewriteDirectoryS = true
      //  获取目录数据信息
      this.formInline2 = this.formInline
    },
    //  点击修改目录信息按钮 -- 点击保存按钮
    onSubmit: async function () {
      console.log(this.formInline2)
      // let date = Date.parse(new Date())
      // this.formInline2.updateTime = date
      this.formInline2.updateTime = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
      console.log(this.formInline2)
      await getOnSubmit(this.formInline2)
      this.getDirectoryData()
      //  点击树节点查看具体信息
      this.handleNodeClick(this.formInline2)
      this.$message({
        type: 'success',
        message: '更新成功'
      })
      //  显示弹窗
      this.rewriteDirectoryS = false
    }
  }
}
</script>
<style lang="less" scoped>
#directory {
  .body();
  .left {
    width: 20%;
    .ib();
    height: 100%;
    border-right: 1px solid #eee;
    .fl();
  }
  .right {
    width: 79%;
    height: 100%;
    .ib();
    .fl();
  }
}
</style>
