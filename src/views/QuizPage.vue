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

const picked = ref([])
console.log(picked)

</script>
 
<template>
<div class="justify-center p-5">
    <h2 class="text-xl"><strong>Title:</strong> {{quizList.title}}</h2>
    <h2 class="text-xl"><strong>Difficult:</strong> {{quizList.difficulty}}</h2>
    <h2 class="text-xl"><strong>Description:</strong> {{quizList.desc}}</h2>
</div>
<div v-for="(quiz,index) in quizList.questionList" class="p-5">
    <p>NO : {{index + 1}}</p>
    <p>Question : {{quiz.question}}</p>
    <ul>
        <li><input type="radio" v-model="picked[index]" value="a">{{quiz.a}}</li>
        <li><input type="radio" v-model="picked[index]" value="b">{{quiz.b}}</li>
        <li><input type="radio" v-model="picked[index]" value="c">{{quiz.c}}</li>
        <li><input type="radio" v-model="picked[index]" value="d">{{quiz.d}}</li>
    </ul>
    <p>{{picked[index]}}</p>
</div>
<div>
    
</div>
</template>
 
<style>

</style>