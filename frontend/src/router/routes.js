import Vue from 'vue'
import VueRouter from 'vue-router'

// views imports
import Menu from '../views/Menu'
import Checkout from '../views/Checkout'

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
  
  // we lazy load all components behind the /admin route
  // in a real life application only a selected few will have access to this part of the app
  // therefore we can reduce load time and bundly size by lazy loading
  {
    path: '/admin',
    name: 'AdminOverview',
    component: () => import (/* webpackChunkName: "AdminProducts" */ '../views/AdminProducts')
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
