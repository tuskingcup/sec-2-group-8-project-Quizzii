<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import Game from '../components/game.vue'

const {params} = useRoute()

const title = ref(params.title)

//---------create--Quiz-------

</script>

<template>
<game :title="title"></game>
</template>
 
<style scoped>

</style>
