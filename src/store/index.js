import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '北京'
defaultCity = window.localStorage.getItem('city')

export default new Vuex.Store({
  state: {
    cityName: defaultCity
  },
  mutations: {
    changeCity(state, payload) {
      state.cityName = payload
      window.localStorage.setItem('city',payload)
    }
  },
  actions: {},
  modules: {}
})