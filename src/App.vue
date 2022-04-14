<script setup>

</script>
 
<template>
 <div>
  <div>
    <router-link :to="{ name: 'Home'}">Home</router-link> 
  </div>
  <div>
    <router-view></router-view>
  </div>
</div>
</template>
 
<style scoped>

</style>