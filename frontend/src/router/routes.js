import Vue from 'vue'
import VueRouter from 'vue-router'

// views imports
import Menu from '../views/Menu'
import Checkout from '../views/Checkout'

// component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/testapi',
    name: 'TestAPI',
    component: () => import(/* webpackChunkName: "testapi" */ '../views/TestAPI.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
