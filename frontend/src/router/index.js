import Vue from 'vue'
import VueRouter from 'vue-router'
import Menu from '../views/Menu'

// component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Menu',
    component: Menu
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
