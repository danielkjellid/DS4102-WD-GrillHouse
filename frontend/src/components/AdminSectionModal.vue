<!-- component do display edit modal when editing/creating new instance in /admin -->
<!-- dependant on AdminSection -->
<template>
  <v-dialog :value="active" max-width="500px" @input="close">
    <v-card>
      <v-card-title>
        <span class="headline">{{ formTitle }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <!-- loop through object keys and add fields for user to interact with -->
            <v-col v-for="(item, key, index) in editedItem" :key="index" cols="12">
              <div v-if="key != 'id'">
                <div v-if="typeof editedItem[key] === 'string' && key != 'image' && key != 'price'">
                  <v-text-field v-model="editedItem[key]" :label="key.toString()"></v-text-field>
                </div>
                <!-- display a special number field for price and categoryId fields -->
                <div v-else-if="key === 'price' || key === 'categoryId'">
                  <v-text-field v-model.number="editedItem[key]" :label="key.toString()" type="number"></v-text-field>
                </div>
                <!-- display a file upload input if the object needs an image -->
                <div v-else-if="typeof editedItem[key] === 'string' && key === 'image'">
                  <p v-if="editedItem[key] != ''">Bilde i bruk: {{ editedItem[key] }}</p>
                  <v-file-input v-model="files" :label="key.toString()" :placeholder="files.name"></v-file-input>
                </div>
              </div>
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
</template>

<script>
import axios from 'axios'

// App imports (components without logic and dependancy)
// -

// General imports (componetns with logic)
// -

// Module imports (components dependant on this one)
// -

export default {
  name: 'AdminSectionModal',
  props: {
    active: {
      type: Boolean,
      required: true,
      default: false
    },
    editedIndex: {
      type: Number,
      required: true,
      default: -1
    },
    editedItem: {
      type: Object,
      required: true
    },
    dbInstance: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      files: [],
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
    active (val) {
      val || this.close()
    },
  },
  methods: {
    close() {
      this.$emit('close-modal')
    },
    save () {
      // if the item exists, update the item in array with the new data
      if (this.editedIndex > -1) {
        
        console.log(this.editedItem)
        this.$emit('saved-item', {editedIndex: this.editedIndex, editedItem: this.editedItem})

        // only run uploadImage method if there is actual files to upload
        if (this.files.name != null) {
          this.uploadImage()
        }
  
      // if it doesnt exist, push the editedItem data to the array
      } else {
        this.$emit('new-item', this.editedItem)

        // only run uploadImage method if there is actual files to upload
        if (this.files.name != null) {
          this.uploadImage()
        }
      }
      this.close()
    },
    uploadImage() {
      // set file name appropriatly in the object
      if(this.editedItem.image === '') {
        this.editedItem.image = this.files.name
      }

      // create new formData instance for API to process
      
      let data = new FormData();
      data.append('file', this.files);

      // upload image to database
      axios.post(this.dbInstance + '/uploadimage', data, { headers: {'Content-Type': 'multipart/form-data'}})
        .then(() => {
          this.files = []
        })
    }
  },
}
</script>