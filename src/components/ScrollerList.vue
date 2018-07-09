<template lang="html">
  <scroller
    lock-x
    ref="scrollerBottom"
    :height="`${height}px`"
    :scroll-bottom-offst="height"
    :use-pulldown="true"
    :use-pullup="true"
    :pullup-config="pullupDefaultConfig"
    :pulldown-config="pulldownDefaultConfig"
    @on-pulldown-loading="onPulldown"
    @on-pullup-loading="onPullup">
    <div class="box2">
      <p v-for="i in num">placeholder {{i}}</p>
      <slot />
      <!-- <load-more tip="加载中..."></load-more> -->
    </div>
  </scroller>
</template>

<script>
import { Scroller, LoadMore } from 'vux'
export default {
  components: {
    Scroller,
    LoadMore
  },
  props: {
    height: [ Number ]
  },
  data () {
    return {
      // 上拉加载配置
      pullupDefaultConfig: {
        content: '上拉加载更多',
        pullUpHeight: 100,
        height: 40,
        autoRefresh: false,
        downContent: '释放后加载',
        upContent: '上拉加载更多',
        loadingContent: '加载中...'
      },
      // 下拉刷新配置
      pulldownDefaultConfig: {
        downContent: '下拉刷新',
        upContent: '释放后刷新',
        loadingContent: '正在刷新...'
      },
      num: 9
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.scrollerBottom.reset()
    })
  },
  methods: {
    onPulldown () {
      console.log('下拉刷新')
      this.$emit('on-pulldown-loading')
      setTimeout(() => {
        this.num = 9
        this.onPulldownDone()
      }, 1000)
    },
    // 上拉加载完成事件
    onPulldownDone () {
      setTimeout(() => {
        this.$refs.scrollerBottom.donePulldown()
        this.$refs.scrollerBottom.reset({ top: 0 }, 300, 'ease-in')
      }, 1000)
    },
    onPullup () {
      console.log('上拉加载')
      this.$emit('on-pullup-loading')
      setTimeout(() => {
        this.num = this.num + 9
        this.onPullupDone()
      }, 3000)
    },
    onPullupDone () {
      this.$refs.scrollerBottom.disablePullup()
      setTimeout(() => {
        this.$refs.scrollerBottom.donePullup()
        this.$refs.scrollerBottom.enablePullup()
      }, 3000)
    }
  }
}
</script>

<style lang="less">
</style>
