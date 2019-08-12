<template>
  <div class="timeInfo ib">
    <span class="year">{{year}}</span>
    -
    <span class="month">{{month}}</span>
    <span class="day">{{dates}}</span>
  </div>
</template>
<script>
export default {
  name: 'timeInfo',
  data () {
    return {
      year: '',
      month: '',
      dates: ''
    }
  },
  mounted () {
    var date = new Date()// 实例一个时间对象；
    var Year = date.getFullYear()// 获取系统的年；
    var Month = date.getMonth() + 1// 获取系统月份，由于月份是从0开始计算，所以要加1
    var Dates = date.getDate()// 获取系统日期,
    //  在数值前面加0
    if (Month < 10) {
      Month = '0' + Month
    }
    if (Dates < 10) {
      Dates = '0' + Dates
    }
    this.year = Year
    this.month = Month
    this.dates = Dates
  }
}
</script>
<style lang="less" scoped>
.timeInfo {
  padding: 5px 10px;
}
.year .month {
  font-size: 14px;
  font-weight: 400;
}
.day {
  font-size: 38px;
  display: block;
}
</style>
