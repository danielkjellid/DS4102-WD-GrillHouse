<template>
  <div>
    <div>
      <h1>[Get] Existing Products:</h1>
      <ul>
        <li v-for="product in products" :key="product.id">{{ product.name }}</li>
      </ul>
    </div>
    <div>
      <h1>[Post] Post new product</h1>
      
      <label>Name</label>
      <v-text-field v-model="product.name"></v-text-field>
      <label>price</label>
      <v-text-field v-model="product.price"></v-text-field>
      <label>Desc</label>
      <v-text-field v-model="product.description"></v-text-field>
      <label>Image</label>
      <v-file-input v-model="files"></v-file-input>
      <v-btn @click="post">Post</v-btn>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      products: [],
      product: {
        name: 'test',
        price: 100.00,
        description: 'Test desc',
        image: '',
        categoryId: 1
      },
      files: [],
    }
  },
  methods: {
    getProducts() {
      axios.get('/products')
        .then( response => {
          this.products = response.data
        })
    },
    post() {
      this.product.image = this.files.name

      
      axios.post('/products', this.product)
        .then(response => {
          this.uploadImage()
          console.log(response)
        })
        .catch(error => console.log(error))
    },
    uploadImage() {
      
      let data = new FormData();
      data.append('file', this.files);

      axios.post('/products/uploadimage', data, { headers: {'Content-Type': 'multipart/form-data'}})
        .then(res => console.log(res))
    
    }
  },
  created() {
    this.getProducts()
  }
}
</script>