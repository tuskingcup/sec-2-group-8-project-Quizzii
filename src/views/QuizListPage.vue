<script setup>
import bar from '../components/Bar.vue'
import QuizList from '../components/QuizList.vue'
import Search from '../components/Search.vue'
import { ref,onBeforeMount } from 'vue'
defineEmits(['URL'])
const quizLists = ref([])
const URL = 'http://localhost:5000/quizList'

const getList = async() => {
  const res = await fetch(URL)
  quizLists.value = await res.json()
}

onBeforeMount(async()=>{
  await getList()
})

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
  <search :quizLists="quizLists" @filter="Filter"></search>
  <quiz-list :quizLists="quizLists"></quiz-list>
</template>

<style></style>
