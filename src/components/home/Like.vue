<template>
  <div class="like">
    <div class="like-list" v-for="item in likeList" :key="item.title">
      <div class="like-top">
        <div class="top-left">
          <span>{{item.title}}</span>
        </div>
        <p class="top-right">更多></p>
      </div>
      <div class="like-bottom">
        <div
          class="bottom-header"
          :style="{'background':'url('+item.imgUrl+')  no-repeat center center'}"
          @click="toDetail"
        >
          <div class="header-info">
            <span>{{item.Introduction}}</span>
            <span>￥{{item.price}}起</span>
          </div>
        </div>
        <ul>
          <li v-for="city in item.cityList" :key="city.id" @click="toDetail">
            <img :src="city.imgUrl" alt />
            <span>{{city.title}}</span>
            <span>￥{{city.price}}起</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    likeList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods:{
    toDetail(){
      this.$router.push('/detail')
    }
  }
}
</script>
<style scoped>
.like {
  margin-top: 0.7rem;
  font-size: 0.35rem;
  padding-bottom: 5rem;
}
.like-list {
  margin-top: 0.4rem;
}
.like-top {
  display: flex;
  justify-content: space-between;
}
.like-top .top-left {
  position: relative;
}
.like-top .top-left::before {
  position: absolute;
  content: '';
  background: #fed101;
  width: 0.1rem;
  height: 0.48rem;
  top: 0;
}
.like-top .top-left span {
  padding-left: 0.5rem;
  font-size: 0.5rem;
}
.like-top .top-right {
  padding-right: 0.5rem;
  color: #999;
  font-weight: 500;
  font-size: 0.4rem;
}
.like-bottom {
  padding: 0.3rem;
}
.like-bottom .bottom-header {
  /* background: url('/img/like1.jpg') no-repeat; */
  height: 4.466666rem;
  background-size: 100%;
  position: relative;
}
.like-bottom .bottom-header .header-info {
  position: absolute;
  bottom: 0.26rem;
  left: 0.2rem;
  display: flex;
  justify-content: space-between;
}
.like-bottom .bottom-header .header-info span:nth-child(1) {
  font-size: 0.5rem;
  color: #fff;
  font-weight: 700;
  width: 5.78rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.like-bottom .bottom-header .header-info span:nth-child(2) {
  font-size: 0.45rem;
  color: orange;
  font-weight: 500;
  margin-left: 1rem;
}
.like-bottom ul {
  display: flex;
  justify-content: space-between;
  margin-top: 0.3rem;
}
.like-bottom ul li {
  width: 2.96rem;
}
.like-bottom ul li img {
  width: 100%;
  height: 1.95rem;
}
.like-bottom ul li span:nth-child(2) {
  font-size: 0.35rem;
  display: -webkit-box;
  margin-top: 0.2rem;
  width: 100%;
  height: 0.96rem;
  line-height: .48rem;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.like-bottom ul li span:nth-child(3) {
  font-size: 0.35rem;
  color: orange;
  font-weight: 500;
  display: block;
  margin-top: 0.2rem;
}
</style>