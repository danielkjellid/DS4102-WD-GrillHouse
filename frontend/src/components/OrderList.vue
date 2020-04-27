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
import OrderItem from './OrderItem'

export default {
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