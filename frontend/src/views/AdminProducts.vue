<template>
  <div>
    <app-admin-template 
      pageTitle="Produkter" 
      pageMainAction="Nytt produkt" 
      :tableHeaders="productHeaders" 
      :defaultItem="objectStructure"
      dbInstance="/products"
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
        { text: 'Handlinger', value: 'actions', sortable: false },
      ],
      objectStructure: {
        name: '',
        price: 100.00,
        description: '',
        image: '',
        categoryId: 1
      }
    }
  },
}
</script>