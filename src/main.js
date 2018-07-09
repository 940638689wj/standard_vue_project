// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'
import App from './App'
// import request from './api/request'

import getCode from './utils/getCode'

Vue.use(VueRouter)
Vue.use(getCode)

FastClick.attach(document.body)

Vue.config.productionTip = false
// Vue.prototype.$http = request

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
