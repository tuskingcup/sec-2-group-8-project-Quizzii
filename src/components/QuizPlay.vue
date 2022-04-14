<script setup>
import { useRoute } from 'vue-router'
defineEmits(['submit', 'selectAns', 'nextQuestion'])

const props = defineProps({
  questionList: {
    type: Object,
  },
  selected: {
    type: String,
  },
  currentQuestion: {
    type: Number,
  },
  score: {
    type: Number,
  },
  index: {
    type: Number,
  },
  count: {
    type: Number,
  },
  correctScore:{
    type: Number,
  },
  wrongScore:{
    type: Number,
  }
})
</script>

<template>
  <div class="m-5">
    <div>Your scored {{ score }} / {{ questionList.questionList.length }}</div>

    <h1>
      Question {{ currentQuestion + 1 }} :
      {{ questionList.questionList[currentQuestion].question }}
    </h1>

    <label
      v-for="(choice, index) in questionList.questionList[currentQuestion]
        .choice"
      :key="index"
      class="flex mt-4"
      :class="{ 'hover:text-slate-600 cursor-pointer': selected == '' }"
    >
      <input
        type="radio"
        class="hidden"
        :disabled="selected != ''"
        :value="index"
        @change="$emit('selectAns', index)"
      />
      {{ choice }}
    </label>
  </div>
  <button
    v-show="selected != ''"
    class="mt-5 border-2 px-2"
    @click="$emit('nextQuestion', index)"
  >
    Next Question
  </button>
  <div v-show="currentQuestion = "
  class="mt-5">
      <h1>Results</h1>
      <p>Correct Answers: <span>{{correctScore}} </span> Wrong Answers: <span>{{wrongScore}} </span> </p>
  </div>
</template>

<style></style>
