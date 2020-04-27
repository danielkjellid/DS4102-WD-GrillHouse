import Vue from 'vue'
import App from './App.vue'
import router from './router/routes'
import store from './store/store'

import vuetify from './plugins/vuetify';
import axios from 'axios'

Vue.config.productionTip = false

// set up global axios config
axios.defaults.baseURL = 'https://localhost:5001'

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

// format phone so it displays the phone number using european convention -->
Vue.filter('formatPhone', (value) => {
  // clean the string
  const cleaned = ('' + value).replace(/\D/g, '')
  // split number into blocks
  const match = cleaned.match(/^(\d{3})(\d{2})(\d{3})$/)

  if (match) {
    return '+47 ' + match[1] + ' ' + match[2] + ' ' + match[3]
  }

  return null
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
