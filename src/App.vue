<script setup>
</script>

<template>
  <!-- <header class="bg-black border-b-light-100 border-b h-20 text-white items-center flex p-5 text-2xl">A Wonderful Blog</header> -->
  <section >
    
    <ul class="flex  justify-evenly	pt-5 pb-5 bg-slate-400	">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/products">Shop</router-link>
          </li>
        </ul>
    <main class=" p-5">
      <router-view></router-view>
    </main>
  </section>
</template>

<style scoped></style>
