import request from '../request'

export function getHomeTableList (data) {
  return request.get( // 获取列表
    '/Api/home/list',
    { params: data }
  )
}

export function getReportDtl (data) {
  return request.get( // 获取列表
    '/Api/home/detail',
    { params: data }
  )
}
