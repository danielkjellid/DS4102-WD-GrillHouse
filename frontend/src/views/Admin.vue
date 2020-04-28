<!-- view that allows admins to perform CRUD in api objects -->
<template>
  <div>
    <v-content class="pa-10">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="start">
          <v-col>
            <app-order-list></app-order-list>
            <!-- section to display categories -->
            <app-admin-section 
              class="mt-12" 
              sectionTitle="Kategorier" 
              sectionMainAction="Ny kategori" 
              :tableHeaders="categoryHeaders" 
              :defaultItem="categoryStructure" 
              dbInstance="/categories"
            >
            </app-admin-section>
            <!-- section to display products -->
            <app-admin-section 
              class="mt-12" 
              sectionTitle="Produkter" 
              sectionMainAction="Nytt produkt" 
              :tableHeaders="productHeaders" 
              :defaultItem="productStructure" 
              dbInstance="/products"
            >
            </app-admin-section>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>
// App imports (components without logic and dependancy)
//

// General imports (componetns with logic)
// -

// Module imports (components dependant on this one)
import AdminSection from '../components/AdminSection'
import OrderList from '../components/OrderList'

export default {
  name: 'Admin',
  components: {
    'app-admin-section': AdminSection,
    'app-order-list': OrderList
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
        description: '',
        price: 1,
        categoryId: 1,
        image: '',
      }
    }
  },
}
</script>