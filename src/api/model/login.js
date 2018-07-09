import request from '../request'

export function getSessionUser (data) {
  return request.get( // 获取列表
    '/v2/sessionUser/info',
    { params: data }
  )
}

export function pseudoLogin (data) {
  return request.get( // 获取列表
    '/index?userid=52&epid=6',
    { params: data }
  )
}

export function operLog (data) {
  return request.get( // 获取列表
    '/operlog/login',
    { params: data }
  )
}
