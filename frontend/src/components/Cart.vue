<!-- component do display the (side) cart -->
<template>
  <div class="cart">
    <div class="cart__header">
      <p class="cart__header-text">Handlekurv</p>
      <!-- button to toggle cart on smaller devices -->
      <button @click="toggleCart">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="cart__header-icon">
          <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    <div class="cart__content">
      <app-cart-list @change-delivery-type="deliveryActive = !deliveryActive" :deliveryActive="deliveryActive"></app-cart-list>
    </div>
    <div class="cart__footer">
      <div>
        <div class="cart__footer-subtotal">
          <span class="cart__footer-subtotal-text">Subtotal</span>
          <span class="cart__footer-subtotal-text">kr 168,00</span>
        </div>
        <div v-if="deliveryActive" class="cart__footer-subtotal">
          <span class="cart__footer-subtotal-text">Levering</span>
          <span class="cart__footer-subtotal-text">kr 59,00</span>
        </div>
      </div>
      <div class="cart__footer-total">
        <div>
          <span class="cart__footer-total-text">Total</span>
          <span class="cart__footer-total-text--grayed">(inkl MVA)</span>
        </div>
        <span class="cart__footer-total-text">kr 227,00</span>
      </div>
      <router-link to="/cart">
        <app-btn-primary :buttonText="'Gå til kassen'" width="100%"></app-btn-primary>
      </router-link>
    </div>
  </div>
</template>

<script>
// App imports (components without logic and dependancy)
import ButtonPrimary from './AppButtonPrimary'

// General imports (componetns with logic)
// -

// Module imports (components dependant on this one)
import CartList from './CartList'

export default {
  name: 'Cart',
  components: {
    'app-btn-primary': ButtonPrimary,
    'app-cart-list': CartList
  },
  data() {
    return {
      deliveryActive: true,
    }
  },
  methods: {
    toggleCart() {

      // emit click to parent to change cart state 
      this.$emit('toggle-cart');
    }
  }
}
</script>

<style scoped>
  .cart__header {
    color: #2D3748;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 16px;
    border-bottom: 1px solid #E2E8F0;
  }

  .cart__header-icon {
    height: 1.25rem;
    width: 1.25rem;
    color: #5A67D8;
  }

  .cart__header-text {
    font-size: 1rem;
    color: #2D3748 !important;
    font-weight: 600;
    margin-bottom: 0 !important;
  }

  .cart__content {
    overflow-y: auto;
    padding: 2rem 1.25rem 2rem 1.25rem;
  }

  .cart__footer {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 300px;
    border-top: 1px solid #E2E8F0;
    padding: 1.5rem 1.25rem 1.25rem 1.25rem;
  }

  .cart__footer-subtotal {
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 1;
  }

  .cart__footer-subtotal:first-child {
    margin-bottom: 0.5rem;
  }

  .cart__footer-subtotal-text {
    color: #2D3748 !important;
    font-size: 0.875rem;
    font-weight: normal;
  }

  .cart__footer-total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.875rem;
    font-weight: 600;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }

  .cart__footer-total-text {
    color: #2D3748 !important;
    font-size: 0.875rem;
    font-weight: 600;
  }

  .cart__footer-total-text--grayed {
    color: #718096 !important;
    font-size: 0.875rem;
    font-weight: normal;
    margin-left: 0.5rem;
  }

  @media only screen and (min-width: 1280px){
    .cart__header-icon {
      display: none;
    }
  }
</style>