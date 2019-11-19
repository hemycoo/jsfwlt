import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Welcome from '../components/Welcome'
import TuCao from '../components/tuCao/TuCao.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    redirect: '/firstPage',
    children: [
      {
        path: '/tuCao',
        component: TuCao
      },
      {
        path: '/firstPage',
        component: Welcome
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
