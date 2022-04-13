<script setup>
import { useRoute } from 'vue-router';

let {params} = useRoute()
console.log(params.category)

</script>
 
<template>
<div>
    <p>Hello Peam</p>
</div>

</template>
 
<style>

</style>