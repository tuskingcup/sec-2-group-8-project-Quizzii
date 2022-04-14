<script setup>
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
</script>

<template>
  <div class="flex flex-wrap justify-center mt-5">
    <div class="card w-96 mx-6 my-5 bg-base shadow-xl image-full" v-for="quizList in quizLists">
      <figure>
        <img
          :src="quizList.img"
          alt="movie"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{quizList.title}}</h2>
        <p>{{quizList.desc}}</p>
        <div class="card-actions justify-between uppercase">
          <p>Difficulty : {{quizList.difficulty}}</p>
          <router-link :to="{name : 'Quiz',params:{id : quizList.id}}">
          <button class="btn btn-primary">Let's Quiz</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>

    <!-- <div class="flex flex-wrap justify-center mt-5">
    <div class="card w-96 mx-6 my-5 bg-base shadow-xl image-full" v-for="quizList in quizLists">
      <div class="card-body">
        <h2 class="card-title">{{quizList.category}}</h2>
        <div class="card-actions justify-between uppercase">
          <router-link :to="{name : 'Quiz',params:{category : quizList.category, question : quizList.question, choice : quizList.choice, correct_answer : quizList.correct_answer}}">Let's Quiz</router-link>
        </div>
      </div>
    </div>
  </div> -->
</template>

<style></style>
