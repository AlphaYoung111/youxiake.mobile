<template>
  <div class="swiper">
    <swiper :options="Option">
      <!-- slides -->
      <swiper-slide>
        <img src="@/assets/img/swiper1.png" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/img/swiper2.png" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Option: {
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
.swiper {
  background-color: #fff9db;
  width: 100%;
  height: 3.2rem;
}
.swiper img {
  width: 100%;
  height: 3.2rem;
}
.swiper-pagination >>> .swiper-pagination-bullet-active {
  background: orange;
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
	bottom:4px;
}
</style>