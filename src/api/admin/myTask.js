import service from '../../https/request'

export const getPersonInfo = data => {
  return service({
    url: '/getPersonInfo',
    method: 'get',
    params: data
  })
}
export const getPassShowData = data => {
  return service({
    url: '/getPassShowData',
    method: 'get',
    params: data
  })
}
export const getNoPassShowData = data => {
  return service({
    url: '/getNoPassShowData',
    method: 'get',
    params: data
  })
}
