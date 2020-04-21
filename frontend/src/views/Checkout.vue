<!-- view to display a checkout process when forwarding from cart -->
<template>
  <div>
    <!-- first we check if the cart is empty -->
    <!-- if it isnt, we display the panels -->
    <div v-if="cart.length > 0">
      <div>
        <app-header-image :imagePathMobile="'header-mobile.jpg'" :imagePathTablet="'header-tablet.jpg'" :imagePathDesktop="'header-desktop.jpg'"></app-header-image>
      </div>
      <div class="checkout__container">
        <!-- use vuetify grid system to make it responsive -->
        <v-container fluid>
          <v-row justify="space-between">
            <v-col sm="8" cols="12" order="2" order-sm="1">
              <app-panel-list>
                <template #panel-blocks>
                  <app-panel-item blockTitle="Dine opplysninger">
                    <template #block-content>
                      <!-- block with info about the user making the order -->
                      <div class="checkout__panel-block-content-info-box">
                        <div>
                          <p class="checkout__panel-block-content-info-box-text">Fornavn Etternavn</p>
                          <p class="checkout__panel-block-content-info-box-subtext">Adressegate 1, 0123 Oslo</p>
                          <p class="checkout__panel-block-content-info-box-subtext">fornavn.etternavn@example.com &#8226; +47 123 45 678</p>
                        </div>
                        <button class="checkout__panel-block-content-info-box-btn">Endre</button>
                      </div>
                    </template>
                  </app-panel-item>
                  <app-panel-item blockTitle="Betaling">
                    <template #block-content>
                      <!-- block with list of payment options -->
                      <app-panel-payment-list></app-panel-payment-list>
                    </template>
                  </app-panel-item>
                  <app-panel-item>
                    <template #block-content>
                      <app-btn-primary :buttonText="'Bekreft og betal bestillingen'" width="100%"></app-btn-primary>
                    </template>
                  </app-panel-item>
                </template>
              </app-panel-list>
            </v-col>
            <v-col sm="4" cols="12" order="1" order-sm="2">
              <app-panel-list>
                <template #panel-blocks>
                  <app-panel-item blockTitle="Handlekurv">
                    <template #block-content>
                      <div class="checkout__panel-block-content">
                        <div class="checkout__panel-block-content-cart">
                          <!-- show cart content -->
                          <app-cart-item v-for="item in cart" :key="item.productId" :cartItem="item"></app-cart-item>
                        </div>
                        <app-cart-total></app-cart-total>
                      </div>
                    </template>
                  </app-panel-item>
                </template>
              </app-panel-list>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <!-- if the cart is empty, there is no need to display the checkout process -->
    <!-- instead we display a 404 with the option of returning to menu -->
    <div v-else>
      <app-404></app-404>
    </div>
  </div>
</template>

<script>
// App imports (components without logic and dependancy)
import HeaderImage from '../components/AppHeaderImage'
import ButtonPrimary from '../components/AppButtonPrimary'
import NotFound from '../components/App404'

// General imports (componetns with logic)
import CartItem from '../components/CartItem'
import CartTotal from '../components/CartTotal'
import PanelList from '../components/PanelList'
import PanelItem from '../components/PanelItem'
import PanelPaymentList from '../components/PanelPaymentList'

// Module imports (components dependant on this one)
// -

export default {
  name: 'Checkout',
  components: {
    'app-header-image': HeaderImage,
    'app-btn-primary': ButtonPrimary,
    'app-404': NotFound,
    'app-cart-item': CartItem,
    'app-cart-total': CartTotal,
    'app-panel-list': PanelList,
    'app-panel-item': PanelItem,
    'app-panel-payment-list': PanelPaymentList,
  },
  data() {
    return {
      radios: 'radio-1'
    }
  },
  computed: {
    cart() {
      return this.$store.getters.getCart
    }
  }
}
</script>

<style scoped>
  .checkout__container {
    max-width: 980px;
    margin: auto;
    margin-top: -10rem;
  }

  .checkout__panel-block-content-cart {
    border-bottom: 1px solid #E9EEF4;
    padding-bottom: 1.5rem;
    margin-bottom: 1.25rem;
  }

  .checkout__panel-block-content-info-box {
    border: 1px solid #E9EEF4;
    padding: 0.875rem 0.875rem 0.875rem 0.875rem;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .checkout__panel-block-content-info-box-text {
    font-weight: 500;
    font-size: 0.875rem;
    color: #2D3748;
    margin-bottom: 0.5rem !important;
  }

  .checkout__panel-block-content-info-box-subtext {
    font-weight: normal;
    font-size: 0.875rem;
    color: #718096;
  }

  .checkout__panel-block-content-info-box-btn {
    color: #4633E8;
    font-size: 0.875rem;
    font-weight: 500;
  }

</style>