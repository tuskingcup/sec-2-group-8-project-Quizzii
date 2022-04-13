<script setup>
import {useRoute} from 'vue-router'
import {onBeforeMount} from 'vue'
const {params} = useRoute()
const URL = 'http://localhost:5000'


const getQuiz = async(param) => {
    const res = await fetch(param)
    const data = await res.json()
    console.log(data)
}

onBeforeMount(async() => {
    await getQuiz(params.URL)
})

</script>
 
<template>
<p>Hello</p>
</template>
 
<style>

</style>