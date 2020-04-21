<!-- component to display subtotal, delivery fee and price in the bottom of the cart -->
<template>
  <div>
    <div>
      <!-- the blocks get the totals from store, and formats it through the global filters -->
      <div class="cart__footer-subtotal">
        <span class="cart__footer-subtotal-text">Subtotal</span>
        <span class="cart__footer-subtotal-text">{{ subTotal | formatPrice | nokPrefix}}</span>
      </div>
      <div v-if="$store.state.deliveryActive" class="cart__footer-subtotal">
        <span class="cart__footer-subtotal-text">Levering</span>
        <span class="cart__footer-subtotal-text">{{ deliveryPrice | formatPrice | nokPrefix }}</span>
      </div>
    </div>
    <div class="cart__footer-total">
      <div>
        <span class="cart__footer-total-text">Total</span>
        <span class="cart__footer-total-text--grayed">(inkl MVA)</span>
      </div>
      <span class="cart__footer-total-text">{{ grandTotal | formatPrice | nokPrefix }}</span>
    </div>
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
  name: 'CartTotal',
  computed: {
    deliveryPrice() {
      return this.$store.getters.getDeliveryPrice
    },
    subTotal() {
      return this.$store.getters.getSubTotal
    },
    grandTotal() {
      return this.$store.getters.getGrandTotal
    }
  },
}
</script>

<style scoped>
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

</style>