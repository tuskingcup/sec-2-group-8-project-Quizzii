<script setup>
import QuizPlay from '../components/QuizPlay.vue'
import { useRoute } from 'vue-router'
import { ref, onBeforeMount } from 'vue'

const { params } = useRoute()
const URL = 'http://localhost:5000/quizList'
console.log(params.id)

let quizLength = ref(0)

const getQuizQuestions = async (param) => {
  const res = await fetch(`${URL}/${param}`)
  const data = await res.json()
  questionList.value = data
  quizLength.value = Object.keys(questionList.value.questionList).length
  console.log(quizLength.value)
  console.log(data)
}

onBeforeMount(async () => {
  await getQuizQuestions(params.id)
})

let questionList = ref({})



const currentQuestion = ref(0)

const score = ref(0)

const correctScore = ref(0)
const wrongScore = ref(0)

const selected = ref('')

const selectAns = (ans) => {
  selected.value = ans
  if (
    selected.value ==
    questionList.value.questionList[currentQuestion.value].answer
  ) {
    correctScore.value++
    score.value++
  } else {
    wrongScore.value++
  }
  

  console.log(`Your Answer: ${selected.value}`)
  console.log(`Correct score: ${correctScore.value}`)
  console.log(`Wrong score: ${wrongScore.value}`)
}

// console.log(questionList.value.questionList[currentQuestion].answer)

const index = ref(0)

const nextQuestion = () => {
  currentQuestion.value++
  selected.value = ''
}




</script>

<template>
  <QuizPlay
    :questionList="questionList"
    :selected="selected"
    :currentQuestion="currentQuestion"
    :index="index"
    :score="score"
    :correctScore="correctScore"
    :wrongScore="wrongScore"
    :quizLength="quizLength"
    @selectAns="selectAns"
    @nextQuestion="nextQuestion"
  ></QuizPlay>
</template>

<style></style>
