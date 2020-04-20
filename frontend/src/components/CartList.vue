<template>
  <div>
    <div class="cart__switch">
      <span class="cart__switch-label">Henting</span>
      <v-switch class="cart__switch-switch" @change="changeDeliveryType" :input-value="$store.state.deliveryActive" color="#4633E8"></v-switch>
      <span class="cart__switch-label">Levering</span>
    </div>
    <div class="cart__items">
      <app-cart-item v-for="item in cart" :key="item.productId" :cartItem="item"></app-cart-item>
    </div>
  </div>
</template>

<script>
import CartItem from './CartItem'

export default {
  components: {
    'app-cart-item': CartItem
  },
  computed: {
    cart() {
      return this.$store.getters.getCart
    }
  },
  methods: {
    changeDeliveryType() {
      // changes delivery type between deliver and pickup
      this.$store.dispatch('changeDeliveryType')
    }
  }
}
</script>

<style>
  .v-input__slot {
    margin-bottom: 0;
  } 

  .cart__switch {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cart__switch-switch {
    margin: 0 0.5rem 0 0.5rem;
  }

  .cart__switch-label {
    font-weight: normal;
    font-size: 0.875rem;
    color: #4A5568;
    margin-bottom: 0.25rem;
  }

  .cart__items {
    border-top: 1px solid #E2E8F0;
    margin-top: 1.25rem;
    padding: 1.5rem 0 1.5rem 0;
  }

</style>