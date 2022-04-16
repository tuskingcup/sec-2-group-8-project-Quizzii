<script setup>
import { ref,computed } from 'vue'
defineEmits(['filter'])

const quizLists = ref([])
const URL = 'http://localhost:5000/quizList'

const Filter = async(text)=>{
  const textFilter = text.target.value.toLocaleUpperCase()
  const res = await fetch(URL)
  const data = await res.json()
  if(res.status){
    quizLists.value = data.filter((e) => e.title.toLocaleUpperCase().includes(textFilter))
    console.log(quizLists.value)
    return quizLists.value
  }
}


</script>
 
<template>
<div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <input
      @input="Filter"
      @keyup="$emit('filter',quizLists)"
      type="search"
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleSearch2"
      placeholder="Type query"
    />
  </div>
</div>
<!-- <div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <input
      v-model="textFilter"
      @keyup="$emit('filter',textFilter)"
      type="search"
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleSearch2"
      placeholder="Type query"
    />
  </div>
</div> -->
</template>
 
<style>

</style>