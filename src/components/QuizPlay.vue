<script setup>
import { useRoute } from 'vue-router'
defineEmits(['submit'])


let { params } = useRoute()

const props = defineProps({
  questionList: {
    type: Object,
  },
   selected: {
    type: Array,
  },
  currentQuestion :{
    type: Number
  },
  score:{
    type: Number
  }
})

</script>

<template>
    <div>Your scored {{score}} / {{questionList.questionList.length}} </div>
  
    
    <h1>Question {{currentQuestion + 1}} : {{questionList.questionList[currentQuestion].question}}</h1>
    
    <div v-for="(choice, index) in questionList.questionList[currentQuestion].choice" :key="index" class="m-2" >
         <input type="radio" v-model="selected" :value="choice"> 
         {{choice}}
         
    </div>
   

   <button class="m-5 border-2 px-2" @click="$emit('next')">Next Question</button>
   {{selected}}
</template>

<style></style>
