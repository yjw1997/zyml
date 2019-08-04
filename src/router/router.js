//  后台路由

export const admin = [
  {
    path: '/admin',
    name: 'info',
    component: resolve => require(['@/components/admin/info'], resolve),
    children: [
      //  我的任务
      {
        path: '/admin/mytask',
        name: '/admin/mytask',
        component: resolve => require(['@admin/mytask/index'], resolve)
      },
      //  我的服务
      {
        path: '/admin/myService',
        name: '/admin/myService',
        component: resolve => require(['@admin/myService/index'], resolve),
        children: [
          //  我注册的服务
          {
            path: '/admin/myService/resService',
            name: '/admin/myService/resService',
            component: resolve => require(['@admin/myService/components/resService'], resolve)
          },
          //  我申请的服务
          {
            path: '/admin/myService/appService',
            name: '/admin/myService/appService',
            component: resolve => require(['@admin/myService/components/appService'], resolve)
          }
        ]
      },
      //  我的数据
      {
        path: '/admin/mydata',
        name: '/admin/mydata',
        component: resolve => require(['@admin/mydata/index'], resolve)
      },
      //  我的日志
      {
        path: '/admin/myLog',
        name: '/admin/myLog',
        component: resolve => require(['@admin/myLog/index'], resolve)
      }
    ]
  }

]
