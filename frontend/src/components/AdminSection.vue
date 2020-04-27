<!-- template component for creating a section in /admin -->
<!-- creates table, populate it, and add new item/edit item modal -->
<template>
  <div>
    <div>
      <h1 class="headline mb-5">{{ sectionTitle }}</h1>
      <!-- create table and populate it with data sent from parent -->         
      <v-data-table :headers="tableHeaders" :items="tableContent" sort-by="id" class="elevation-1">
        <template #top>
          <v-toolbar flat color="white">
            <v-spacer></v-spacer>
            <!-- button that activates modal, labled as main section action -->
            <v-btn @click.stop="modalOpen = true" color="primary" dark class="mb-2">{{ sectionMainAction }}</v-btn>
            <!-- modal that allows you to edit or create a new item -->
            <app-admin-section-modal 
              :active="modalOpen" 
              :editedIndex="editedIndex"
              :editedItem="editedItem"
              :dbInstance="dbInstance"
              @saved-item="savedItem"
              @new-item="newItem"
              @close-modal="closeModal"
            >
            </app-admin-section-modal>
          </v-toolbar>
        </template>
        <!-- item sepcific delete and edit actions -->
        <template #item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)">
            mdi-delete
          </v-icon>
        </template>
        <!-- if there are no data, display message -->
        <template #no-data>
          <p>Ingen data funnet</p>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

// App imports (components without logic and dependancy)
// -

// General imports (componetns with logic)
// -

// Module imports (components dependant on this one)
import AdminSectionModal from './AdminSectionModal'

export default {
  name: 'AdminSection',
  components: {
    'app-admin-section-modal': AdminSectionModal
  },
  props: {
    sectionTitle: {
      type: String,
      required: true,
      default: 'Page title'
    },
    sectionMainAction: {
      type: String,
      required: true,
      default: 'Page main action button'
    },
    tableHeaders: {
      type: Array,
      required: true
    },
    defaultItem: {
      type: Object,
      required: true
    },
    dbInstance: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      modalOpen: false,
      editedIndex: -1,
      editedItem: {},
      tableContent: [],
    }
  },
  created() {
    // as the strucutre of the objects changes based on what item to display
    // we dynamically set the structure based on the prop sent down
    this.editedItem = Object.assign({}, this.defaultItem)

    // populate table with data
    this.initializeData()
  },
  methods: {
    initializeData() {
      axios.get(this.dbInstance)
        .then(res => {
          this.tableContent = res.data
        })
    },
    editItem(item) {
      // takes clicked item and sets editedIndex (used for temporary storing object place in array)
      // then sets the edited item equal to the object, and opens dialog
      this.editedIndex = this.tableContent.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.modalOpen = true
    },
    deleteItem(item) {
      // takes the clicked item and splices (removes) it from array and DB on confirm alert
      const confirmDelete = confirm('Er du sikker på at du vil slette "' + item.name + '"?')

      if (confirmDelete) {
        axios.delete(this.dbInstance + '/' + item.id)
        .then(() => {
          // re initialize to make table update
          this.initializeData()
        })
        .catch(error => console.error(error))
      } 
    },
    savedItem(value) {
      
      // clean number inputs so that api dont lose its shit
      if (value.editedItem.price != '' && value.editedItem.price != undefined) {
        value.editedItem.price = parseInt(value.editedItem.price)
      }

      if (value.editedItem.categoryId != '' && value.editedItem.categoryId != undefined) {
        value.editedItem.categoryId = parseInt(value.editedItem.categoryId)
      }
      
      axios.put(this.dbInstance, value.editedItem)
        .then(res => {
          console.log(res)
          // re initialize to make table update
          this.initializeData()
        })
    },
    newItem(value) {
      // post new item to db
      // route of post is set trough dbInstance given by parent

      // clean number inputs so that api dont lose its shit
      if (value.price != '' && value.price != undefined) {
        value.price = parseInt(value.price)
      }

      if (value.categoryId != '' && value.categoryId != undefined) {
        value.categoryId = parseInt(value.categoryId)
      }

      axios.post(this.dbInstance, value)
        .then(res => {
          console.log(res)
          this.initializeData()
        })
        .catch(error => console.error(error))
    },
    closeModal() {
      // close modal and reset the editedItem as well as editedIndex
      this.modalOpen = false

      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    }
  },
}
</script>