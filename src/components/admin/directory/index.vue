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
        <div class="ib">
          <el-tree :data="treeData"
                   :props="defaultProps"
                   @node-click="handleNodeClick"
                   show-checkbox
                   :default-expanded-keys="[2, 3]"
                   check-strictly
                   ref="tree"
                   node-key="id"></el-tree>
        </div>
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
              <el-button style="float: right; padding: 3px 0"
                         type="text">操作按钮</el-button>
            </div>
            <el-table :data="tableData"
                      style="width: 100%"
                      border>
              <el-table-column prop="id"
                               label="目录编号"
                               align="center"
                               width="120">
              </el-table-column>
              <el-table-column prop="unitCode"
                               label="目录代码"
                               align="center"
                               width="180">
              </el-table-column>
              <el-table-column prop="name"
                               label="目录名称"
                               align="center"
                               width="180">
              </el-table-column>
              <el-table-column prop="description"
                               align="center"
                               label="目录描述"
                               width="180">
              </el-table-column>
              <el-table-column prop="supplier"
                               label="目录提供方"
                               align="center"
                               width="180">
              </el-table-column>
              <el-table-column prop="maintain"
                               align="center"
                               label="维护单位"
                               width="180">
              </el-table-column>
              <el-table-column prop="createDate"
                               align="center"
                               width="160"
                               label="创建时间">
              </el-table-column>
              <el-table-column prop="updateDate"
                               align="center"
                               width="160"
                               label="修改时间">
              </el-table-column>
              <el-table-column prop="keyword"
                               align="center"
                               label="目录关键字"
                               width="220">
              </el-table-column>
            </el-table>
          </el-card>
        </div>
        <div class="page">
          <el-pagination background
                         layout="prev, pager, next"
                         :total="total"
                         :page-size="pageSize"
                         @current-change="changeSize">>
          </el-pagination>
        </div>
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
          <el-select v-model="addDirectoryData.previous">
            <el-option v-for="item in previousDirectory"
                       :label="item.name"
                       :value="item.id"
                       :key="item.id">

            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="目录名称：">
          <el-input v-model="addDirectoryData.dirName"></el-input>
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
  </div>
</template>
<script>
import { async } from 'q'
import { getTreeData, getAddDirectorySave, getPreviousDirectoryData, getDeleteDirectory, getDirectoryDataInfo } from '@api/admin/myDirectory'
export default {
  name: 'directory',
  data () {
    return {
      treeData: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      searchDirectory: '',
      metaTitle: '我是标题',
      tableData: [],
      addDirectoryS: false,
      addDirectoryData: {
        previous: '',
        dirName: ''
      },
      previousDirectory: [],
      checkedNodes: [],
      total: 0,
      pageSize: 0
    }
  },
  mounted: async function () {
    this.getDirectoryData()
    let res = await getDirectoryDataInfo({ id: 1 })
    console.log(res)
    this.tableData = res.data.list
    this.total = res.data.total
    this.pageSize = res.data.pageSize
  },
  methods: {
    //  获取目录tree数据
    getDirectoryData: async function () {
      let res = await getTreeData({ id: 1 })
      this.treeData = res.data
    },
    //  添加目录
    addDirectory: async function () {
      this.addDirectoryS = true
      //  获取上级目录信息
      this.getPreviousDirectory()
    },
    //  获取上级目录信息
    getPreviousDirectory: async function () {
      let res = await getPreviousDirectoryData({ id: 1 })
      console.log(res)
      this.previousDirectory = res.data
    },
    //  添加目录 --- 点击保存
    addDirectorySave: async function () {
      console.log(this.addDirectoryData)
      let res = await getAddDirectorySave({ data: this.addDirectoryData })
      this.$message({
        type: 'success',
        message: '注册成功'
      })
      this.addDirectoryS = false
      console.log(res)
    },
    //  点击删除目录按钮
    deleteDirectory: async function () {
      console.log(this.$refs.tree.getCheckedKeys()) // 获取复选框点击选择的数据id数组
      for (var item of this.$refs.tree.getCheckedKeys()) {
        console.log(item)
        await getDeleteDirectory({ id: item })

        this.getDirectoryData()
      }
      this.$message({
        type: 'success',
        message: '删除成功'
      })
    },
    //  点击树节点查看具体信息
    handleNodeClick: async function (data) {
      console.log(data) //  nodeData
      //  修改标题信息
      this.metaTitle = data.label
      //  获取目录数据信息
      let res = await getDirectoryDataInfo({ id: data.id })
      console.log(res)
      this.tableData = res.data.list
    },
    // 点击分页按钮
    changeSize: async function (page) {
      console.log(page)
      this.pageSize = page
      let res = await getDirectoryDataInfo({ id: 1, pageSize: this.pageSize })
      console.log(res)
      this.tableData = res.data.list
      this.total = res.data.total
      this.pageSize = res.data.pageSize
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
