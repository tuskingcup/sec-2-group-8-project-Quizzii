<script setup>
import bar from '../components/Bar.vue'
import QuizList from '../components/QuizList.vue'
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
</script>

<template>
  <bar></bar>
  <QuizList :status="status" :quizLists="quizLists"></QuizList>
</template>

<style></style>
