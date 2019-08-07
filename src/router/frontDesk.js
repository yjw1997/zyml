//  前台路由
export const FrontDesk = [{
  path: '/index',
  name: '/index',
  component: resolve => require(['@fc/index'], resolve)
  // children: [{
  //   path: '/index/home',
  //   name: '/index/home',
  //   component: resolve => require(['@fc/home/home'], resolve)
  // },
  // {
  //   path: '/index/map',
  //   name: '/index/map',
  //   component: resolve => require(['@fc/map/map'], resolve)
  // },
  // {
  //   path: '/index/api',
  //   name: '/index/api',
  //   component: resolve => require(['@fc/menu/api'], resolve)
  // },
  // {
  //   path: '/index/use',
  //   name: '/index/use',
  //   component: resolve => require(['@fc/menu/use'], resolve)
  // },
  // {
  //   path: '/index/serLog',
  //   name: '/index/serLog',
  //   component: resolve => require(['@fc/menu/serLog'], resolve)
  // },
  // {
  //   path: '/index/help',
  //   name: '/index/help',
  //   component: resolve => require(['@fc/menu/help'], resolve)
  // },
  // {
  //   path: '/index/serviceResource',
  //   name: '/index/serviceResource',
  //   component: resolve => require(['@fc/resource/serviceResource'], resolve)
  // },
  // {
  //   path: '/index/dataResource',
  //   name: '/index/dataResource',
  //   component: resolve => require(['@fc/resource/dataResource'], resolve)
  // }
  // ]
}]
