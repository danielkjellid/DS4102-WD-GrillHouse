<!-- component to display global header used for naviagtion and info -->
<template>
  <!-- since we use margin to fit in sidecart, we reset when we're in the checkout -->
  <v-app-bar app color="#fff" flat class="header" :class="{'header__reset' : $route.matched.some(({ name }) => name === 'Checkout')}">
    <router-link to="/" class="d-flex align-center">
      <svg width="92" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.818 5.14h2.813C12.273 2.553 9.99.73 7.03.73 3.573.73.908 3.223.908 7.467c0 4.142 2.493 6.712 6.18 6.712 3.305 0 5.664-2.09 5.664-5.536V6.994H7.274v2.084h2.813c-.039 1.624-1.145 2.653-2.985 2.653-2.078 0-3.388-1.553-3.388-4.29 0-2.722 1.361-4.263 3.362-4.263 1.425 0 2.39.735 2.742 1.963zM14.78 14h2.723V8.445c0-1.208.882-2.039 2.084-2.039.377 0 .895.064 1.15.147V4.137a4.088 4.088 0 00-.856-.096c-1.1 0-2 .64-2.359 1.854h-.102V4.182h-2.64V14zm7.365 0h2.723V4.182h-2.723V14zm1.368-11.084c.812 0 1.477-.62 1.477-1.38C24.99.78 24.325.16 23.513.16c-.805 0-1.47.62-1.47 1.375 0 .76.665 1.38 1.47 1.38zM29.773.91h-2.724V14h2.724V.91zm4.904 0h-2.723V14h2.723V.91zM36.909 14h2.768V8.592h5.619V14h2.761V.91h-2.761v5.4h-5.619V.91h-2.768V14zm17.815.192c2.979 0 4.832-2.04 4.832-5.063 0-3.042-1.853-5.075-4.832-5.075s-4.832 2.033-4.832 5.075c0 3.024 1.853 5.063 4.832 5.063zm.013-2.11c-1.375 0-2.078-1.259-2.078-2.972s.703-2.979 2.078-2.979c1.348 0 2.051 1.266 2.051 2.98 0 1.712-.703 2.971-2.051 2.971zM67.623 9.82c.006 1.316-.895 2.007-1.873 2.007-1.029 0-1.694-.723-1.7-1.88V4.182h-2.723v6.251c.006 2.295 1.349 3.695 3.324 3.695 1.476 0 2.537-.76 2.978-1.911h.103V14h2.614V4.182h-2.723V9.82zm13.07-2.838c-.243-1.81-1.7-2.928-4.18-2.928-2.512 0-4.168 1.163-4.161 3.055-.007 1.47.92 2.423 2.838 2.806l1.7.34c.856.172 1.246.485 1.26.977-.014.582-.646.997-1.599.997-.972 0-1.617-.415-1.783-1.214l-2.678.14c.255 1.88 1.853 3.037 4.455 3.037 2.544 0 4.365-1.298 4.372-3.235-.007-1.419-.933-2.269-2.838-2.659l-1.777-.358c-.914-.198-1.253-.511-1.247-.984-.006-.588.659-.972 1.502-.972.947 0 1.51.518 1.643 1.15l2.493-.152zm6.413 7.21c2.429 0 4.065-1.183 4.449-3.005l-2.519-.166c-.275.748-.978 1.138-1.885 1.138-1.362 0-2.225-.901-2.225-2.365v-.006h6.686V9.04c0-3.337-2.02-4.986-4.615-4.986-2.889 0-4.762 2.052-4.762 5.082 0 3.113 1.848 5.056 4.871 5.056zM84.926 8.1c.058-1.118.908-2.013 2.116-2.013 1.183 0 2 .843 2.007 2.013h-4.123z" fill="#2D3748"/>
      </svg>
    </router-link>
    <v-spacer></v-spacer>
    <div class="header__nav">
      <router-link to="/" class="header__nav-button">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="header__nav-icon">
          <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
        <a class="header__nav-link">Admin</a>
      </router-link>
      <!-- open comporessed cart on smaller devices -->
      <button @click="toggleCart" class="header__nav-button">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="header__nav-icon">
          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
        <!-- show amount of items in cart -->
        <span class="header__nav-button-text">{{ cartQuantity }}</span>
      </button>
    </div>
  </v-app-bar>
</template>

<script>
// App imports (components without logic and dependancy)
// -

// General imports (componetns with logic)
// -

// Module imports (components dependant on this one)
// -

export default {
  name: 'TheHeader',
  computed: {
    cartQuantity() {
      return this.$store.getters.getCartQuantity
    }
  },
  methods: {
    toggleCart() {
      /* emit button click to parent to change cart state */
      this.$emit('toggle-cart');
    }
  }
}
</script>

<style scoped>
  .header {
    border-bottom: 1px solid #E2E8F0 !important;
  }

  .header__nav {
    display: flex;
    align-items: center;
    justify-content: end;
  }

  .header__nav-button {
    margin-left: 0.875rem;  
    display: flex;
  }

  .header__nav-button-text {
    font-size: 0.875rem;
    font-weight: 500;
    color: #A0AEC0;
    margin-left: 0.25rem;
  }

  .header__nav-icon {
    height: 1.25rem;
    width: 1.25rem;
    color: #5A67D8;
  }

  .header__nav-link {
    color: #A0AEC0 !important;
    display: none;
    text-decoration: none !important;
  }

  .header__nav-link:hover {
    color: #718096 !important;
  }

  @media only screen and (min-width: 1270px){
    .header {
      margin-right: 44px;
    }

    .header__reset {
      margin-right: 0 !important;
    }

    .header__nav-button, .header__nav-icon {
      display: none;
    }

    .header__nav-link {
      display: block;
    }
  }
</style>