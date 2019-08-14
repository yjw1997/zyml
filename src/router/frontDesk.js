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
    //  首页--建议列表
    {
      path: '/index/suggest',
      name: 'suggest',
      component: resolve => require(['@fd/home/components/suggest'], resolve)
    },
    //  登陆
    {
      path: '/index/login',
      name: 'login',
      component: resolve => require(['@fd/components/login'], resolve)
    },
    //  注册
    {
      path: '/index/register',
      name: 'register',
      component: resolve => require(['@fd/components/register'], resolve)
    },
    //  服务目录
    {
      path: '/index/service',
      name: 'service',
      component: resolve => require(['@fd/service/index'], resolve)
    },
    //  服务目录 -- 服务详情
    {
      path: '/index/service/serviceDetails',
      name: 'serviceDetails',
      component: resolve => require(['@fd/service/components/serviceDetails'], resolve)
    },
    //  服务目录 -- 服务详情 -- 收藏界面
    {
      path: '/index/service/collection',
      name: 'collection',
      component: resolve => require(['@fd/service/components/collection'], resolve)
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
    },
    //  开发者中心 -- 文档中心
    {
      path: '/index/documentCenter',
      name: 'documentCenter',
      component: resolve => require(['@fd/development/components/documentCenter'], resolve)
    },
    //  开发者中心 -- 示例代码
    {
      path: '/index/sampleCode',
      name: 'sampleCode',
      component: resolve => require(['@fd/development/components/sampleCode'], resolve)
    },
    //  电子地图
    {
      path: '/index/digitalMap',
      name: 'digitalMap',
      component: resolve => require(['@fd/digitalMap/index'], resolve)
    }
  ]
}

]
