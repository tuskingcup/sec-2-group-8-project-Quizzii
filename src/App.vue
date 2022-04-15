<script setup>
import {useRoute} from 'vue-router'

const {params} = useRoute()
console.log(params.status)

</script>
 
<template>

<router-view> </router-view>
</template>
 
<style>

</style>