import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

import vuetify from './plugins/vuetify';
import tailwind from './assets/css/tailwind.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  tailwind,
  render: h => h(App)
}).$mount('#app')
