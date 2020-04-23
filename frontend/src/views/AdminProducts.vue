<template>
  <div>
    <app-admin-template 
      pageTitle="Produkter" 
      pageMainAction="Nytt produkt" 
      :tableHeaders="productHeaders" 
      :tableContent="products"
    ></app-admin-template>
  </div>
</template>

<script>
import AdminTemplate from '../components/AdminTemplate'

export default {
  components: {
    'app-admin-template': AdminTemplate
  },
  data() {
    return {
      productHeaders: [
        { text: 'Bilde', align: 'start', sortable: false, value: 'image', },
        { text: 'Id', value: 'id' },
        { text: 'Navn', value: 'name', sortable: false },
        { text: 'Beskrivelse', value: 'description', sortable: false },
        { text: 'Pris', value: 'price' },
        { text: 'Vurdering', value: 'assesment' },
        { text: 'Handlinger', value: 'actions', sortable: false },
      ],
      products: [],
    }
  },
  created () {
    // populate table with data
    this.initialize()
  },
  methods: {
    initialize() {
      // populate array with items to be displayed in table
      this.products = [
        {
          image: '',
          id: 1,
          name: 'Cheese',
          description: 'Burger av 150g høyrygg av okse, med salat, ost, rødløk, tomat.',
          price: 109.00,
          assesment: 3,
        },
        // ...
      ]

      // TODO: pull data from DB
    },
  }
}
</script>

<style>
</style>