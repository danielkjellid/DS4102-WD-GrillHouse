<!-- component to display a list of orders in /admin -->
<template>
  <div>
    <h1 class="headline">Ordre</h1>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="start">
          <v-col v-for="(order, index) in getOrders" :key="order.id" cols="12" sm="4" md="3">
            <app-order-item :index="index" :order="order"></app-order-item>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>
// App imports (components without logic and dependancy)
// -

// General imports (componetns with logic)
// -

// Module imports (components dependant on this one)
import OrderItem from './OrderItem'

export default {
  name: 'OrderList',
  components: {
    'app-order-item': OrderItem,
  },
  computed: {
    getOrders() {
      return this.$store.getters.getFulfillment
    }
  },
}
</script>