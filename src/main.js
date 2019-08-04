// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './mock_utils/index'
// // 定义全局变量
// Vue.prototype.$post = post
// Vue.prototype.$fetch = fetch
// Vue.prototype.$patch = patch
// Vue.prototype.$put = put // 引用文件
//  挂载全局变量文件
import global_ from './static/global'

// 引入mockjs
// require('./mock.js')
axios.defaults.baseURL = process.env.API_ROOT

Vue.use(VueAxios, axios)

// import { post, fetch, patch, put } from './https/request'

Vue.use(ElementUI)
Vue.prototype.GLOBAL = global_ // 挂载到Vue实例上面

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
