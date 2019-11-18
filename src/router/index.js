import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import Home from '../components/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/app',
    name: 'app',
    component: App
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
