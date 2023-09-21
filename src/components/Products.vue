<script setup>
import { ref, reactive, onBeforeMount } from 'vue'
import axios from 'axios'
const products = ref([])
function getSlug(title) {
    return title.toLowerCase().replace(/\s+/g, '-')
}
onBeforeMount(() => {
    axios.get('https://dummyjson.com/products?limit=20')
        .then(res => {
            products.value = res.data.products
        })
})

function loadMore() {
    axios.get('https://dummyjson.com/products?limit=20&skip=20')
        .then(res => {
            products.value = [...products.value, ...res.data.products]
        })
}
</script>
<template >
    <div class="flex flex-wrap">
        <article class="mb-10 flex-col flex justify-center   md:basis-1/2  lg:basis-1/3 sm:basis-full" v-for="post in products" :key="post.id">
            <p>
            <router-link :to="{ name: 'post', params: { id: post.id } }">
                <img :src="`https://i.dummyjson.com/data/products/${post.id}/thumbnail.jpg`" alt="">
            </router-link>
          
        </p>
        <h1 class="text-xl mb-2">
            <!-- <router-link :to="{ name: 'post', params: { id: getSlug(post.title) } }">{{ post.title }}</router-link> -->
            <router-link :to="{ name: 'post', params: { id: post.id } }">{{ post.title }}</router-link>
        </h1>
        
        <p>
            Price: ${{ post.price }}
        </p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <router-link :to="{ name: 'post', params: { id: post.id } }">
                View Details
            </router-link>
        </button>

    </article>
    </div>
    
    <button @click="loadMore()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" v-if="products.length>0">
        Load More
    </button>
</template>

<style scoped>
img,p,h1{
    text-align: center;
}
h1{
    padding-top: 1rem;
}
article{
    padding: 1rem
}
button{
    margin-top: 1rem;
}

</style>