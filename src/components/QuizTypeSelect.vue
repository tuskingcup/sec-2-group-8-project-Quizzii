<script setup>
defineEmits(['selectType'])

const props = defineProps({
  listQuiz: {
    type: Array,
  },
  selectType: {
    type: String,
  }
})

</script>
 
<template>
    <div class="flex flex-wrap justify-center mt-5">
    <div class="card w-96 mx-6 my-5 bg-base shadow-xl" v-for="quiz in listQuiz">
      <div class="card-body">
        <h2 class="card-title">{{quiz.category}}</h2>
        <p>Description...</p>
        <div class="card-actions justify-end">
            <router-link :to="{ name: 'QuizPlay', params: { category: quiz.category}}">
          <button class="btn btn-primary" @click="$emit('selectType', quiz.category)">Let's Quiz</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
 
<style>

</style>