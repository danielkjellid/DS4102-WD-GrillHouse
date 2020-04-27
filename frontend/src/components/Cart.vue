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
      <!-- if there are items in cart, display list of items -->
      <div v-if="cart.length > 0">
        <app-cart-list></app-cart-list>
      </div>
      <!-- if not, display image and message -->
      <div v-else>
        <app-no-data text="Du har ingen varer i handlekurven. Legg til varer gjennom menyen til vestre!"></app-no-data>
      </div>
    </div>
    <!-- also hide total footer if cart is empty -->
    <div v-if="cart.length > 0" class="cart__footer">
      <div class="cart__footer-total">
        <app-cart-total></app-cart-total>
      </div>
      <app-btn-primary to="/checkout" :buttonText="'Gå til kassen'" width="100%"></app-btn-primary>
    </div>
  </div>
</template>

<script>
// App imports (components without logic and dependancy)
import ButtonPrimary from './AppButtonPrimary'
import NoData from './AppNoData'

// General imports (componetns with logic)
// -

// Module imports (components dependant on this one)
import CartList from './CartList'
import CartTotal from './CartTotal'

export default {
  name: 'Cart',
  components: {
    'app-btn-primary': ButtonPrimary,
    'app-no-data': NoData,
    'app-cart-list': CartList,
    'app-cart-total': CartTotal
  },
  computed: {
    cart() {
      return this.$store.getters.getCart
    },
  },
  methods: {
    toggleCart() {
      // emit click to parent to change cart state 
      this.$emit('toggle-cart');
    },
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

  .cart__footer-total {
    margin-bottom: 1.5rem;
  }

  @media only screen and (min-width: 1280px){
    .cart__header-icon {
      display: none;
    }
  }
</style>