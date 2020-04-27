<!-- component to display orders in the admin section -->
<!-- dependant on OrderList -->
<template>
  <v-card max-width="344">
    <v-card-title>Ordre #{{ order.id }}</v-card-title>
    <v-list class="transparent">
      <v-list-item v-for="(item, index) in order.orderlines" :key="index">
        <v-list-item-title>{{ item.quantity }}x {{ item.name }}</v-list-item-title>
        <v-list-item-subtitle class="text-right">{{ item.price | formatPrice | nokPrefix }}</v-list-item-subtitle>  
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>{{ userFullname }}</v-list-item-title>
        <v-list-item-subtitle>{{ order.user.phone | formatPhone }}</v-list-item-subtitle>
        <v-list-item-subtitle>{{ order.user.email }}</v-list-item-subtitle>
        <v-list-item-subtitle>Adressegate 1, 1023 Oslo</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
// App imports (components without logic and dependancy)
// -

// General imports (componetns with logic)
// -

// Module imports (components dependant on this one)
// -

export default {
  name: 'OrderItem',
  props: {
    order: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    userFullname() {
      return this.order.user.firstname + ' ' + this.order.user.lastname
    },
  },
}
</script>

<style>

</style>