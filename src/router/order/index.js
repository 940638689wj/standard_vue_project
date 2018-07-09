export default [
  {
    path: '/order',
    name: 'Order',
    component: () => import('@/pages/order/entry'),
    meta: {
      name: '工单'
    }
  }
]
