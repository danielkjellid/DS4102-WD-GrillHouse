<template>
  <div>
    <v-content class="pa-10">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="start">
          <v-col>
            <app-admin-template 
              sectionTitle="Kategorier" 
              sectionMainAction="Ny kateogri" 
              :tableHeaders="categoryHeaders" 
              :defaultItem="categoryStructure"
              dbInstance="/categories"
            ></app-admin-template>
            <app-admin-template 
              class="mt-12"
              sectionTitle="Produkter" 
              sectionMainAction="Nytt produkt" 
              :tableHeaders="productHeaders" 
              :defaultItem="productStructure"
              dbInstance="/products"
            ></app-admin-template>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <the-admin-header></the-admin-header>
  </div>
</template>

<script>
import TheAdminHeader from '../layout/TheAdminHeader'
import AdminTemplate from '../components/AdminTemplate'

export default {
  components: {
    'the-admin-header': TheAdminHeader,
    'app-admin-template': AdminTemplate
  },
  data() {
    return {
      categoryHeaders: [
        { text: 'Id', value: 'id' },
        { text: 'Navn', value: 'name', sortable: false },
        { text: 'Handlinger', value: 'actions', align: 'end', sortable: false },
      ],
      categoryStructure: {
        name: '',
      },
      productHeaders: [
        { text: 'Bilde', align: 'start', sortable: false, value: 'image', },
        { text: 'Id', value: 'id' },
        { text: 'Navn', value: 'name', sortable: false },
        { text: 'Beskrivelse', value: 'description', sortable: false },
        { text: 'Pris', value: 'price' },
        { text: 'Kategori', value: 'categoryId' },
        { text: 'Handlinger', align: 'end', value: 'actions', sortable: false },
      ],
      productStructure: {
        name: '',
        price: 0.00,
        description: '',
        image: '',
        categoryId: 1
      }
    }
  },
}
</script>