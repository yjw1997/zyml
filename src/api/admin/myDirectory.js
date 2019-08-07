import service from '../../https/request'
//  数据目录tree数据
export const getTreeData = data => {
  return service({
    url: '/getTreeData',
    method: 'get',
    params: data
  })
}
//  获取上级目录信息
export const getPreviousDirectoryData = data => {
  return service({
    url: '/getPreviousDirectoryData',
    method: 'get',
    params: data
  })
}
//  添加目录 --- 点击保存
export const getAddDirectorySave = data => {
  return service({
    url: '/getAddDirectorySave',
    method: 'get',
    params: data
  })
}
//  删除目录
export const getDeleteDirectory = data => {
  return service({
    url: '/getDeleteDirectory',
    method: 'get',
    params: data
  })
}
//  获取目录数据信息
export const getDirectoryDataInfo = data => {
  return service({
    url: '/Catalog/selectByID',
    method: 'get',
    params: data
  })
}
