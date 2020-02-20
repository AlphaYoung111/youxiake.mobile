<template>
  <div id="home">
    <Banner></Banner>
    <Icons></Icons>
    <Tabs></Tabs>
    <Scroll></Scroll>
    <Swiper></Swiper>
    <Spike :spikeData="spikeList"></Spike>
    <Like :likeList="likeList"></Like>
    <Footer></Footer>
  </div>
</template>
<script>
import Banner from './Banner'
import Icons from './Icons'
import Tabs from './Tabs'
import Scroll from './Scroll'
import Swiper from './Swiper'
import Spike from './Spike'
import Like from './Like'
import Footer from './Footer'
export default {
  name: 'home',
  components: {
    Banner,
    Icons,
    Tabs,
    Scroll,
    Swiper,
    Spike,
    Like,
    Footer
  },
  data() {
    return {
      spikeList: [],
      likeList:[]
    }
  },
  mounted() {
    this.getAll()
  },
  methods: {
    getAll() {
      this.$http.get('/api/dataHome.json').then(res => {
        let data = res.data.data[0]
        this.spikeList = data.spikeList
        this.likeList = data.likeList
      })
    }
  }
}
</script>
<style scoped>
#home {
  overflow: hidden;
}
</style>