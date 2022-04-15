<script setup>
import { reactive, ref } from 'vue'
defineEmits(['deleteNote','editNote'])

defineProps({
    quizList :{
        type: Array,
        require: true
    }
})

</script>
 
<template>

<div>
    <div
    v-for="(quiz, index) in quizList"
    >
      <div >
        <p >ID : {{ quiz.id }} <br>Quest : {{ quiz.question }}</p> 
      </div>
      <button @click="$emit('editNote', quiz)">Edit</button> &nbsp;
      <button v-show="quiz.id >= 4" @click="$emit('deleteNote', quiz.id,quiz.question)">Delete</button> <br>  <br>  
    </div> 
  </div>

</template>
 
<style>

</style>