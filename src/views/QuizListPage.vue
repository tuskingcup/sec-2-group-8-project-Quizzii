<script setup>
import bar from '../components/Bar.vue'
import QuizList from '../components/QuizList.vue'
<<<<<<< HEAD
import { ref, onBeforeMount, computed } from 'vue'
import { useRoute } from 'vue-router'

const quizLists = ref([])
const URL = 'http://localhost:5000/quizList'

const getList = async () => {
  const res = await fetch(URL)
  quizLists.value = await res.json()
}

onBeforeMount(async () => {
=======
import Search from '../components/Search.vue'
import {ref, onBeforeMount, computed} from 'vue'
import { useRoute } from 'vue-router'


const quizLists = ref([])
const URL = 'http://localhost:5000/quizList'
const getList = async() => {
  const res = await fetch(URL)
  quizLists.value = await res.json()
}
onBeforeMount(async()=>{
>>>>>>> runkung
  await getList()
})
const route = useRoute()
const status = computed(() => route.params.status 
  
)

<<<<<<< HEAD
const status = computed(() => route.params.status)
=======

function getFilter (filter) {
  console.log(filter)
  quizLists.value = filter
}


>>>>>>> runkung
</script>

<template>
  <bar></bar>
<<<<<<< HEAD
  <QuizList :status="status" :quizLists="quizLists"></QuizList>
=======
  <Search :quizLists="quizLists" @filter="getFilter"></Search>
  <QuizList :status="status" :quizLists = "quizLists" ></QuizList>
>>>>>>> runkung
</template>

<style></style>
