<template lang="html">
  <div class="tabbar">
    <tabbar
      style="background: #fff; border-top: none">
      <tabbar-item
        icon-class="tabbar-icon"
        tabbar-text-active-color="#3ccba6"
        v-for="(item, index) in tabbarButton"
        :key="index"
        :selected="item.routerName === $route.name"
        @on-item-click="$router.push({ name: item.routerName })">
        <img slot="icon" :src="item.icon">
        <img slot="icon-active" :src="item.iconActive">
        <span slot="label">
          {{item.title}}
        </span>
         <!-- #7f8184 -->
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  name: 'BottomBar',
  components: {
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      tabbarButton: [
        {
          title: '首页',
          routerName: 'Home',
          icon: '/static_mobile/tabbarIcon/home.png',
          iconActive: '/static_mobile/tabbarIcon/home_green.png'
        },
        {
          title: '运营',
          routerName: 'Operation',
          icon: '/static_mobile/tabbarIcon/operation.png',
          iconActive: '/static_mobile/tabbarIcon/operation_green.png'
        },
        {
          title: '工单',
          routerName: 'Order',
          icon: '/static_mobile/tabbarIcon/order.png',
          iconActive: '/static_mobile/tabbarIcon/order_green.png'
        },
        {
          title: '我的',
          routerName: 'Mine',
          icon: '/static_mobile/tabbarIcon/mine.png',
          iconActive: '/static_mobile/tabbarIcon/mine_green.png'
        }
      ]
    }
  }
}
</script>

<style lang="less">
  .tabbar .tabbar-icon img{
    margin-top: 4px;
    width: 80%;
    height: 80%;
  }
  .tabbar .weui-tabbar::before {
    border-color: #f8f8f8;
  }
</style>
