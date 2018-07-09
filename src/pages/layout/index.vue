<template>
  <div style="height: 100%"
    @touchmove="touchFalse"
    @touchstart="touchstart"
    @touchend="touchend">
    <view-box ref="viewBox"
      :body-padding-bottom="0">
      <transition :name="transitionName">
        <keep-alive :include="keepAliveList">
          <router-view/>
        </keep-alive>
      </transition>
      <BottomBar
        v-show="isMain"
        slot="bottom"
      />
    </view-box>
  </div>
</template>

<script>
import { ViewBox } from 'vux'
import BottomBar from './subPages/BottomBar'
export default {
  components: {
    ViewBox,
    BottomBar
  },
  data () {
    return {
      isMain: true,
      keepAliveList: [
        'Home',
        'Operation',
        'Order',
        'Mine'
      ],
      transitionName: '',
      vueTouches: {
        x: '',
        y: ''
      },
      startPosition: '',
      endPosition: ''
    }
  },
  watch: {
    '$route' (to, from) {
      if (['Home', 'Operation', 'Order', 'Mine'].indexOf(to.name) === -1 && ['Home', 'Operation', 'Order', 'Mine'].indexOf(from.name) === -1) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      } else {
        this.transitionName = ''
      }
      this.isMain = ['Home', 'Operation', 'Order', 'Mine'].indexOf(to.name) !== -1
    }
  },
  methods: {
    // 开始滑动
    touchstart (e) {
      if (this.isMain) {
        this.vueTouches = { x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY }
      }
    },
    // 滑动事件 - 滑动结束
    touchend (e) {
      if (!this.isMain) {
        let disX = e.changedTouches[0].pageX - this.vueTouches.x  // 计算移动的位移差
        let disY = e.changedTouches[0].pageY - this.vueTouches.y
        if (Math.abs(disX) > 10 || Math.abs(disY) > 100) {
          if (disX > 50) {
            this.$router.go(-1)
          }
        }
      }
    },
    // 阻止默认滑动事件
    touchFalse (e) {
      if (!this.isMain) {
        e.preventDefault()
      }
    }
  }
}
</script>

<style lang="less">
  /* 左滑 */
  .slide-left-enter-active, .slide-left-leave-active {
    transition: all .5s;
  }
  .slide-left-enter, .slide-left-leave-active {
    opacity: 0;
  }
  .slide-left-enter {
    transform: translateX(50px);
  }
  .slide-left-leave-active {
    transform: translateX(-50px);
  }
  /* 右滑 */
  .slide-right-enter-active, .slide-right-leave-active {
    transition: all .5s;
  }
  .slide-right-enter, .slide-right-leave-active {
    opacity: 0;
  }
  .slide-right-enter {
    transform: translateX(-50px);
  }
  .slide-right-leave-active {
    transform: translateX(50px);
  }
  /* 页面切换 动态效果 */

  // 全局样式

  .smy__header-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.6rem;
    margin-bottom: 1rem;

    > .smy__title {
      font-size: 16px;
      font-weight: bold;
    }

    > .smy__title::before {
      padding-right: 0.8rem;
      margin-bottom: 0.2rem;
      content: ' ';
      height: 16px;
      display: inline-block;
      vertical-align: middle;
      line-height: 16px;
      border-left: 2px solid #3ccba6;
    }
  }
  // ——————————————————————全局样式——————————————————————————————
</style>
