<template>
  <div class="spike">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="item in spikeData" :key="item.id">
        <div class="spike-content" @click="toDetail">
          <div class="spike-top">
            <img src="@/assets/img/spike1.png" />
            <span>距离结束</span>
            <count-down
              :currentTime="item.startTime"
              :startTime="item.startTime"
              :endTime="item.endTime"
              :dayTxt="'天'"
              :hourTxt="':'"
              :minutesTxt="':'"
              :secondsTxt="'秒'"
            ></count-down>
          </div>
          <div class="spike-bottom">
            <img :src="item.imgUrl" alt />
            <div class="bottom-title">
              <p>{{item.title}}</p>
              <div class="bottom-price">
                <span>￥{{item.price}}</span>
                <p>剩下{{item.num}}个</p>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import CountDown from 'vue2-countdown'
export default {
  props: {
    spikeData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  components: {
    CountDown
  },
  methods:{
    toDetail(){
      this.$router.push('/detail')
    }
  }
}
</script>
<style scoped>
.spike {
  height: 4.3777777rem;
  width: 100%;
}
.spike-content {
  padding: 0.3rem;
}
.spike-top {
  height: 1.293rem;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 0.35rem;
}
.spike-top img {
  height: 0.413333rem;
  width: 1.893333rem;
}
.spike-top span {
  margin-left: 0.15rem;
}
.spike-top > div {
  margin-left: 0.15rem;
}
.spike-top >>> div span:not(:first-child) {
  color: #fff;
  border-radius: 0.1rem;
  background-color: #8b8b8b;
  margin-left: 0.2rem;
  padding: 0.1rem;
}
.spike-bottom {
  display: flex;
  justify-content: space-between;
}
.spike-bottom img {
  width: 3.09333rem;
  height: 2.12rem;
}
.spike-bottom .bottom-title {
  color: #333;
  width: 5.86rem;
}
.spike-bottom .bottom-title p {
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  display: -webkit-box;
  font-size: 0.35rem;
  line-height: 0.38rem;
}
.spike-bottom .bottom-title .bottom-price {
  margin-top: 0.8rem;
  font-size: 0.35rem;
  display: flex;
  justify-content: space-between;
}
.spike-bottom .bottom-title .bottom-price p {
  border: 1px solid #444;
  border-radius: 0.1rem;
  background-color: #fed101;
  padding: 0.1rem;
}
.swiper-container {
  overflow: visible;
}
.swiper-pagination >>> .swiper-pagination-bullet-active {
  background: orange;
}
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: -0.5rem;
}
</style>