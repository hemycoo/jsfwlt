import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import Welcome from '../pages/Welcome'
import Roast from '../pages/roast/Roast.vue'
import TopicAnswer from '../pages/roast/TopicAnswer.vue'

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
        path: '/roast',
        name: 'Roast',
        component: Roast
      },
      {
        path: '/firstPage',
        name: 'Welcome',
        component: Welcome
      },
      {
        path: '/topicAnswer',
        name: 'TopicAnswer',
        component: TopicAnswer
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
