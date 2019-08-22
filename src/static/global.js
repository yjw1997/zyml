//  定义全局变量文件
const serverSrc =
  process.env.NODE_ENV === 'production' ? 'http://192.168.2.119:11531' : '/api'
const userData = window.sessionStorage.getItem('userData') || '8af152d8-b1b4-4e15-b2fb-eae3708183ec'
export default {
  serverSrc, // 請求地址
  userData // 用户token身份
}
