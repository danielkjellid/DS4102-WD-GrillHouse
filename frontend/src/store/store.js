import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

import { reviewData } from '../data/reviews'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    categories: [],
    orders: [],
    fulfillment: [],
    cart: [],
    reviews: [],
    deliveryPrice: 59,
    deliveryActive: true
  },
  mutations: {
    'INIT_PRODUCTS' (state, products) {
      state.products = products
    },
    'INIT_CATEGORIES' (state, categories) {
      state.categories = categories
    },
    'INIT_REVIEWS'(state, reviews) {
      state.reviews = reviews
    },
    'ADD_REVIEW'(state, review) {
      state.reviews = [...state.reviews, review]
    },
    'CHANGE_DELIVERY_TYPE'(state) {
      state.deliveryActive = !state.deliveryActive
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
    },
    'EMPTY_CART' (state) {
      state.cart = []
    },
    'ADD_ORDER' (state, { orderlines, user }) {

      const id = state.orders.length + 1
      
      state.orders = []
      state.orders.push({
        id: id,
        orderlines: orderlines,
        user: user
      })
    },
  },
  actions: {
    initProducts: ({ commit }) => {
        axios.get('/products')
          .then(res => {
            commit('INIT_PRODUCTS', res.data)
          })
          .catch(error => console.log(error))
    },
    initCategories: ({ commit }) => {
      axios.get('/categories')
        .then(res => {
          commit('INIT_CATEGORIES', res.data)
        })
        .catch(error => console.log(error))
    },
    initReviews: ({ commit }) => {
      commit("INIT_REVIEWS", reviewData)
    },
    changeDeliveryType: ({commit}) => {
      commit('CHANGE_DELIVERY_TYPE')
    },
    addToCart: ({ commit }, order) => {
      commit('ADD_TO_CART', order)
    },
    decreaseCartItemAmount: ({ commit }, order) => {
      commit('DECREASE_CART_ITEM_AMOUNT', order)
    },
    increaseCartItemAmount: ({ commit }, order) => {
      commit('INCREASE_CART_ITEM_AMOUNT', order)
    },
    emptyCart: ({ commit }) => {
      commit('EMPTY_CART')
    },
    addOrder: ({ commit }, order) => {
      commit('ADD_ORDER', order)
    },
    addReview: ({ commit }, review) => {
      commit("ADD_REVIEW", review)
    }
  },
  getters: {
    getProducts: (state) => {
      return state.products
    },
    getProduct: (state) => (id) => {
      return state.products.find((product) => product.id === id)
    },
    getCategories: (state) => {
      return state.categories
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
    getCartQuantity: (state, getters) => {
      // loop through array and quantity to show amount of items in cart
      return getters.getCart.reduce((prev, cur) => prev + cur.quantity, 0)
    },
    getDeliveryPrice: (state) => {
      if (state.deliveryActive) {
        return state.deliveryPrice
      } else {
        return 0
      }
    },
    getSubTotal: (state, getters) => {
      // loop through array and sum prices to show subtotal
      return getters.getCart.reduce((prev, cur) => prev + cur.price, 0)
    },
    getGrandTotal: (state, getters) => {
      // include delivery fee if delivery is active
      if (state.deliveryActive) {
        return getters.getSubTotal + state.deliveryPrice
      } else {
        return getters.getSubTotal
      }
    },
    getFulfillment: (state, getters) => {

      state.orders.forEach(order => {

        const fulfillment = {
          id: order.id,
          orderlines: [],
          user: order.user
        }

        order.orderlines.forEach(orderline => {
          const product = getters.getProducts.find(product => product.id === orderline.productId)
          const totalPrice = product.price * orderline.quantity

          const productInfo = {
            quantity: orderline.quantity,
            name: product.name,
            price: totalPrice
          }

          fulfillment.orderlines.push(productInfo)
        })
        
        state.fulfillment.push(fulfillment)
      })
      
      return state.fulfillment
    },
    getReviews: (state) => {
      return state.reviews
    },
    getProductReviews: (state) => (id) => {
      return state.reviews.filter((review) => review.menuItemId === id)
    }
  }
})
