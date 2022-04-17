<script setup>
import Bar from '../components/Bar.vue'
import QuizList from '../components/QuizList.vue'
import Search from '../components/Search.vue'
import { ref, onBeforeMount, computed } from 'vue'
import { useRoute } from 'vue-router'

const quizLists = ref([])
const URL = 'http://localhost:5000/quizList'
const getList = async () => {
  const res = await fetch(URL)
  quizLists.value = await res.json()
}
onBeforeMount(async () => {
  await getList()
})
const route = useRoute()
const status = computed(() => route.params.status)

function getFilter(filter) {
  quizLists.value = filter
}
</script>

<template>
  <Bar></Bar>
  <Search :quizLists="quizLists" @filter="getFilter"></Search>
  <QuizList :status="status" :quizLists="quizLists"></QuizList>
</template>

<style></style>
