<script setup>
import QuizList from '../components/QuizList.vue'
</script>

<template>
  <div>
    <button><router-link :to="{name : 'CreateQuiz'}">Create your own Quiz.</router-link></button>
  </div>
  <quiz-list></quiz-list>
</template>

<style></style>
