<template>
  <div>
    <app-admin-template 
      pageTitle="Produkter" 
      pageMainAction="Nytt produkt" 
      :tableHeaders="productHeaders" 
      :tableContent="products"
      :defaultItem="objectStructure"
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
      objectStructure: {
        id: 0,
        name: '',
        description: '',
        price: 0,
        image: '',
        assesment: 0,
      }
    }
  },
  created () {
    // populate table with data
    this.initializeData()
  },
  methods: {
    initializeData() {
      // populate array with items to be displayed in table
      this.products = [
        {
          id: 1,
          name: 'Cheese',
          description: 'Burger av 150g høyrygg av okse, med salat, ost, rødløk, tomat.',
          price: 109.00,
          image: '',
          assesment: 3,
        },
        // ...
      ]

      // TODO: pull data from DB
    },
  }
}
</script>