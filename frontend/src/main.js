import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

import vuetify from './plugins/vuetify';
import tailwind from './assets/css/tailwind.css'

Vue.config.productionTip = false

// set up global filters which is used accross the application

// format price to always have two decimals
Vue.filter('formatPrice', (value) => {
  // if there isnt a value, return 0
  if (!value) return (0.00).toFixed(2)

  // parse value an convert it to always show two decimal points
  value = parseInt(value)

  return (Math.round(value * 100) / 100).toFixed(2)
})

// format price with NOK currency prefix
Vue.filter('nokPrefix', (value) => {
  
  // parse value an convert it to always show two decimal points
  value = value.toString()
  return 'kr ' + value

})

new Vue({
  router,
  store,
  vuetify,
  tailwind,
  render: h => h(App)
}).$mount('#app')
