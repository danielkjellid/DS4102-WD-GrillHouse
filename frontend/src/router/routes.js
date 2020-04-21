import Vue from 'vue'
import VueRouter from 'vue-router'

// views imports
import Menu from '../views/Menu'
import Checkout from '../views/Checkout'
import AdminOverview from '../views/AdminOverview'

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
    path: '/admin',
    name: 'AdminOverview',
    component: AdminOverview
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
