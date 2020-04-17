<template>
  <div class="cart__item">
    <div class="cart__item-info">
      <div class="cart__item-info-controls">
        <v-btn x-small icon color="#4633E8">
          <v-icon small>mdi-minus</v-icon>
        </v-btn>
        <span class="cart__item-info-controls-amount">{{ itemAmount }}</span>
        <v-btn x-small icon color="#4633E8">
          <v-icon small>mdi-plus</v-icon>
        </v-btn>
      </div>
      <span class="cart__item-info-item">{{ itemName }}</span>
    </div>
    <span class="cart__item-price">kr {{ itemPrice }}</span>
  </div>
</template>

<script>
export default {
  props: {
    itemName: {
      type: String,
      required: true
    },
    itemPrice: {
      type: Number,
      required: true
    },
    itemAmount: {
      type: Number,
      required: true
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