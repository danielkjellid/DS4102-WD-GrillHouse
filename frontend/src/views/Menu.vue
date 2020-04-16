<template>
  <div>
    <div>
      <!-- change image based on viewport -->
      <v-img v-if="$vuetify.breakpoint.name == 'xs'" :src="require('@/assets/images/header-mobile.jpg') " :max-height="200" :min-width="'100%'" :alt="'Image of burgers'"></v-img>
      <v-img v-else-if="$vuetify.breakpoint.name == 'sm' || $vuetify.breakpoint.name == 'md'" :src="require('@/assets/images/header-tablet.jpg') " :max-height="200" :min-width="'100%'" :alt="'Image of burgers'"></v-img>
      <v-img v-if="$vuetify.breakpoint.name == 'lg' || $vuetify.breakpoint.name == 'xl'" :src="require('@/assets/images/header-desktop.jpg') " :max-height="200" :min-width="'100%'" :alt="'Image of burgers'"></v-img>
    </div>
    <app-menu-list :title="'Burgere'">
      <template #menu-items>
        <v-col sm="6" cols="12"  v-for="item in 4" :key="item">
          <app-menu-item :title="'Cheese'" :price="109.00" :desc="'Burger av 150g høyrygg av okse, med salat, ost, rødløk, tomat.'" :starValue="4" :amountOfReviews="18"></app-menu-item>
        </v-col>
      </template>
    </app-menu-list>
    <app-menu-list :title="'Test'">
      <template #menu-items>
        <v-col sm="6" cols="12"  v-for="item in 4" :key="item">
          <app-menu-item :title="'Cheese'" :price="109.00" :desc="'Burger av 150g høyrygg av okse, med salat, ost, rødløk, tomat.'" :starValue="4" :amountOfReviews="18"></app-menu-item>
        </v-col>
      </template>
    </app-menu-list>
  </div>
</template>

<script>
import MenuList from '../components/MenuList'
import MenuItem from '../components/MenuItem'

export default {
  name: 'Menu',
  components: {
    'app-menu-list': MenuList,
    'app-menu-item': MenuItem
  }
}
</script>
