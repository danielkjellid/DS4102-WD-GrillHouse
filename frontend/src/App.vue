<template>
  <v-app class="app">
    <the-header @toggle-cart="cartActive = !cartActive"></the-header>
    <v-navigation-drawer app fixed right v-model="cartActive" :width="'300px'" :mobile-break-point="'1280px'">
      <app-cart @toggle-cart="cartActive = !cartActive"></app-cart>
    </v-navigation-drawer>
    <v-content>
      <router-view>
        <!-- content -->
      </router-view>
    </v-content>
  </v-app>
</template>

<script>
import TheHeader from './components/TheHeader';
import Cart from './components/Cart';

export default {
  name: 'App',
  components: {
    'the-header': TheHeader,
    'app-cart': Cart
  },
  data() {
    return {
      cartActive: null,
    }
  },
};
</script>

<style>
  body {
    color: #2D3748 !important;
  }
  a {
    text-decoration: none !important;
  }

  p {
    margin-bottom: 0px !important;
  }

  .app {
    background-color: #F7FAFC !important;
  }

  .content {
    padding: 1.25rem 1.25rem 1.25rem 1.25rem;
    max-width: 980px !important;
    margin: auto;
  }

  @media only screen and (min-width: 768px){
    .content {
      
    }
  }

  @media only screen and (min-width: 1280px){
    .content {
      margin-right: 44px;
    }
  }
  
</style>
