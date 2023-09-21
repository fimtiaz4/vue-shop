<script setup>
import { useRoute } from 'vue-router';
import { reactive, onBeforeMount } from 'vue'
import axios from 'axios'
const route = useRoute()
const id = route.params.id
const post = reactive({})
onBeforeMount(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
        .then(res => {
            post.id = res.data.id
            post.title = res.data.title
            post.body = res.data.body
            post.price = res.data.price
            post.des = res.data.description
        })
})
</script>
<template >
    <article class="mb-10 mt-10 ">
        <p>
            <img :src="`https://i.dummyjson.com/data/products/${post.id}/thumbnail.jpg`" alt="">
            {{ post.body }}
        </p>
        <h1 class="text-xl mb-2 font-bold mt-3">
            {{ post.title }}
        </h1>
        <p>
            <strong>Price:</strong> ${{ post.price }}
        </p>
        <p>
            <strong>Description:</strong> {{ post.des }}
        </p>
        
    </article>
</template>

<style></style>