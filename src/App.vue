<script setup>
import navbar from './components/navbar.vue'
</script>
 
<template>
 <div>
   <navbar></navbar>
  <div>
    <router-link :to="{ name: 'Home'}">Home</router-link> |
  </div>
  <div>
    <router-view></router-view>
  </div>
</div>
</template>
 
<style scoped>

</style>