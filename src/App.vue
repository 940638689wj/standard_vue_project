<template>
  <div id="app" v-cloak>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { getSessionUser, pseudoLogin, operLog } from '@/api'
export default {
  name: 'app',
  methods: {
    ...mapMutations('globalStore', [
      '_user'
    ])
  },
  created () {
    if (process.env.NODE_ENV !== 'production') {
       // 开发用
      pseudoLogin().then(res => {
        getSessionUser().then(res => {
          this._user(res.data)
        })
      })
    } else {
      getSessionUser().then(res => {
        this._user(res.data)
      })
    }
    // 企业访问一次就记录一下
    operLog({ chn: 1 })
  }
}
</script>

<style lang="less">
@import './assets/reset.css';
@import '~vux/src/styles/reset.less';

[v-cloak] {
  display: 'none';
}

#app {
  font-family: 'Microsoft YaHei', '微软雅黑', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f8f8f8;
  color: #1a1e24;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  position: relative;
}

body,html {
  width: 100%;
  height: 100%;
  font-size: 12.5px;
}

// 字体超出省略
.smy__text-overflow-one-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
