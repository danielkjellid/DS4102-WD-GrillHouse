<template>
  <div>
    <div>
      <h1>[Get] Existing Categories:</h1>
      <ul>
        <li v-for="category in categories" :key="category.id">{{ category.name }}</li>
      </ul>
    </div>
    <div>
      <h1>[Post] Post new category</h1>
      <label>Category name</label>
      <v-text-field v-model="categoryName"></v-text-field>
      <v-btn @click="postCategory">Post category</v-btn>
      {{ categoryName }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      categories: [],
      categoryName: '',
    }
  },
  methods: {
    getCategories() {
      axios.get('https://localhost:5001/categories')
        .then( response => {
          this.categories = response.data
        })
    },
    postCategory() {
      const formData = {
        name: this.categoryName
      }

      axios.post('https://localhost:5001/categories', formData)
        .then(result => console.log('In post: ' + result))
        .catch(error => console.log(error))
    }
  },
  created() {
    this.getCategories()
  }
}
</script>