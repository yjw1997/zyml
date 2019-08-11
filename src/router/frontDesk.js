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
    },
    //  服务目录
    {
      path: '/index/service',
      name: 'service',
      component: resolve => require(['@fd/service/index'], resolve)
    },
    //  平台帮助
    {
      path: '/index/help',
      name: 'help',
      component: resolve => require(['@fd/help/index'], resolve)
    }
  ]
}

]
