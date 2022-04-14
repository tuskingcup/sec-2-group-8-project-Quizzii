<script setup>
defineEmits(['selectType'])

const props = defineProps({
  listQuiz: {
    type: Array,
  },
})
</script>

<template>
  <div class="flex flex-wrap justify-center mt-5">
    <div class="card w-96 mx-6 my-5 bg-base shadow-xl" v-for="quiz in listQuiz">
      <div class="card-body">
        <h2 class="card-title">{{ quiz.title }}</h2>
        <p>Description...</p>
        <div class="card-actions justify-end">
          <router-link :to="{ name: 'QuizPlay', params: { id: quiz.id } }">
            <button
              class="btn btn-primary"
              @click="$emit('selectType', quiz.title)"
            >
              Let's Quiz
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
