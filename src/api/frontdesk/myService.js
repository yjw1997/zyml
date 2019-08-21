import service from '../../https/request'
//  我的服务点击tree节点事件
export const getTreeDataInfo = data => {
  return service({
    url: '/ServiceManager/selectServiceByLabel',
    method: 'get',
    params: data
  })
}
//  浏览量
export const getSaveVisitNum = data => {
  return service({
    url: '/ServiceManager/saveVisitNum',
    method: 'get',
    params: data
  })
}
//  点击收藏
export const getCollectionId = data => {
  return service({
    url: '/ServiceManager/saveServiceCollect',
    method: 'get',
    params: data
  })
}
//  收藏列表
export const getCollectionList = data => {
  return service({
    url: '/ServiceManager/queryServiceCollect',
    method: 'get',
    params: data
  })
}
//  点击申请按钮
export const getApplicationId = data => {
  return service({
    url: '/ServiceManager/serverApply',
    method: 'get',
    params: data
  })
}
//  我的申请列表
export const getApplicationList = data => {
  return service({
    url: '/ServiceManager/queryApplyService',
    method: 'get',
    params: data
  })
}
