<script setup>
defineProps({
  quizLists : {
    type : Object,
    require : true
  }
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
          <router-link :to="{name : 'Quiz',params:{id : quizList.id, title : quizList.title}}">
          <button class="btn btn-primary">Let's Quiz</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
