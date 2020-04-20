<template>
  <v-app class="app">
    <the-header @toggle-cart="cartActive = !cartActive"></the-header>
    <!-- (side) cart -->
    <!-- nested inside a navigation drawer to fit propperly with vuetify -->
    <v-navigation-drawer app fixed right v-model="cartActive" :width="'300px'" :mobile-break-point="'1100px'">
      <app-cart @toggle-cart="cartActive = !cartActive"></app-cart>
    </v-navigation-drawer>
    <v-content>
      <router-view>
        <!-- content -->
      </router-view>
    </v-content>
    <!-- footer that shows up on devices smaller than 1100px -->
    <!-- contains info about cart -->
    <the-footer @toggle-cart="cartActive = !cartActive"></the-footer>
  </v-app>
</template>

<script>
import TheHeader from './layout/TheHeader'
import TheFooter from './layout/TheFooter'
import Cart from './components/Cart'

export default {
  name: 'App',
  components: {
    'the-header': TheHeader,
    'the-footer': TheFooter,
    'app-cart': Cart
  },
  data() {
    return {
      cartActive: null,
    }
  },
  created() {
    this.$store.dispatch('initProducts')
  }
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

  .v-slide-group__prev {
    display: none !important;
  }

  @media only screen and (min-width: 1280px){
    .content {
      margin-right: 44px;
    }
  }
  
</style>
