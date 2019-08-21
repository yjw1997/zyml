// request.js
import axios from 'axios'
import qs from 'qs'
const userData =
  window.sessionStorage.getItem('userData') ||
  '8af152d8-b1b4-4e15-b2fb-eae3708183ec'

/** **** 创建axios实例 ******/
const service = axios.create({
  baseURL: process.env.BASE_URL, // api的base_url
  timeout: 3000 // 请求超时时间
})

//  发送url之前拦截
service.interceptors.request.use(
  config => {
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
    // config.data = JSON.stringify(config.data)
    config.headers = {
      access_token: userData
    }
    // console.log('config1111111', config)
    //  get post 请求加入参数access_token
    if (config.method === 'get' || config.method === 'GET') {
      config.params.access_token = userData
      // console.log('我是get')
    } else if (config.method === 'post' || config.method === 'POST') {
      // console.log('我是POST')
      config.data.access_token = userData
    }
    return config

  },
  error => {
    return Promise.reject(error)
  }
)

// http response 拦截器
service.interceptors.response.use(
  response => {
    console.log(response)
    //  如果不存在id字段分页中给他加一个id  防止后台发id1是乱码的情况
    //  如果是分页
    // console.log(response.data.size)
    // if (response.data.size !== undefined) {
    //   let num = 0
    //   for (var value of response.data.list) {
    //     value.id =
    //       (response.data.pageNum - 1) * response.data.pageSize + 1 + num
    //     num++
    //   }
    // }
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

// /** **** request拦截器==>对请求参数做处理 ******/
// service.interceptors.request.use(config => {
//   // app.$vux.loading.show({
//   //   text: '数据加载中……'
//   // })

//   config.method === 'post'
//     ? config.data = qs.stringify({ ...config.data })
//     : config.params = { ...config.params }
//   config.headers['Content-Type'] = 'application/x-www-form-urlencoded'

//   return config
// }, error => { // 请求错误处理
//   // app.$vux.toast.show({
//   //   type: 'warn',
//   //   text: error
//   // })
//   Promise.reject(error)
// })

// /** **** respone拦截器==>对响应做处理 ******/
// service.interceptors.response.use(
//   response => { // 成功请求到数据
//     // app.$vux.loading.hide()
//     // 这里根据后端提供的数据进行对应的处理
//     if (response.data.result === 'TRUE') {
//       return response.data
//     } else {
//       // app.$vux.toast.show({ // 常规错误处理
//       //   type: 'warn',
//       //   text: response.data.data.msg
//       // })
//     }
//   },
//   error => { // 响应错误处理
//     console.log('error')
//     console.log(error)
//     console.log(JSON.stringify(error))

//     // let text = JSON.parse(JSON.stringify(error)).response.status === 404
//     // ? '404'
//     // : '网络异常，请重试'
//     // app.$vux.toast.show({
//     //   type: 'warn',
//     //   text: text
//     // })

//     return Promise.reject(error)
//   }
// )

export default service
