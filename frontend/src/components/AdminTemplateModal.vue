<template>
  <v-dialog :value="active" max-width="500px" @input="close">
    <v-card>
      <v-card-title>
        <span class="headline">{{ formTitle }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col v-for="(item, key, index) in editedItem" :key="index" cols="12">
              <div v-if="key != 'id'">
                <div v-if="typeof key === 'string' && key != 'image'">
                  <v-text-field v-model="editedItem[key]" :label="key.toString()"></v-text-field>
                </div>
                <div v-else-if="typeof key === 'number'">
                  <v-text-field v-model="editedItem[key]" :label="key.toString()" type="number"></v-text-field>
                </div>
                <div v-else-if="typeof key === 'string' && key === 'image'">
                  <v-file-input :label="key.toString()"></v-file-input>
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