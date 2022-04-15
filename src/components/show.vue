<script setup>
defineEmits(['deleteNote', 'editNote'])

defineProps({
  quizList: {
    type: Array,
    require: true
  }
})
</script>

<template>
  <div class="relative">
    <div v-for="(quiz, index) in quizList" class="absoluted my-8 mx-16">
      <div class="px-10 py-5 bg-base-200 rounded-lg hover:bg-base-300 hover:drop-shadow-[0_15px_15px_rgba(255,255,255,.1)]">
        <div class="">
          <p>Question : {{ quiz.question }}</p>
          <div class="text-base-300 mt-5 justify-evenly">
          <button class="bg-amber-400 px-5 rounded-xl hover:scale-110" @click="$emit('editNote', quiz)">Edit</button> &nbsp;
          <button class="border px-5 rounded-xl text-red-400 hover:scale-110 hover:bg-base-200" v-show="quiz.id >= 4" @click="$emit('deleteNote', quiz.id, quiz.question)">
            Delete
          </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>
