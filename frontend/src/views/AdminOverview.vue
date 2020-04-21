<template>
  <div>
    <the-admin-header></the-admin-header>
    <v-content class="pa-10">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="start">
          <v-col>
            <!-- content -->
            <h1 class="headline mb-5">Produkter</h1>            
            <v-data-table :headers="headers" :items="desserts" sort-by="id" class="elevation-1">
              <template v-slot:top>
                <v-toolbar flat color="white">
                  <v-spacer></v-spacer>
                  <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on }">
                      <v-btn color="primary" dark class="mb-2" v-on="on">Nytt produkt</v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="headline">{{ formTitle }}</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12">
                              <v-text-field v-model="editedItem.name" label="Navn"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                              <v-textarea v-model="editedItem.description" label="Beskrivelse"></v-textarea>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-text-field v-model="editedItem.price" label="Pris"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-file-input label="Bilde"></v-file-input>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                        <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-toolbar>
              </template>
              <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="editItem(item)">
                  mdi-pencil
                </v-icon>
                <v-icon small @click="deleteItem(item)">
                  mdi-delete
                </v-icon>
              </template>
              <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">Reset</v-btn>
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

export default {
  components: {
    'the-admin-header': TheAdminHeader,
  },
  data() {
    return {
      dialog: false,
      headers: [
        { text: 'Bilde', align: 'start', sortable: false, value: 'image',},
        { text: 'Id', value: 'id' },
        { text: 'Navn', value: 'name', sortable: false },
        { text: 'Beskrivelse', value: 'description', sortable: false },
        { text: 'Pris', value: 'price' },
        { text: 'Vurdering', value: 'assesment' },
        { text: 'Handlinger', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        image: '',
        id: 0,
        name: '',
        description: '',
        price: 0,
        assesment: 0,
      },
      defaultItem: {
        image: '',
        id: 0,
        name: '',
        description: '',
        price: 0,
        assesment: 0,
      },
    }
  },
  computed: {
    formTitle () {
      // check if the item clicked is an existing object, or if its a new one
      // and set the dialog title accordingly
      return this.editedIndex === -1 ? 'Nytt objekt' : 'Rediger'
    },
  },
  watch: {
    dialog (val) {
      val || this.close()
    },
  },
  created () {
    // populate table with data
    this.initialize()
  },
  methods: {
    initialize () {
      this.desserts = [
        {
          image: '',
          id: 1,
          name: 'Frozen Yogurt',
          description: 'Burger av 150g høyrygg av okse, med salat, ost, rødløk, tomat.',
          price: 109.00,
          assesment: 3,
        },
        // ...
      ]
    },
    editItem (item) {
      // takes clicked item and sets editedIndex (used for temporary storing object place in array)
      // then sets the edited item equal to the object, and opens dialog
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    deleteItem (item) {
      // takes the clicked item and splices (removes) it from array on confirm alert
      const index = this.desserts.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
    },
    close () {
      // close modal and reset the editedItem as well as editedIndex
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },
    save () {
      // if the item exists, update the item in array with the new data
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      // if it doesnt exist, push the editedItem data to the array
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    },
  },
} 
</script>

<style>
</style>