<template>
    <div>
    <h1>Api testing fra sia</h1>
    <article v-for="product in products" :key="product.productId">
        <h3> {{product.productId}} -- {{product.name}} -- {{product.price}} -- {{product.description}} -- {{product.image}} -- {{product.category}} </h3>
    </article>
  </div>
</template>

<script>
import axios from 'axios'
export default {

    name: 'TestApi',
    data(){
        return{
            products: [ { productId: 999, name: 'Dumburger', price: 1337, description: "superkvalitet", image: "dum.jpg", category: 'ja' } ]
        }
    },
    created(){
        let webapiurl = "https://localhost:5001/product";

        axios.get(webapiurl)
            .then(result => {
                this.products = result.data;
                console.log(result.data);
            })

        let urlnrto = "https://localhost:5001/category"

        axios.get(urlnrto)
            .then(result => {
                console.log(result.data);
            })
    }

}
</script>

<style>

</style>