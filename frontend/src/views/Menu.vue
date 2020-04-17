<template>
  <div>
    <app-header-image :imagePathMobile="'header-mobile.jpg'" :imagePathTablet="'header-tablet.jpg'" :imagePathDesktop="'header-desktop.jpg'"></app-header-image>
    <v-tabs color="#4633E8" height="60px" class="page-nav">
      <v-tab>Burgere</v-tab>
      <v-tab>Snacks</v-tab>
      <v-tab>Dip</v-tab>
      <v-tab>Fries</v-tab>
      <v-tab>Drikke</v-tab>
    </v-tabs>
    <!-- display section list based on categories -->
    <app-menu-list :title="'Burgere'">
      <!-- target MenuList slot to inject MenuItems -->
      <template #menu-items>
        <!-- use vuetifys grid system to oganize menuitems -->
        <v-col sm="6" cols="12"  v-for="item in 4" :key="item">
          <app-menu-item @activate-item-modal="itemModalActive = true" :title="'Cheese'" :price="109.00" :desc="'Burger av 150g høyrygg av okse, med salat, ost, rødløk, tomat.'" :starValue="4" :amountOfReviews="18"></app-menu-item>
        </v-col>
      </template>
    </app-menu-list>
    <app-menu-item-modal @close-modal="itemModalActive = false" :active="itemModalActive"></app-menu-item-modal>
  </div>
</template>

<script>
// App imports (components without logic and dependancy)
import HeaderImage from '../components/AppHeaderImage'

// General imports (componetns with logic)
import MenuList from '../components/MenuList'
import MenuItem from '../components/MenuItem'

// Module imports (components dependant on this one)
import MenuItemModal from '../components/MenuItemModal'

export default {
  name: 'Menu',
  components: {
    'app-header-image': HeaderImage,
    'app-menu-list': MenuList,
    'app-menu-item': MenuItem,
    'app-menu-item-modal': MenuItemModal
  },
  data() {
    return {
      itemModalActive: false
    }
  }
}
</script>

<style scoped>
  .page-nav {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }
</style>
