<script setup>
import QuizTypeSelect from '../components/QuizTypeSelect.vue'
import { ref, onBeforeMount } from 'vue'
const quizList = ref([])
const httpQuiz = ' http://localhost:5000/quizList'

const getQuizList = async () => {
  const resQuiz = await fetch(httpQuiz)
  if (resQuiz.status === 200) {
    quizList.value = await resQuiz.json()
    console.log(quizList.value)
  } else {
    console.log(`error, cannot get quiz list`)
  }
  // count.value = songList.value.length
}

onBeforeMount(async () => {
  await getQuizList()
})

const selectQuizType = ref('')

const selectCategory = (category) => {
  selectQuizType.value = category
  console.log(selectQuizType.value)
}
</script>

<template>
  <QuizTypeSelect
    :listQuiz="quizList"
    @selectType="selectCategory"
  ></QuizTypeSelect>
</template>

<style></style>
