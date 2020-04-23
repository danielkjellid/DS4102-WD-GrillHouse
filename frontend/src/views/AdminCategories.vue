<template>
  <div>
    <app-admin-template 
      pageTitle="Kategorier" 
      pageMainAction="Ny kateogri" 
      :tableHeaders="categoryHeaders" 
      :tableContent="categories"
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
      categoryHeaders: [
        { text: 'Id', value: 'id' },
        { text: 'Navn', value: 'name', sortable: false },
        { text: 'Handlinger', value: 'actions', sortable: false },
      ],
      categories: [],
      objectStructure: {
        id: 0,
        name: '',
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
      this.categories = [
        {
          id: 1,
          name: 'Burgere',
        },
        // ...
      ]

      // TODO: pull data from DB
    },
  }
}
</script>