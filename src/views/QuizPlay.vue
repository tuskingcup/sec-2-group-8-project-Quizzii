<script setup>
import QuizPlay from '../components/QuizPlay.vue'
import {useRoute} from 'vue-router'
import {ref, onBeforeMount} from 'vue'


const {params} = useRoute()
const URL = 'http://localhost:5000/quizList'
console.log(params.id)

const getQuizQuestions = async(param) => {
    const res = await fetch(`${URL}/${param}`)
    const data = await res.json()
    questionList.value = data
    console.log(data)
}

onBeforeMount(async() => {
    await getQuizQuestions(params.id)
})

let questionList = ref({})
const selected = ref([])


const currentQuestion = ref(0)

const score = ref(0)

</script>
 
<template>
    <QuizPlay :questionList="questionList" :selected="selected" :currentQuestion="currentQuestion" :score="score"></QuizPlay>
</template>
 
<style>

</style>