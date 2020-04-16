<!-- component do display the (side) cart -->
<template>
  <div class="cart">
    <div class="cart__header">
      <p class="cart__header-text">Handlekurv</p>
    </div>
    <div class="cart__content">

    </div>
    <div class="cart__footer">
      <div>
        <div class="cart__footer-subtotal">
          <span class="cart__footer-subtotal-text">Subtotal</span>
          <span class="cart__footer-subtotal-text">kr 168,00</span>
        </div>
        <div class="cart__footer-subtotal">
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
        <v-btn link block dark :color="'#4633E8'">Gå til kassen</v-btn>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .cart__header {
    color: #2D3748;
    height: 64px;
    display: flex;
    align-items: center;
    padding: 4px 16px;
    border-bottom: 1px solid #E2E8F0;
  }

  .cart__header-text {
    font-size: 1rem;
    color: #2D3748 !important;
    font-weight: 600;
    margin-bottom: 0 !important;
  }

  .cart__content {
    overflow-y: auto;
    padding: 2rem, 1.25rem 2rem 1.25rem;
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
</style>