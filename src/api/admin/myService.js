import service from '../../https/request'

export const getTableData = data => {
  return service({
    url: '/taskData',
    method: 'get',
    params: data
  })
}
//  表格数据点击预览按钮
export const ServicePreview = data => {
  return service({
    url: '/ServicePreview',
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
