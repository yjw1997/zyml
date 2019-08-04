<template>
  <div id="inputList">
    <el-form :inline="true"
             :model="formInline"
             class="demo-form-inline">
      <el-form-item :label="title[0]">
        <el-input v-model="formInline.unit"
                  size="small"
                  style="width:150px"
                  placeholder=""></el-input>
      </el-form-item>
      <el-form-item :label="title[1]">
        <el-select v-model="formInline.process"
                   size="small"
                   style="width:150px"
                   placeholder="">
          <el-option v-for="item in process"
                     :label="item.name"
                     :value="item.id"
                     :key="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item v-show="show"
                    :label="title[2]">
        <el-select v-model="formInline.status"
                   size="small"
                   style="width:150px"
                   placeholder="">
          <el-option v-for="item in status"
                     :label="item.name"
                     :value="item.id"
                     :key="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item :label="title[3]"
                    required>
        <el-col :span="11">
          <el-form-item>
            <el-date-picker v-model="formInline.time"
                            size="small"
                            style="width:250px"
                            type="daterange"
                            range-separator="-"
                            value-format='yyyy-MM-dd'
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item class="fr">
        <el-button type="primary"
                   @click="onSubmit"
                   size="small">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'inputList',
  props: {
    title: {
      type: Array,
      default: () => {
        return []
      }
    },
    process: {
      type: Array,
      default: () => {
        return []
      }
    },
    status: {
      type: Array,
      default: () => {
        return []
      }
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      formInline: {
        process: '',
        status: '',
        time: '',
        unit: ''

      }
    }
  },
  methods: {
    //  点击查询按钮
    onSubmit () {
      // 解析时间格式
      if (this.formInline.time !== '') {
        this.formInline.starTime = this.formInline.time[0]
        this.formInline.endTime = this.formInline.time[1]
      }
      // 子组件向父组件传值
      this.$emit('sendMsg', this.formInline)
      // console.log(this.formInline)
    }
  }
}
</script>
<style lang="less" scoped>
#inputList {
  padding: 10px;
}
</style>
