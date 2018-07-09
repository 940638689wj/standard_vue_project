<template>
  <div class="page-home">
    <view-box ref="viewBox">
      <header class="header">
        <!-- 顶部导航 -->
        <div class="header-nav">
          <div class="city">
            厦门
            <img class="icon" src="../../../assets/icon/arrow_down.png">
          </div>
          <div class="user">
            <span class="user-name">张三</span>
            <span class="user-role">系统管理员</span>
            <img class="icon" src="../../../assets/icon/role_change.png">
            <!-- <img class="icon" src="../../../assets/icon/bell.png"> -->
          </div>
        </div>

        <!-- 轮播图 -->
        <swiper
          auto
          loop
          height="130px"
          dots-position="center"
          dots-class="dots-class"
          style="margin: 0 auto"
          :aspect-ratio="300/800"
          :interval="5000">
          <swiper-item class="banner-list">
            <img src="../../../assets/icon/banner1.png" width="100%" height="100%">
          </swiper-item>
          <swiper-item class="banner-list">
            <img src="../../../assets/icon/banner1.png" width="100%" height="100%">
          </swiper-item>
          <swiper-item class="banner-list">
            <img src="../../../assets/icon/banner1.png" width="100%" height="100%">
          </swiper-item>
          <swiper-item class="banner-list">
            <img src="../../../assets/icon/banner1.png" width="100%" height="100%">
          </swiper-item>
        </swiper>

        <!-- 公告 -->
        <div class="notice">
          <img class="icon" src="../../../assets/icon/notice.png">
          <swiper
            auto
            height="30px"
            direction="vertical"
            :interval="5000"
            style="flex: 1"
            class="text-scroll"
            :show-dots="false">
            <swiper-item>
              <p class="content smy__text-overflow-one-line">义务爱了 完成传奇世界H5-王者归来任务 获得20金币1111</p>
            </swiper-item>
            <swiper-item>
              <p class="content smy__text-overflow-one-line">基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币11111</p>
            </swiper-item>
            <swiper-item>
              <p class="content smy__text-overflow-one-line">零哥章魚 完成传奇世界H5-王者归来任务 获得30金币2222</p>
            </swiper-item>
          </swiper>
          <span class="btn">查看</span>
        </div>
      </header>

      <!-- 代办事项 -->
      <div class="home-list">
        <div class="smy__header-title">
          <div class="smy__title">
            代办事项
          </div>
          <div class="smy__btn">
            设置工作台
          </div>
        </div>
        <SmyGrid
          class="grid-body"
          :cols="4">
          <SmyGridItem
            v-for="(item, index) in toDoList"
            :key="index">
            <div slot="num" class="num">{{item.num}}</div>
            <div slot="label">{{item.label}}</div>
          </SmyGridItem>
        </SmyGrid>
      </div>

      <div class="line"/>

      <!-- 功能导航 -->
      <div class="home-list">
        <div class="smy__header-title">
          <div class="smy__title">
            功能导航
          </div>
        </div>
        <SmyGrid
          class="grid-body"
          :cols="4">
          <SmyGridItem
            v-for="(item, index) in funNavList"
            :key="index">
            <img slot="icon" :src="item.icon">
            <div slot="label">{{item.label}}</div>
          </SmyGridItem>
        </SmyGrid>
      </div>
    </view-box>
  </div>
</template>

<script>
import { ViewBox, Swiper, SwiperItem } from 'vux'
import SmyGrid from '@/components/SmyGrid/SmyGrid'
import SmyGridItem from '@/components/SmyGrid/SmyGridItem'
export default {
  name: 'Home',
  components: {
    ViewBox,
    Swiper,
    SwiperItem,
    SmyGrid,
    SmyGridItem
  },
  data () {
    return {
      bannerList: [
        { img: '' }
      ],
      toDoList: [
        { num: 1, label: '代办事项' },
        { num: 11, label: '代办事项' },
        { num: 21, label: '代办事项' },
        { num: 55, label: '代办事项' },
        { num: 16, label: '代办事项' },
        { num: 99, label: '代办事项' }
      ],
      funNavList: [
        { icon: '/static_mobile/tabbarIcon/home.png', label: '功能导航' },
        { icon: '/static_mobile/tabbarIcon/home.png', label: '功能导航' },
        { icon: '/static_mobile/tabbarIcon/home.png', label: '功能导航' },
        { icon: '/static_mobile/tabbarIcon/home.png', label: '功能导航' },
        { icon: '/static_mobile/tabbarIcon/home.png', label: '功能导航' },
        { icon: '/static_mobile/tabbarIcon/home.png', label: '功能导航' }
      ]
    }
  },
  created () {
  }
}
</script>

<style lang="less" scoped>
  .page-home {
    height: 100%;
    background: #fff;
    .header {
      padding: 0 1rem;
      margin-bottom: 1rem;

      > .header-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 4rem;
        font-size: 14px;

        > .city {
          > .icon {
            margin-left: 0.2rem;
            height: 6px;
            padding: 1px;
          }
        }

        > .user {
          display: flex;
          align-items: center;

          > .user-role {
            display: inline-block;
            font-size: 10px;
            border: 1px solid #3ccba6;
            background: #f1fbf9;
            border-radius: 0.32rem;
            padding: 0.08rem 0.4rem;
            margin-left: 0.6rem;
            color: #3ccba6;
          }

          > .icon {
            margin-left: 0.6rem;
            height: 18px;
            width: 18px;
            padding: 1px;
          }
        }
      }
      .banner-list {
        border-radius: 4px;
        overflow: hidden;
      }

      > .notice {
        height: 3.4rem;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #f2f2f2;

        > .icon {
          width: 12.5px;
          height: 12.5px;
          margin-right: 0.6rem;
        }

        .content {
          line-height: 2.4rem;
          color: #7f8184;
        }

        > .btn {
          margin-left: 0.6rem;
          color: #3ccba6;
        }
      }
    }

    .line {
      border-bottom: 1px solid #f2f2f2;
      margin: 0 1rem;
      margin-bottom: 1.2rem;
    }

    .home-list {
      padding: 0 1rem;
      margin-bottom: 1rem;
      .smy__btn {
        color: #3ccba6;
      }

      .grid-body {
        display: flex;
        flex-wrap: wrap;
        .num {
          font-size: 20px;
          font-weight: bold;
          color: #333;
        }

        .label {
          font-size: 12px;
        }
      }
    }
  }
</style>
<style lang="less">
  .page-home  .vux-slider > .vux-indicator > a > .vux-icon-dot, .vux-slider .vux-indicator-right > a > .vux-icon-dot {
    width: 1.2rem;
    height: 0.16rem;
    opacity: .4;
  }
</style>
