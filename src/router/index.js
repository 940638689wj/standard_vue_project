import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/pages/layout'
import home from './home'
import operation from './operation'
import order from './order'
import mine from './mine'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        ...home,
        ...operation,
        ...order,
        ...mine
      ]
    }
  ]
})

router.afterEach((to, from) => {
  // 关闭加载进度条
  if (to.meta.name) {
    window.document.title = to.meta.name
  }
})

export default router
