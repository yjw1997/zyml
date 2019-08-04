<template>
  <div id="title">
    {{titleName}}
  </div>
</template>
<script>
export default {
  name: 'title',
  props: {
    titleName: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="less" scoped>
#title {
  background-color: grey;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 5px;
  color: white;
}
</style>
