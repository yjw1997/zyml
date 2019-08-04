import service from '../../https/request'

export const getMyLogData = data => {
  return service({
    url: '/getMyLogData',
    method: 'get',
    params: data
  })
}
