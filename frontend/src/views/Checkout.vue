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
                      <!-- check if form is set to open -->
                      <!-- if it isnt, display summary of order details -->
                      <div v-if="!formActive">
                        <!-- block with info about the user making the order -->
                        <div class="checkout__panel-block-content-info-box">
                          <div>
                            <p class="checkout__panel-block-content-info-box-text">{{ userFullname }}</p>
                            <p class="checkout__panel-block-content-info-box-subtext">{{ userAddress }}</p>
                            <p class="checkout__panel-block-content-info-box-subtext">f{{ userContact }}</p>
                          </div>
                          <button @click="formActive = true" class="checkout__panel-block-content-info-box-btn">Endre</button>
                        </div>
                      </div>
                      <!-- if form is active, allow user to edit info -->
                      <div v-else>
                        <v-row>
                          <v-col cols="12" sm="6">
                            <v-text-field v-model="user.firstname" color="#4633e8" label="Fornavn" outlined></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-text-field v-model="user.lastname" color="#4633e8" label="Etternavn" outlined></v-text-field>                            
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="12" sm="6">
                            <v-text-field v-model="user.email" color="#4633e8" label="E-post" outlined></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-text-field v-model="user.phone" color="#4633e8" label="Mobilnummer" outlined counter="8"></v-text-field>                            
                          </v-col>
                        </v-row>
                        <v-row no-gutters>
                          <v-col cols="12">
                            <v-text-field v-model="user.address.street" color="#4633e8" label="Gate" outlined></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="12" sm="6">
                            <v-text-field v-model="user.address.zip" color="#4633e8" label="Postkode" outlined></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-text-field v-model="user.address.city" color="#4633e8" label="By" outlined></v-text-field>                            
                          </v-col>
                        </v-row>
                        <app-btn-primary @click.native="formActive = false" :disabled="!formActive" :buttonText="'Bekreft endringer'" width="100%"></app-btn-primary>
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
                      <app-btn-primary :disabled="formActive" :buttonText="'Bekreft og betal bestillingen'" width="100%"></app-btn-primary>
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
      <app-404 message="Du har ikke noen varer i handlekruven."></app-404>
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
      user: {
        firstname: 'Ola',
        lastname: 'Nordman',
        email: 'ola.nordman@example.com',
        phone: '12345678',
        address: {
          street: 'Adressegate 1',
          zip: 1023,
          city: 'Oslo',
        }
      },
      radios: 'radio-1',
      formActive: false,
    }
  },
  computed: {
    cart() {
      return this.$store.getters.getCart
    },
    userFullname() {
      return this.user.firstname + ' ' + this.user.lastname
    },
    userAddress() {
      return this.user.address.street + ', ' + this.user.address.zip + ' ' + this.user.address.city
    },
    userContact() {
      return this.user.email + ' • ' + this.formattedPhone()
    }
  },
  methods: {
    // metod to format phone so it displays the phone number using european convention -->
    formattedPhone() {
      // clean the string
      const cleaned = ('' + this.user.phone).replace(/\D/g, '')
      // split number into bolks
      const match = cleaned.match(/^(\d{3})(\d{2})(\d{3})$/)
  
      if (match) {
        return '+47 ' + match[1] + ' ' + match[2] + ' ' + match[3]
      }

      return null
    },
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
    border-bottom: 1px solid #e9eef4;
    padding-bottom: 1.5rem;
    margin-bottom: 1.25rem;
  }

  .checkout__panel-block-content-info-box {
    border: 1px solid #e9eef4;
    padding: 0.875rem 0.875rem 0.875rem 0.875rem;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .checkout__panel-block-content-info-box-text {
    font-weight: 500;
    font-size: 0.875rem;
    color: #2d3748;
    margin-bottom: 0.5rem !important;
  }

  .checkout__panel-block-content-info-box-subtext {
    font-weight: normal;
    font-size: 0.875rem;
    color: #718096;
  }

  .checkout__panel-block-content-info-box-btn {
    color: #4633e8;
    font-size: 0.875rem;
    font-weight: 500;
  }
</style>