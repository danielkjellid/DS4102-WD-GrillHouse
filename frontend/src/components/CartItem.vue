<!-- component to display item in product list -->
<!-- gives the user the ability to adjust amount while viewing quantity, name and price -->
<!-- dependant on CartList -->
<template>
  <div class="cart__item">
    <div class="cart__item-info">
      <div class="cart__item-info-controls">
        <v-btn @click="decreaseAmount" x-small icon color="#4633E8">
          <v-icon small>mdi-minus</v-icon>
        </v-btn>
        <span class="cart__item-info-controls-amount">{{ cartItem.quantity }}</span>
        <v-btn @click="increaseAmount" x-small icon color="#4633E8">
          <v-icon small>mdi-plus</v-icon>
        </v-btn>
      </div>
      <span class="cart__item-info-item">{{ cartItem.name }}</span>
    </div>
    <span class="cart__item-price">{{ cartItem.price | formatPrice | nokPrefix }}</span>
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
  name: 'CartItem',
  props: {
    cartItem: {
      type: Object,
      required: true,
    }
  },
  methods: {
    decreaseAmount() {
      this.$store.dispatch('decreaseCartItemAmount', this.cartItem.id)
    },
    increaseAmount() {
      this.$store.dispatch('increaseCartItemAmount', this.cartItem.id)
    }
  }
}
</script>

<style>
  .cart__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .cart__item-info {
    display: flex;
    align-items: center;
  }

  .cart__item-info-controls-amount {
    font-size: 0.875rem;
    font-weight: normal;
    color: #2D3748;
    margin: 0 0.25rem 0 0.25rem;
  }

  .cart__item-info-item {
    font-size: 0.875rem;
    font-weight: normal;
    color: #2D3748;
    margin-left: 0.75rem;
  }

  .cart__item-price {
    font-size: 0.875rem;
    font-weight: 500;
    color: #2D3748;
  }

</style>