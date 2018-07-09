import DingTalk from 'DingTalk'
import request from '@/api/request'
import store from '../store'
const $qs = require('querystring').stringify

function getConfig (url) {
  return new Promise((resolve, reject) => {
    let data = {
      url: encodeURI(window.location.href.substring(0, window.location.href.indexOf('#')))
    }
    request.post(url, $qs(data)).then(res => {
      // alert('config')
      // 钉钉配置
      DingTalk.config({
        agentId: res.agentid,
        corpId: res.corpid,
        timeStamp: res.timeStamp,
        nonceStr: res.nonceStr,
        signature: res.signature,
        jsApiList: [
          'runtime.permission.requestAuthCode'
        ]
      })
      console.log('钉钉 ready')
      // 钉钉初始化
      DingTalk.ready(() => {
        console.log('钉钉 ready into')
        // 钉钉免登
        resolve(res)
      })
      // 异常抛出
      DingTalk.error(error => {
        reject(error)
      })
    })
  })
}

const install = function (Vue, options) {
  // 1. 添加全局方法或属性
  getConfig('https://oa.dingcloud.com.cn/ding-ssm-demo/ticket/getconfig').then(res => {
    store.commit('globalStore/_config', res)
    DingTalk.runtime.permission.requestAuthCode({
      corpId: res.corpid,
      onSuccess (result) {
        store.commit('globalStore/_config', result)
      },
      onFail (err) {
        console.log(JSON.stringify(err))
      }
    })
    Vue.prototype.$DingTalk = DingTalk
  }).catch(err => {
    console.log('error:' + JSON.stringify(err))
  })
}

export default {
  install
}
