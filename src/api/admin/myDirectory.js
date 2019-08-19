import service from '../../https/request'
//  数据目录tree数据
export const getTreeData = data => {
  return service({
    url: '/resourceCatalog/list',
    method: 'get',
    params: data
  })
}
//  获取上级目录信息
export const getPreviousDirectoryData = data => {
  return service({
    url: '/resourceCatalog/findAll',
    method: 'get',
    params: data
  })
}
//  添加目录 --- 点击保存
export const getAddDirectorySave = data => {
  return service({
    url: '/resourceCatalog/doAdd',
    method: 'get',
    params: data
  })
}
//  删除目录
export const getDeleteDirectory = data => {
  return service({
    url: '/resourceCatalog/delete',
    method: 'get',
    params: data
  })
}
//  获取目录数据信息
export const getDirectoryDataInfo = data => {
  return service({
    url: '/resourceCatalog/SelectCatalogByID',
    method: 'get',
    params: data
  })
}
//  点击修改目录信息按钮 -- 点击保存按钮

export const getOnSubmit = data => {
  return service({
    url: '/resourceCatalog/doUpdate',
    method: 'post',
    data: data
  })
}
