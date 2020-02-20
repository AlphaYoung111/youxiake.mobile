import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// reset.css
import './assets/css/reset.css'
// fastClick 移动端点击300ms延迟
import FastClick from 'fastclick'
FastClick.attach(document.body)
// 字体图标
import './assets/css/iconfont.css'
// 适配font.js
import './assets/js/font'
// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import './assets/css/swiper.css'
// 动画库
import animate from 'animate.css'
Vue.use(animate)
// axios
import axios from 'axios'
Vue.prototype.$http= axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
