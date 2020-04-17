import Vue from 'vue'
import Vuex from 'vuex'

import { productData } from '../data/products'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    'INIT_PRODUCTS'(state, products) {
      state.products = products
    }
  },
  actions: {
    initProducts: ({ commit }) => {
      commit('INIT_PRODUCTS', productData)
    }
  },
  getters: {
    getProducts: (state) => {
      return state.products
    },
    getProduct: (state) => (id) => {
      return state.products.find((product) => product.id === id)
    }
  }
})
