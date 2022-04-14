<script setup>
import {useRoute} from 'vue-router'
import {onBeforeMount,ref} from 'vue'
const {params} = useRoute()
const URL = 'http://localhost:5000/quizList'
const quizList = ref({})
console.log(params.id)

const getQuiz = async(param) => {
    const res = await fetch(`${URL}/${param}`)
    const data = await res.json()
    quizList.value = data
    console.log(quizList.value.questionList)
}

onBeforeMount(async() => {
    await getQuiz(params.id)
})

</script>
 
<template>
<div v-for="(quiz,index) in quizList.questionList" class="p-5">
    <p>NO : {{index + 1}}</p>
    <p>Question : {{quiz.question}}</p>
    <input type="checkbox">{{quiz.a}}
    <input type="checkbox">{{quiz.b}}
    <input type="checkbox">{{quiz.c}}
    <input type="checkbox">{{quiz.d}}
    <hr>
</div>
</template>
 
<style>

</style>