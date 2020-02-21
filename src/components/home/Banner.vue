<template>
  <div class="banner">
    <transition enter-active-class="bounceInLeft" leave-active-class="bounceOutLeft">
      <div class="banner-left animated" v-show="showSlide">黑色</div>
    </transition>
    <div class="banner-header">
      <div class="banner-top">
        <div class="top-left" @click="toCity">
          {{cityName}}
          <i class="iconfont">&#xe6aa;</i>
        </div>
        <div class="top-search">
          <i class="iconfont">&#xe64d;</i>泰国
        </div>
        <div class="top-right">
          <img src="@/assets/img/show.png" @click="toShow" />
        </div>
      </div>
      <!-- 轮播区域 -->
      <div class="banner-swiper">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide>
            <img src="@/assets/img/banner1.png" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/img/banner2.png" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/img/banner3.png" alt />
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      showSlide: false
    }
  },
  computed:{
    ...mapState(['cityName'])
  },
  methods: {
    toShow() {
      this.showSlide = !this.showSlide
    },
    toCity(){
      this.$router.push('/city')
    }
  }
}
</script>
<style scoped>
.banner-left {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999;
  background: #000;
  height: 100%;
  width: 6.666rem;
}
.banner-header {
  position: relative;
  width: 100%;
  height: 5.6rem;
  background-color: red;
}
.banner-top {
  position: absolute;
  left: 0;
  top: 0.4rem;
  height: 0.8rem;
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.top-left {
  color: #fff;
  font-size: 0.4266666rem;
  padding: 0.2rem 0.4rem;
}
.top-search {
  flex: 1;
  color: #333;
  background: #fff;
  border-radius: 0.1rem;
  font-size: 0.373333rem;
  padding: 0.2rem;
}
.top-right {
  padding: 0.2rem 0.4rem;
}
.top-right img {
  widows: 0.53333rem;
  width: 0.53333rem;
}
.banner-swiper {
  width: 100%;
  height: 100%;
}
.banner-swiper img {
  width: 100%;
  height: 100%;
}
.swiper-pagination >>> .swiper-pagination-bullet-active {
  background: orange;
}
</style>