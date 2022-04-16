<script setup>
import {useRoute} from 'vue-router'

</script>
 
<template>

<router-view :key="$route.fullPath"> </router-view>
</template>
 
<style>

</style>