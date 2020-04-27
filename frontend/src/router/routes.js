import Vue from 'vue'
import VueRouter from 'vue-router'

// views imports
import Menu from '../views/Menu'
import Checkout from '../views/Checkout'
import OrderConfirmed from '../views/OrderConfirmed'
import PageNotFound from '../views/PageNotFound'

Vue.use(VueRouter)

  const routes = [
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound
  },
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
    path: '/confirmed',
    name: 'Confirmed',
    component: OrderConfirmed
  },

  // we lazy load the /admin route
  // in a real life application only a selected few will have access to this part of the app
  // therefore we can reduce load time and bundly size by lazy loading
  {
    path: '/admin',
    name: 'Admin',
    component: () => import (/* webpackChunkName: "AdminProducts" */ '../views/Admin'),
  },
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: (to) => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  },
  base: process.env.BASE_URL,
  routes
})

export default router
