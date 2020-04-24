<template>
  <div>
    <app-admin-template 
      pageTitle="Kategorier" 
      pageMainAction="Ny kateogri" 
      :tableHeaders="categoryHeaders" 
      :defaultItem="objectStructure"
      dbInstance="/categories"
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
      objectStructure: {
        name: '',
      }
    }
  },
}
</script>