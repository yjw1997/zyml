import service from '../../https/request'
//  我注册的服务
export const getTableData = data => {
  return service({
    url: '/ServiceManager/myRegisterService',
    method: 'get',
    params: data
  })
}
//  我申请的服务
export const getApplyServiceTableData = data => {
  return service({
    url: '/ServiceManager/myRegisterService',
    method: 'get',
    params: data
  })
}
//  表格数据点击预览按钮
export const ServicePreview = data => {
  return service({
    url: '/ServiceManager/selectByID',
    method: 'get',
    params: data
  })
}
//  表格数据点击反馈按钮

export const getSerFeedbackTableData = data => {
  return service({
    url: '/getSerFeedbackTableData',
    method: 'get',
    params: data
  })
}
//  用户---获取表格数据
export const getViewUserData = data => {
  return service({
    url: '/getViewUserData',
    method: 'get',
    params: data
  })
}
//  点击运行/停止
export const getshowOperating = data => {
  return service({
    url: '/ServiceManager/updateRunStatusById',
    method: 'get',
    params: data
  })
}
