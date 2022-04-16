<!-- <script setup>
import { ref,onBeforeMount } from 'vue'
import bar from '../components/Bar.vue'
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
<bar></bar>
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
          <router-link :to="{name : 'Manage',params:{id : quizList.id, title : quizList.title}}">
          <button class="btn btn-primary">Manage</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>

</template>

<style></style> -->
