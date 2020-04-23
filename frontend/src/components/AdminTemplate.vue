<!-- template component for all admin pages -->
<!-- creates table, populate it, and add new item/edit item modal -->
<template>
  <div>
    <the-admin-header></the-admin-header>
    <v-content class="pa-10">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="start">
          <v-col>
            <h1 class="headline mb-5">{{ pageTitle }}</h1>            
            <v-data-table :headers="tableHeaders" :items="tableContent" sort-by="id" class="elevation-1">
              <template #top>
                <v-toolbar flat color="white">
                  <v-spacer></v-spacer>
                  <v-btn @click.stop="modalOpen = true" color="primary" dark class="mb-2">{{ pageMainAction }}</v-btn>
                  <app-admin-template-modal 
                    :active="modalOpen" 
                    :editedIndex="editedIndex"
                    :editedItem="editedItem"
                    @saved-item="savedItem"
                    @new-item="newItem"
                    @close-modal="closeModal"
                  >
                  </app-admin-template-modal>
                </v-toolbar>
              </template>
              <template #item.actions="{ item }">
                <v-icon small class="mr-2" @click="editItem(item)">
                  mdi-pencil
                </v-icon>
                <v-icon small @click="deleteItem(item)">
                  mdi-delete
                </v-icon>
              </template>
              <template #no-data>
                <p>Ingen data funnet</p>
              </template>
            </v-data-table>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import TheAdminHeader from '../layout/TheAdminHeader'
import AdminTemplateModal from './AdminTemplateModal'

export default {
  components: {
    'the-admin-header': TheAdminHeader,
    'app-admin-template-modal': AdminTemplateModal
  },
  props: {
    pageTitle: {
      type: String,
      required: true,
      default: 'Page title'
    },
    pageMainAction: {
      type: String,
      required: true,
      default: 'Page main action button'
    },
    tableHeaders: {
      type: Array,
      required: true
    },
    tableContent: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      modalOpen: false,
      defaultItem: {
        image: '',
        id: 0,
        name: '',
        description: '',
        price: 0,
        assesment: 0,
      },
      editedIndex: -1,
      editedItem: {
        image: '',
        id: 0,
        name: '',
        description: '',
        price: 0,
        assesment: 0,
      },
    }
  },
  methods: {
    editItem (item) {
      // takes clicked item and sets editedIndex (used for temporary storing object place in array)
      // then sets the edited item equal to the object, and opens dialog
      this.editedIndex = this.tableContent.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.modalOpen = true

      // TODO: link up so it puts in DB
    },
    deleteItem (item) {
      // takes the clicked item and splices (removes) it from array on confirm alert
      const index = this.tableContent.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.tableContent.splice(index, 1)

      // TODO: link up so it deletes from DB
    },
    savedItem(value) {
      Object.assign(this.tableContent[value.editedIndex], value.editedItem)
    },
    newItem(value) {
      // temporary push mutating prop directly
      // will be replaced with axios and DB create
      this.tableContent.push(value)
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

<style>

</style>