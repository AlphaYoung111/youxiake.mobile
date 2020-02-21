import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/home/Home'
const City = () => import('@/components/city/City')
const Detail = ()=>import('@/components/detail/Detail')
Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/city', name: 'city', component: City },
  {path:'/detail',name:'detail',component:Detail}
]

const router = new VueRouter({
  routes
})

export default router
