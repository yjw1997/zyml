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
    //  首页--通知公告--点击更多
    {
      path: '/index/moreNews',
      name: 'moreNews',
      component: resolve => require(['@fd/home/components/moreNews'], resolve)
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
    },
    //  示例应用
    {
      path: '/index/sample',
      name: 'sample',
      component: resolve => require(['@fd/sample/index'], resolve)

    },
    //  案例详情
    {
      path: '/index/casedetail',
      name: 'casedetail',
      component: resolve => require(['@fd/sample/components/casedetail'], resolve)
    }
  ]
}

]
