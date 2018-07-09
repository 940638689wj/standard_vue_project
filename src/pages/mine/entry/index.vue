<template>
  <div style="height: 100%">
    <view-box ref="viewBox">
      <div style="height: 200px">
        我的
      </div>
      <div style="height: 200px">
        我的
      </div>
      <div style="height: 200px">
        我的
      </div>
      <div style="height: 200px">
        我的
      </div>
    </view-box>
  </div>
</template>

<script>
import { ViewBox } from 'vux'
export default {
  name: 'Mine',
  components: {
    ViewBox
  }
}
</script>

<style lang="less">
</style>
