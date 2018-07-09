import axios from 'axios'
import store from '../store'
import router from '../router'

const http = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/' : '/api/',
  timeout: 5000
})
// 请求过滤器
http.interceptors.request.use(config => {
  if (config.method !== 'get') {
    let ctoken = store.state.user.user.csrfToken
    if (config.method === 'post' || config.method === 'put' || config.method === 'patch') {
      // 判断参数是否经过stringify转换
      if (typeof config.data === 'object') {
        config.data.ctoken = ctoken
      } else {
        if (config.data) {
          config.data += '&ctoken=' + ctoken
        } else {
          config.data = 'ctoken=' + ctoken
        }
      }
    } else if (config.method === 'delete') {
      if (config.url.indexOf('?') === -1) {
        config.url += '?ctoken=' + ctoken
      } else {
        config.url += '&ctoken=' + ctoken
      }
    }
  }
  return config
}, error => {
  return Promise.reject(error)
})
// 响应过滤器
http.interceptors.response.use(res => {
  switch (res.status) {
    case 200:
      if (res.data.success && !res.data.success) {
        router.push({ name: 'Error403' })
        return res.data
      } else {
        return res.data
      }
  }
}, err => {
  switch (err.response.status) {
    case 404:
      console.log('404 error')
      break
    case 500:
      console.log('500 err')
      break
    default:
      console.log('unknow err')
  }
  return Promise.reject(err)
})

export default http
