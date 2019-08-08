//  前台路由
export const FrontDesk = [{
  path: '/index',
  name: '/index',
  component: resolve => require(['@fd/index'], resolve),
  children: [
    //  首页
    {
      path: '/index/home',
      name: 'home',
      component: resolve => require(['@fd/home/index'], resolve)
    }
  ]
}

]
