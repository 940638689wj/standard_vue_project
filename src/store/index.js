import Vue from 'vue'
import Vuex from 'vuex'
import plugins from './plugins/plugins'

// 全局通用
import globalStore from './modules/globalStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // 全局
    globalStore
  },
  plugins,
  scrict: process.env.NODE_ENV !== 'production'
})
