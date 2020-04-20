import Vue from 'vue'
import Vuex from 'vuex'

import { productData } from '../data/products'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    deliveryPrice: 59,
  },
  mutations: {
    'INIT_PRODUCTS'(state, products) {
      state.products = products
    },
    'INIT_CART'(state, cart) {
      state.cart = cart
    },
    'ADD_TO_CART'(state, { productId, quantity }) {
      // create a product record used to check if item is already in cart
      const productRecord = state.cart.find(element => element.productId === productId)

      // if item already exists, increase quantity
      if (productRecord) {
        productRecord.quantity += quantity

      // if not, create a new object with productId and quantity
      } else {
        state.cart.push({
          productId: productId,
          quantity: quantity
        })
      }
    },
    'DECREASE_CART_ITEM_AMOUNT'(state, productId) {
      // create a product record used to check if item is already in cart
      const productRecord = state.cart.find(element => element.productId === productId)

      // if the 1 is smaller than the quantity already in cart, decrease by 1
      if (productRecord.quantity > 1) {
        productRecord.quantity -= 1
      } else {
        // if not, remove the item from cart array
        state.cart.splice(state.cart.indexOf(productRecord), 1)
      }
    },
    'INCREASE_CART_ITEM_AMOUNT'(state, productId) {
      const productRecord = state.cart.find(element => element.productId === productId)

      // increase amount
      productRecord.quantity += 1
    }
  },
  actions: {
    initProducts: ({ commit }) => {
      commit('INIT_PRODUCTS', productData)
    },
    addToCart: ({ commit }, order) => {
      commit('ADD_TO_CART', order)
    },
    decreaseCartItemAmount: ({ commit }, order) => {
      commit('DECREASE_CART_ITEM_AMOUNT', order)
    },
    increaseCartItemAmount: ({ commit }, order) => {
      commit('INCREASE_CART_ITEM_AMOUNT', order)
    }
  },
  getters: {
    getProducts: (state) => {
      return state.products
    },
    getProduct: (state) => (id) => {
      return state.products.find((product) => product.id === id)
    },
    getCart: (state, getters) => {

      // create a new array based on existing cart array
      return state.cart.map(item => {

        // get product data associated with IDs in cart
        const product = getters.getProducts.find(element => element.id === item.productId)

        // calculate total price
        const totalPrice = product.price * item.quantity

        // return new object with quantity, name of product and total price of product
        return {
          id: item.productId,
          quantity: item.quantity,
          name: product.name,
          price: totalPrice,
        }
      })
    },
    getDeliveryPrice: (state) => {
      return state.deliveryPrice
    }
  }
})
