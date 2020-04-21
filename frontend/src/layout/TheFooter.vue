<!-- component to show a footer on smaller devices containing info about cart -->
<template>
  <!-- open cart on click and show only if there is items in the cart -->
  <div v-if="$route.matched.some(({ name }) => name != 'Checkout')">
    <button @click="toggleCart" v-if="cart.length > 0">
      <v-footer fixed color="#4633E8" dark height="60px" class="footer__cart">
        <v-row justify="space-between" class="footer__cart-container">
          <div class="footer__cart-group">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="footer__cart-text-icon">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <span class="footer__cart-text">{{ cartQuantity }} varer</span>
          </div>
          <div class="footer__cart-text">
            Trykk for å åpne
          </div>
          <div class="footer__cart-text">
            {{ grandTotal | formatPrice | nokPrefix }}
          </div>
        </v-row>
      </v-footer>
    </button>
  </div>
</template>

<script>
// App imports (components without logic and dependancy)
// -

// General imports (componetns with logic)
// -

// Module imports (components dependant on this one)
// -

export default {
  name: 'TheFooter',
  computed: {
    cart() {
      return this.$store.getters.getCart
    },
    cartQuantity() {
      return this.$store.getters.getCartQuantity
    },
    grandTotal() {
      return this.$store.getters.getGrandTotal
    }
  },
  methods: {
    toggleCart() {
      // emit click to parent to change cart state 
      this.$emit('toggle-cart');
    },
  }
}
</script>

<style>
  .footer__cart-container {
    padding: 0 1.25rem 0 1.25rem !important; 
  }

  .footer__cart-group {
    display: flex;
    align-items: center;
  }

  .footer__cart-text {
    font-size: 0.875rem;
    font-weight: 500;
    color: #fff;
  }

  .footer__cart-text-icon {
    height: 1.125rem;
    width: 1.125rem;
    color: #fff;
    margin-right: 0.5rem;
  }

  @media only screen and (min-width: 1100px){
    .footer__cart {
      display: none !important;
    }
  }
</style>