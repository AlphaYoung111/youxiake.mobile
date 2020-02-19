<template>
  <div class="banner">
    <div v-show="false">黑色</div>
    <div class="banner-header">
      <div class="banner-top">
        <div class="top-left">
          北京
          <i class="iconfont">&#xe6aa;</i>
        </div>
        <div class="top-search">
          <i class="iconfont">&#xe64d;</i>泰国
        </div>
        <div class="top-right">
          <img src="@/assets/img/show.png" alt />
        </div>
      </div>
      <!-- 轮播区域 -->
      <div class="banner-swiper">
        <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
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
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>
<style scoped>
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
  padding:.2rem .4rem ;
}
.top-search {
  flex: 1;
  color: #333;
  background: #fff;
  border-radius: .1rem;
  font-size: .373333rem;
  padding:.2rem;
}
.top-right {
  padding:.2rem 0.4rem;
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