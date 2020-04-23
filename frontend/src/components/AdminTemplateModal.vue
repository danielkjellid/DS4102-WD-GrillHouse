<template>
  <v-dialog :value="active" max-width="500px" @input="close">
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
</template>

<script>
export default {
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
        this.$emit('saved-item', {editedIndex: this.editedIndex, editedItem: this.editedItem})
        // Object.assign(this.tableContent[this.editedIndex], this.editedItem)
      // if it doesnt exist, push the editedItem data to the array
      } else {
        this.$emit('new-item', this.editedItem)
        //this.tableContent.push(this.editedItem)
      }
      this.close()
      // TODO: link up so it creates in DB
    },
  },

}
</script>