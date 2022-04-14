<script setup>
import { useRoute } from 'vue-router'
defineEmits(['submit', 'selectAns', 'nextQuestion', 'showResults'])

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
  },
  quizLength:{
    type: Number,
  },
  showResult:{
    type: Boolean,
  }
})
</script>

<template>
  <div class="m-5" v-if="currentQuestion < quizLength">
    <div>Your scored {{ score }} / {{ quizLength }}</div>

    <h1>
      Question {{ currentQuestion + 1 }} :
      {{ questionList.questionList[currentQuestion]['question'] }}
    </h1>

    <label
      v-for="(choice, index) in questionList.questionList[currentQuestion]
        .choice"
      :key="index"
      class="flex mt-4"
      :class="{ 'hover:text-slate-600 cursor-pointer': selected == '' },
  {'bg-green-200 text-white' : index == questionList.questionList[currentQuestion].answer && selected != ''},
      {'bg-red-500 ' : selected == index}
      
      "
    >
      <input
        type="radio"
        
        :disabled="selected != ''"
        :value="index"
        @change="$emit('selectAns', index)"
      />
      {{ choice }}
    </label>
  </div>
  <button
    class="mt-5 border-2 px-2" v-show="selected != '' && currentQuestion < quizLength-1"
    @click="$emit('nextQuestion', index)"
  >
    Next Question
  </button>
   <button
    class="mt-5 border-2 px-2"  v-show="selected != '' && currentQuestion == quizLength-1"
    @click="$emit('showResults', showResult = true)"
  >
    Finish
  </button>
  <div
  class="mt-5" v-show="showResult ==  true">
      <h1>Results</h1>
      <p>Correct Answers: <span>{{correctScore}} </span> Wrong Answers: <span>{{wrongScore}} </span> </p>
  </div>
</template>

<style></style>
