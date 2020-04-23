<template>
    <div>
    <h1>Api testing fra sia</h1>
    <article v-for="product in products" :key="product.productId">
        <h3> ( {{product.productId}} ) {{product.name}} </h3>
        <p>{{product.price}}</p>
        <p>{{product.description}}</p>
        <p>{{product.categoryId}} </p>
        <img :src="`https://localhost:5001/grillhouse-images/${product.image}`" alt="" style="height:100px;">
    </article>
    <hr>

    <form>
        <h3>Legg til nytt produkt</h3>
        <label>Navn</label>
        <input type="text" v-model="newProduct.name"><br>

        <label>Pris</label>
        <input type="text" v-model="newProduct.price"><br>

        <label>Beskrivelse</label>
        <input type="text" v-model="newProduct.description"><br>

        <input type="text" v-model="newProduct.image"><br>

        <label>Kategori</label>
        <input type="text" v-model="newProduct.categoryId"><br>

        <!-- <v-file-input v-model="file" show-size></v-file-input> -->

        <button @click="addNewProduct">skjært</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {

    name: 'TestApi',
    data(){
        return{
            products: [],
            newProduct: { name: "", price: "", description: "", image: "", categoryId: "" },
            file: null
        }
    },
    methods: {
        addNewProduct(e){
            e.preventDefault();
            /* this.newProduct.image = this.file.name; 

            let data = new FormData();
            data.append("file", this.file); */
            const product = { name: this.newProduct.name, 
            price: this.newProduct.price,
            description: this.newProduct.description,
            image: this.newProduct.image,
            categoryId: this.newProduct.categoryId }

            axios.post( "https://localhost:5001/product", product );
                /* .then( result =>  {
                    console.log(result.data)

                    axios({
                        method: "POST",
                        url: "https://localhost:5001/product/uploadimage",
                        data: data,
                        config: { headers: { 'Content-Type': 'multipart/form-data' } }
                    })
                })  */
            

            console.log(this.newProduct)
        }
    },
    created(){
        const webAPIUrl = "https://localhost:5001/product";

        axios.get(webAPIUrl)
            .then( result => {
                this.products = result.data;
            })
    }

}
</script>

<style scoped>
    input{
        border: 1px solid black;
        margin-left: 20px;
    }
</style>