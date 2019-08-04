import Vue from 'vue'
import Router from 'vue-router'

//  前台天地图路由
import { FrontDesk } from './frontDesk'
// 后台天地图路由
import { admin } from './router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [

  ].concat(FrontDesk)
    .concat(admin)
})
