<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goHome = () => router.push({name: 'Home'})

</script>
 
<template>
<div>
    <div>
        Not Found.
    </div>
    <div>
        <div class="bg-slate-900" @click="goHome">
            Go Home
        </div>
    </div>
</div>
</template>
 
<style>

</style>