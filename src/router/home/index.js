export default [
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/pages/home/entry'),
    meta: {
      name: '首页'
    }
  }
]
