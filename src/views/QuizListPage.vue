<script setup>
import bar from '../components/Bar.vue'
import QuizList from '../components/QuizList.vue'
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
  await getList()
})
const route = useRoute()
const status = computed(() => route.params.status 
  
)

const Filter = async(text)=>{
  console.log(text)
  const textFilter = text.toLocaleUpperCase()
  const res = await fetch(URL)
  const data = await res.json()
  if(res.status){
    console.log(textFilter)
    quizLists.value = data.filter((e) => e.title.toLocaleUpperCase().includes(textFilter))
    console.log(quizLists.value)
    return quizLists.value
  }
}


</script>

<template>
  <bar></bar>
  <Search :quizLists="quizLists" @filter="Filter"></Search>
  <QuizList :status="status" :quizLists = "quizLists" ></QuizList>
</template>

<style></style>
