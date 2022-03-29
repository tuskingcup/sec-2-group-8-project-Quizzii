<script setup>
import searchBar from '../components/searchBar.vue'
</script>
 
<template>
<nav class="relative rounded-b-xl select-none bg-[#2b2012] lg:flex lg:items-stretch w-full">
  <div class="flex flex-no-shrink items-stretch h-20">
    <img src="../assets/ToonZone.jpg" class="flex-no-grow flex-no-shrink relative top-2 left-24 w-16 h-16 "> 
  </div>
  <div class="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
    <div class="lg:flex lg:items-stretch lg:justify-start ml-32">
      <router-link :to="{ name : 'Home' }" exact class="flex-no-grow flex-no-shrink relative text-white py-2 px-6 leading-normal no-underline flex items-center hover:bg-base-300/[.05] hover:rounded-lg">HOME</router-link>
      <router-link :to="{ name : 'Popular' }" exact class="flex-no-grow flex-no-shrink relative text-white py-2 px-6 leading-normal no-underline flex items-center hover:bg-base-300/[.05] hover:rounded-lg">POPULAR</router-link>
      <router-link to="/#" exact class="flex-no-grow flex-no-shrink relative text-white py-2 px-6 leading-normal no-underline flex items-center hover:bg-base-300/[.05] hover:rounded-lg">item 3</router-link>
    </div>
  </div>
  <search-bar></search-bar>
</nav>
</template>
 
<style scoped>

.router-link-exact-active {
  background-color: rgb(232, 207, 193, 0.2);
  color : #d67747;
  border-radius: 0.5rem;
}
</style>