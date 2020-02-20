<template>
  <div class="tabs">
    <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide v-for="item in tabsList" :key="item.id">
            <div class="tabs-content">
              <img :src="item.imgUrl">
              <p>{{item.title}}</p>
            </div>
          </swiper-slide>
          
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
  </div>
</template>
<script>
export default {
  name:'tabs',
  data() {
    return {
      swiperOption:{
        slidesPerView:4.5,
      },
      tabsList:[
        {id:1,imgUrl:'img/tabs1.gif',title:'签证'},
        {id:2,imgUrl:'img/tabs2.png',title:'游侠超市'},
        {id:3,imgUrl:'img/tabs3.png',title:'分享会'},
        {id:4,imgUrl:'img/tabs4.gif',title:'别young之旅'},
        {id:5,imgUrl:'img/tabs5.gif',title:'瑜伽行'},
        {id:6,imgUrl:'img/tabs6.png',title:'旅拍'},
        {id:7,imgUrl:'img/tabs7.png',title:'视频'},
        {id:8,imgUrl:'img/tabs8.png',title:'游记'},
        {id:9,imgUrl:'img/tabs9.png',title:'目的地'},
        {id:10,imgUrl:'img/tabs10.png',title:'圈子'},
      ]
    }
  },
}
</script>
<style scoped>
.tabs{
  padding: .3rem 0;
}
.tabs-content img{
  display: block;
  margin: 0 auto;
  width: 0.73333333rem;
  height: 0.7333333333rem;
}
.tabs-content p{
  text-align: center;
  font-size: .343333333rem;
  
  margin-top: .1rem;
}
</style>