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
    <div v-for="category in filteredCategories" :key="category.id">
      <app-menu-list :title="category.name">
        <!-- target MenuList slot to inject MenuItems -->
        <template #menu-items>
          <div v-for="product in products" :key="product.id">
            <div v-if="product.categoryId === category.id">
              <!-- use vuetifys grid system to oganize menuitems -->
              <v-col sm="6" cols="12">
                <app-menu-item @activate-item-modal="activateModal" :product="product"></app-menu-item>
              </v-col>
            </div>
          </div>
        </template>
      </app-menu-list>
    </div>
    <app-menu-item-modal 
      :product="selectedProduct" 
      @close-modal="itemModalActive = false" 
      :active="itemModalActive"
    >
    </app-menu-item-modal>
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
      itemModalActive: false,
      selectedProduct: {}
    }
  },
  computed: {
    products() {
      return this.$store.getters.getProducts
    },
    categories() {
      return this.$store.getters.getCategories
    },
    // filter through categories so that we only loop through "used" categories
    // categories with no associated items will be left out of loop
    filteredCategories() {
      return this.categories.filter(category => this.products.find(product => category.id === product.categoryId))
    },
  },
  methods: {
    activateModal(productId) {
      this.selectedProductId = productId
      this.selectedProduct = this.$store.getters.getProduct(productId)
      this.itemModalActive = true
    }
  },
}
</script>

<style scoped>
  .page-nav {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }
</style>
