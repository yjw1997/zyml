import {
  util
} from '../util'
import Mock from 'mockjs'
var Random = Mock.Random

export const GET = {
  //  --------------------------我的服务------------------------------------------------------
  //  获取表格数据
  //  获取表格数据,点击搜索，点击分页
  '/taskData': (req, res) => {
    let url = req.url
    let page = util.getQueryString(url, 'page') // 当前页数
    console.log('page', page)
    let pageSize = util.getQueryString(url, 'pageSize') // 返回条数
    console.log('pageSize', pageSize)
    //  点击搜索按钮判断传入条件
    let approval = util.getQueryString(url, 'approval')
    console.log('approval', approval)
    let service = util.getQueryString(url, 'service')
    console.log('service', service)
    let _data = []
    //  点击搜索按钮判断传入条件
    //  搜索条件都为空--默认都点击了全部
    if (approval === '' && service === '') {
      console.log('我进入了第一步')
      let len = (1000 - pageSize * (page - 1)) < pageSize ? (1000 - pageSize * (page - 1)) : pageSize
      console.log(len)
      let i = 0
      for (i; i < len; i++) {
        _data.push(
          Mock.mock({
            'serId|1-100': 1,
            'serType|1': [
              'WMTS', 'ADDServer', 'CSW', 'GPSever', 'MAPServer', 'WCS', 'WFS-G', 'WMS-AGS', 'WFS-AGS', 'WMS-GEOSTAR', 'WFS-SUPERMAP'
            ],
            'version|1-10.1-10.1-10': 1,
            'serName|1': [
              'cn_img_CGCS2000', 'MSZT', 'BJ', 'QD_WMS_20161021', 'SXQ_WMS_20161021', 'ZZ_WMS_20161021', 'XF_WMS_20161021'
            ],
            'serByName|1': [
              '中国影像地图服务', '民生专题地图服务', '部件', '市级基础网格', '区级基础网格', '综治管理网格', '消防管理网格'
            ],
            'serAddress': Random.url(),
            'serOriAddress': null,
            'serStatus|1': [
              '0', '1'
            ],
            'serRegisterTime': Random.datetime('yyyy-MM-dd H:m:s'),
            'serUpdateTime': Random.datetime('yyyy-MM-dd H:m:s'),
            'publishUnit': '福州市林业局',
            'publishDate': null,
            'keyword': '福州,矢量,电子地图,2000',
            'summary': '国家大地2000坐标系福州市矢量电子地图',
            'delete': 0,
            'accessLimit': '授权访问',
            'useLimit': '授权访问',
            'spaceReference': '4490',
            'spaceType': null,
            'spaceResolution': null,
            'otherDesc': null,
            'approvalStatus|1': ['0', '1', ''],
            'id': null,
            'unitName': null,
            'unitAddress': null,
            'country': null,
            'province': null,
            'city': null,
            'detailDesign': null,
            'postCode': null,
            'telephone': null,
            'fax': null,
            'mailBox': null,
            'contact': null,
            'contactPosition': null,
            'updateTime': Random.datetime('yyyy-MM-dd H:m:s'),
            'state': null,
            'url': null,
            'detailAddress': null,
            'checker': null,
            'checkerStatus': null,
            'checkerTime': null,
            'remark': null,
            'change1|1': [
              '停止'
            ]
          })
        )
      }
      //  搜索条件都不为空--点击搜索且没有点击全部
    } else if (approval !== '' && service !== '') {
      console.log('我进入了第二步')
      let len = (1000 - pageSize * (page - 1)) < pageSize ? (1000 - pageSize * (page - 1)) : pageSize
      console.log(len)
      let i = 0
      for (i; i < len; i++) {
        _data.push(
          Mock.mock({
            'serId|1-100': 1,
            'serType|1': [
              'WMTS', 'ADDServer', 'CSW', 'GPSever', 'MAPServer', 'WCS', 'WFS-G', 'WMS-AGS', 'WFS-AGS', 'WMS-GEOSTAR', 'WFS-SUPERMAP'
            ],
            'version|1-10.1-10.1-10': 1,
            'serName|1': [
              'cn_img_CGCS2000', 'MSZT', 'BJ', 'QD_WMS_20161021', 'SXQ_WMS_20161021', 'ZZ_WMS_20161021', 'XF_WMS_20161021'
            ],
            'serByName|1': [
              '中国影像地图服务', '民生专题地图服务', '部件', '市级基础网格', '区级基础网格', '综治管理网格', '消防管理网格'
            ],
            'serAddress': Random.url(),
            'serOriAddress': null,
            'serStatus|1': service,
            'serRegisterTime': Random.datetime('yyyy-MM-dd H:m:s'),
            'serUpdateTime': Random.datetime('yyyy-MM-dd H:m:s'),
            'publishUnit': '福州市林业局',
            'publishDate': null,
            'keyword': '福州,矢量,电子地图,2000',
            'summary': '国家大地2000坐标系福州市矢量电子地图',
            'delete': 0,
            'accessLimit': '授权访问',
            'useLimit': '授权访问',
            'spaceReference': '4490',
            'spaceType': null,
            'spaceResolution': null,
            'otherDesc': null,
            'approvalStatus|1': approval,
            'id': null,
            'unitName': null,
            'unitAddress': null,
            'country': null,
            'province': null,
            'city': null,
            'detailDesign': null,
            'postCode': null,
            'telephone': null,
            'fax': null,
            'mailBox': null,
            'contact': null,
            'contactPosition': null,
            'updateTime': Random.datetime('yyyy-MM-dd H:m:s'),
            'state': null,
            'url': null,
            'detailAddress': null,
            'checker': null,
            'checkerStatus': null,
            'checkerTime': null,
            'remark': null,
            'change1|1': [
              '停止'
            ]
          })
        )
      }
    } else if (approval === '' && service !== '') {
      //  approval为空时，service不为空时
      console.log('我进入了第三步')

      let len = (1000 - pageSize * (page - 1)) < pageSize ? (1000 - pageSize * (page - 1)) : pageSize
      console.log(len)
      let i = 0
      for (i; i < len; i++) {
        _data.push(
          Mock.mock({
            'serId|1-100': 1,
            'serType|1': [
              'WMTS', 'ADDServer', 'CSW', 'GPSever', 'MAPServer', 'WCS', 'WFS-G', 'WMS-AGS', 'WFS-AGS', 'WMS-GEOSTAR', 'WFS-SUPERMAP'
            ],
            'version|1-10.1-10.1-10': 1,
            'serName|1': [
              'cn_img_CGCS2000', 'MSZT', 'BJ', 'QD_WMS_20161021', 'SXQ_WMS_20161021', 'ZZ_WMS_20161021', 'XF_WMS_20161021'
            ],
            'serByName|1': [
              '中国影像地图服务', '民生专题地图服务', '部件', '市级基础网格', '区级基础网格', '综治管理网格', '消防管理网格'
            ],
            'serAddress': Random.url(),
            'serOriAddress': null,
            'serStatus|1': service,
            'serRegisterTime': Random.datetime('yyyy-MM-dd H:m:s'),
            'serUpdateTime': Random.datetime('yyyy-MM-dd H:m:s'),
            'publishUnit': '福州市林业局',
            'publishDate': null,
            'keyword': '福州,矢量,电子地图,2000',
            'summary': '国家大地2000坐标系福州市矢量电子地图',
            'delete': 0,
            'accessLimit': '授权访问',
            'useLimit': '授权访问',
            'spaceReference': '4490',
            'spaceType': null,
            'spaceResolution': null,
            'otherDesc': null,
            'approvalStatus|1': ['0', '1', ''],
            'id': null,
            'unitName': null,
            'unitAddress': null,
            'country': null,
            'province': null,
            'city': null,
            'detailDesign': null,
            'postCode': null,
            'telephone': null,
            'fax': null,
            'mailBox': null,
            'contact': null,
            'contactPosition': null,
            'updateTime': Random.datetime('yyyy-MM-dd H:m:s'),
            'state': null,
            'url': null,
            'detailAddress': null,
            'checker': null,
            'checkerStatus': null,
            'checkerTime': null,
            'remark': null,
            'change1|1': [
              '停止'
            ]
          })
        )
      }
    } else if (approval !== '' && service === '') {
      console.log('我进入了第四步')
      let len = (1000 - pageSize * (page - 1)) < pageSize ? (1000 - pageSize * (page - 1)) : pageSize
      console.log(len)
      let i = 0
      for (i; i < len; i++) {
        _data.push(
          Mock.mock({
            'serId|1-100': 1,
            'serType|1': [
              'WMTS', 'ADDServer', 'CSW', 'GPSever', 'MAPServer', 'WCS', 'WFS-G', 'WMS-AGS', 'WFS-AGS', 'WMS-GEOSTAR', 'WFS-SUPERMAP'
            ],
            'version|1-10.1-10.1-10': 1,
            'serName|1': [
              'cn_img_CGCS2000', 'MSZT', 'BJ', 'QD_WMS_20161021', 'SXQ_WMS_20161021', 'ZZ_WMS_20161021', 'XF_WMS_20161021'
            ],
            'serByName|1': [
              '中国影像地图服务', '民生专题地图服务', '部件', '市级基础网格', '区级基础网格', '综治管理网格', '消防管理网格'
            ],
            'serAddress': Random.url(),
            'serOriAddress': null,
            'serStatus|1': [
              '0', '1'
            ],
            'serRegisterTime': Random.datetime('yyyy-MM-dd H:m:s'),
            'serUpdateTime': Random.datetime('yyyy-MM-dd H:m:s'),
            'publishUnit': '福州市林业局',
            'publishDate': null,
            'keyword': '福州,矢量,电子地图,2000',
            'summary': '国家大地2000坐标系福州市矢量电子地图',
            'delete': 0,
            'accessLimit': '授权访问',
            'useLimit': '授权访问',
            'spaceReference': '4490',
            'spaceType': null,
            'spaceResolution': null,
            'otherDesc': null,
            'approvalStatus|1': approval,
            'id': null,
            'unitName': null,
            'unitAddress': null,
            'country': null,
            'province': null,
            'city': null,
            'detailDesign': null,
            'postCode': null,
            'telephone': null,
            'fax': null,
            'mailBox': null,
            'contact': null,
            'contactPosition': null,
            'updateTime': Random.datetime('yyyy-MM-dd H:m:s'),
            'state': null,
            'url': null,
            'detailAddress': null,
            'checker': null,
            'checkerStatus': null,
            'checkerTime': null,
            'remark': null,
            'change1|1': [
              '停止'
            ]
          })
        )
      }
    }
    let data = {
      'total': 7,
      'list': _data,
      'pageNum': 1,
      'pageSize': 7,
      'size': 7,
      'startRow': 1,
      'endRow': 7,
      'pages': 1,
      'prePage': 0,
      'nextPage': 0,
      'isFirstPage': true,
      'isLastPage': true,
      'hasPreviousPage': false,
      'hasNextPage': false,
      'navigatePages': 8,
      'navigatepageNums': [
        1
      ],
      'navigateFirstPage': 1,
      'navigateLastPage': 1,
      'firstPage': 1,
      'lastPage': 1

    }
    return data
  },
  // 删除表格数据
  '/deleteTableData': (req, res) => {
    let url = req.url
    let page = util.getQueryString(url, 'page') // 当前页数3
    console.log('page', page)
    let pageSize = util.getQueryString(url, 'pageSize') // 返回条数3
    console.log('pageSize', pageSize)
  },
  //  点击预览按钮
  '/ServicePreview': (req, res) => {
    let url = req.url
    let id = util.getQueryString(url, 'id')
    console.log('id', id)
    let _data = []
    _data.push(
      Mock.mock({
        'serAddress': '福州数办局',
        'serType': Random.cname(),
        'version': '可以',
        'serName|1': ['账号注册', '数据目录新建', '空间数据上传', '数据申请', '服务注册'],
        'serByName|1': ['福州市委办局', '福州市国土局'],
        'serId|1': ['福州数办局', '福州委办局'],
        'summary': Random.cname(),
        'keyword|1': ['可以', '还不错'],
        'publishUnit|1': ['账号注册', '数据目录新建', '空间数据上传', '数据申请', '服务注册'],
        'publishDate|1': ['福州市委办局', '福州市国土局'],
        'unitName|1': ['福州数办局', '福州委办局'],
        'url': Random.cname(),
        'country|1': ['可以', '还不错'],
        'province|1': ['账号注册', '数据目录新建', '空间数据上传', '数据申请', '服务注册'],
        'city|1': ['福州市委办局', '福州市国土局'],
        'detailDesign|1': ['福州数办局', '福州委办局'],
        'postCode': Random.cname(),
        'telephone|1': ['可以', '还不错'],
        'fax|1': ['账号注册', '数据目录新建', '空间数据上传', '数据申请', '服务注册'],
        'mailBox|1': ['福州市委办局', '福州市国土局'],
        'contact|1': ['福州数办局', '福州委办局'],
        'contactPosition': Random.cname(),
        'accessLimit|1': ['可以', '还不错'],
        'useLimit|1': ['账号注册', '数据目录新建', '空间数据上传', '数据申请', '服务注册'],
        'x|1': ['福州市委办局', '福州市国土局'],
        'spacetype|1': ['福州数办局', '福州委办局'],
        'spaceResolution': Random.cname(),
        'ThematicType|1': ['可以', '还不错'],
        'otherInstructions|1': ['账号注册', '数据目录新建', '空间数据上传', '数据申请', '服务注册']

      })
    )
    return _data
  },
  //  点击反馈按钮
  '/getSerFeedbackTableData': (req, res) => {
    let url = req.url
    let id = util.getQueryString(url, 'id')
    console.log('id', id)
    let _data = []
    _data.push(
      Mock.mock({
        'data|1-4': [{
          // 'content': [
          'fbName|1': [Random.cname(), Random.cname(), Random.cname(), Random.cname(), Random.cname(), Random.cname(), Random.cname(), Random.cname()],
          'fbUnit|1': ['福州规划局', '福州数办局'],
          'fbTel': /^1[3456789]\d{9}$/,
          'fbTime': Random.datetime('yyyy-MM-dd'),
          'fbContent|1': ['系统稳定', '有点热']
          // ]
        }]
      })
    )
    return _data
  },
  //  点击用户---获取表格数据
  '/getViewUserData': (req, res) => {
    let url = req.url
    let pageNum = util.getQueryString(url, 'pageNum') // 当前页数3
    console.log('pageNum', pageNum)
    let pageSize = util.getQueryString(url, 'pageSize') // 返回条数3
    console.log('pageSize', pageSize)
    // //  搜索接收的参数
    let UserName = util.getQueryString(url, 'UserName')
    let appStatus = util.getQueryString(url, 'appStatus')
    let startTime = util.getQueryString(url, 'startTime')
    let endTime = util.getQueryString(url, 'endTime')
    // //  三元表达式判断是否传入值
    UserName = (UserName === '') ? [Random.cname(), Random.cname(), Random.cname(), Random.cname(), Random.cname(), Random.cname(), Random.cname(), Random.cname(), Random.cname(), Random.cname()] : UserName
    appStatus = (appStatus === '') ? [
      '0', '1'
    ] : appStatus

    // //  时间范围单独做处理
    let _data = []
    let len = (1000 - pageSize * (pageNum - 1)) < pageSize ? (1000 - pageSize * (pageNum - 1)) : pageSize
    let i = 0
    for (i; i < len; i++) {
      let viewUserTime = Random.datetime('yyyy-MM-dd')
      if (endTime !== '') {
        startTime = startTime.split('-').join('')
        endTime = endTime.split('-').join('')
        while ((viewUserTime.split('-').join('') < startTime) || (viewUserTime.split('-').join('') > endTime)) {
          viewUserTime = Random.datetime('yyyy-MM-dd')
        }
      }
      _data.push(
        Mock.mock({
          'UserName|1': UserName,
          'UserUnit|1': ['福州委办局', '福州数字办'],
          'appStatus|1': appStatus,
          'appTime': viewUserTime
        })
      )
    }
    let data = {
      'total': 7,
      'list': _data,
      'pageNum': 1,
      'pageSize': 7,
      'size': 7,
      'startRow': 1,
      'endRow': 7,
      'pages': 1,
      'prePage': 0,
      'nextPage': 0,
      'isFirstPage': true,
      'isLastPage': true,
      'hasPreviousPage': false,
      'hasNextPage': false,
      'navigatePages': 8,
      'navigatepageNums': [
        1
      ],
      'navigateFirstPage': 1,
      'navigateLastPage': 1,
      'firstPage': 1,
      'lastPage': 1

    }
    return data
  },
  //  -----------------------我的任务-------------------------------------------------------
  //  获取表格数据
  '/getPersonInfo': (req, res) => {
    let url = req.url
    let page = util.getQueryString(url, 'pageNum') // 当前页数3
    console.log('pageNum', page)
    let pageSize = util.getQueryString(url, 'pageSize') // 返回条数3
    console.log('pageSize', pageSize)
    //  搜索接收的参数
    let taskCreator = util.getQueryString(url, 'taskCreator')
    let taskName = util.getQueryString(url, 'taskName')
    let checkerStatus = util.getQueryString(url, 'checkerStatus')
    let startTime = util.getQueryString(url, 'startTime')
    let endTime = util.getQueryString(url, 'endTime')
    //  三元表达式判断是否传入值
    taskCreator = (taskCreator === '') ? ['数据办', '委办局'] : taskCreator
    taskName = (taskName === '') ? ['0', '1', '2', '3', '4'] : taskName
    checkerStatus = (checkerStatus === '') ? ['0', '1', '2'] : checkerStatus
    //  时间范围单独做处理
    let _data = []
    let len = (1000 - pageSize * (page - 1)) < pageSize ? (1000 - pageSize * (page - 1)) : pageSize
    let i = 0
    for (i; i < len; i++) {
      let taskCreatorTime = Random.datetime('yyyy-MM-dd')
      if (endTime !== '') {
        startTime = startTime.split('-').join('')
        endTime = endTime.split('-').join('')
        while ((taskCreatorTime.split('-').join('') < startTime) || (taskCreatorTime.split('-').join('') > endTime)) {
          taskCreatorTime = Random.datetime('yyyy-MM-dd')
        }
      }
      _data.push(
        Mock.mock({
          'id|1-100': 100,
          'taskCreator|1': taskCreator,
          'taskStatus|1': ['账号审批', '数据服务拥有着审批'],
          'taskName|1': taskName,
          'checkerStatus|1': checkerStatus,
          'remark|1': ['信息有误', '数据有误', '审批通过'],
          'taskCreatorTime': taskCreatorTime
        })
      )
    }
    let data = {
      'total': 7,
      'list': _data,
      'pageNum': 1,
      'pageSize': 7,
      'size': 7,
      'startRow': 1,
      'endRow': 7,
      'pages': 1,
      'prePage': 0,
      'nextPage': 0,
      'isFirstPage': true,
      'isLastPage': true,
      'hasPreviousPage': false,
      'hasNextPage': false,
      'navigatePages': 8,
      'navigatepageNums': [
        1
      ],
      'navigateFirstPage': 1,
      'navigateLastPage': 1,
      'firstPage': 1,
      'lastPage': 1

    }
    return data
  },
  // 监听已通过任务点击查看
  '/getPassShowData': (req, res) => {
    let url = req.url
    let id = util.getQueryString(url, 'id') //
    console.log('id', id)
    let _data = []
    _data.push(
      Mock.mock({
        'appUnit|1': ['福州数办局', '福州委办局'],
        'manager': Random.cname(),
        'systemName|1': ['可以', '还不错'],
        'requirement|1': ['账号注册', '数据目录新建', '空间数据上传', '数据申请', '服务注册'],
        'name|1': ['福州市委办局', '福州市国土局']
      })
    )
    return _data
  },
  //  未通过任务点击查看
  '/getNoPassShowData': (req, res) => {
    let url = req.url
    let id = util.getQueryString(url, 'id') //
    console.log('id', id)
    let _data = []
    _data.push(
      Mock.mock({
        'serAddress': '福州数办局',
        'serType': Random.cname(),
        'version': '可以',
        'serName|1': ['账号注册', '数据目录新建', '空间数据上传', '数据申请', '服务注册'],
        'serByName|1': ['福州市委办局', '福州市国土局'],
        'serId|1': ['福州数办局', '福州委办局'],
        'summary': Random.cname(),
        'keyword|1': ['可以', '还不错'],
        'publishUnit|1': ['账号注册', '数据目录新建', '空间数据上传', '数据申请', '服务注册'],
        'publishDate|1': ['福州市委办局', '福州市国土局'],
        'unitName|1': ['福州数办局', '福州委办局'],
        'url': Random.cname(),
        'country|1': ['可以', '还不错'],
        'province|1': ['账号注册', '数据目录新建', '空间数据上传', '数据申请', '服务注册'],
        'city|1': ['福州市委办局', '福州市国土局'],
        'detailDesign|1': ['福州数办局', '福州委办局'],
        'postCode': Random.cname(),
        'telephone|1': ['可以', '还不错'],
        'fax|1': ['账号注册', '数据目录新建', '空间数据上传', '数据申请', '服务注册'],
        'mailBox|1': ['福州市委办局', '福州市国土局'],
        'contact|1': ['福州数办局', '福州委办局'],
        'contactPosition': Random.cname(),
        'accessLimit|1': ['可以', '还不错'],
        'useLimit|1': ['账号注册', '数据目录新建', '空间数据上传', '数据申请', '服务注册'],
        'x|1': ['福州市委办局', '福州市国土局'],
        'spacetype|1': ['福州数办局', '福州委办局'],
        'spaceResolution': Random.cname(),
        'ThematicType|1': ['可以', '还不错'],
        'otherInstructions|1': ['账号注册', '数据目录新建', '空间数据上传', '数据申请', '服务注册']

      })
    )
    return _data
  },
  // --------------------------我的日志-----------------------------------------------
  '/getMyLogData': (req, res) => {
    let url = req.url
    let page = util.getQueryString(url, 'pageNum') // 当前页数3
    console.log('pageNum', page)
    let pageSize = util.getQueryString(url, 'pageSize') // 返回条数3
    console.log('pageSize', pageSize)
    //  搜索接收的参数
    let serName = util.getQueryString(url, 'serName')
    let serType = util.getQueryString(url, 'serType')
    let startTime = util.getQueryString(url, 'startTime')
    let endTime = util.getQueryString(url, 'endTime')
    //  三元表达式判断是否传入值
    serName = (serName === '') ? ['cn_img_CGCS2000', 'MSZT', 'BJ', 'QD_WMS_20161021', 'SXQ_WMS_20161021', 'ZZ_WMS_20161021', 'XF_WMS_20161021'] : serName
    serType = (serType === '') ? [
      '0', '1', '2', '3', '4', '5'
    ] : serType

    //  时间范围单独做处理
    let _data = []
    let len = (1000 - pageSize * (page - 1)) < pageSize ? (1000 - pageSize * (page - 1)) : pageSize
    let i = 0
    for (i; i < len; i++) {
      let interviewTime = Random.datetime('yyyy-MM-dd')
      if (endTime !== '') {
        startTime = startTime.split('-').join('')
        endTime = endTime.split('-').join('')
        while ((interviewTime.split('-').join('') < startTime) || (interviewTime.split('-').join('') > endTime)) {
          interviewTime = Random.datetime('yyyy-MM-dd')
        }
      }
      _data.push(
        Mock.mock({
          'username': Random.name(),
          'userUnit|1': ['福州委办局', '福州数字办'],
          'serName|1': serName,
          'serType|1': serType,
          'interviewTime': interviewTime,
          'duration|1': ['一小时', '两小时', '三小时'],
          'ip|1': ['192.168.203.120', '192.168.250.120'],
          'processResult|1': ['服务访问成功', '数据下载成功']
        })
      )
    }
    let data = {
      'total': 7,
      'list': _data,
      'pageNum': 1,
      'pageSize': 7,
      'size': 7,
      'startRow': 1,
      'endRow': 7,
      'pages': 1,
      'prePage': 0,
      'nextPage': 0,
      'isFirstPage': true,
      'isLastPage': true,
      'hasPreviousPage': false,
      'hasNextPage': false,
      'navigatePages': 8,
      'navigatepageNums': [
        1
      ],
      'navigateFirstPage': 1,
      'navigateLastPage': 1,
      'firstPage': 1,
      'lastPage': 1

    }
    return data
  }
}
