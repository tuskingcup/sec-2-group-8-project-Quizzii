<script setup>
import {ref} from 'vue'
const onBar = ref(
  {status: 'play'}
)
</script>
 
<template>
<div class="absolute">
  <span class="animate-ping-fast relative inline-flex rounded-full h-12 w-12 inset-y-[23rem] left-[12rem] bg-sky-500"></span>
  <span class="animate-ping-fast relative inline-flex rounded-full h-5 w-5 inset-y-[17rem] left-[49rem] bg-sky-300"></span>
  <span class="animate-ping-fast relative inline-flex rounded-full h-3 w-3  inset-y-[10rem] left-[6rem] bg-sky-400"></span>
  <span class="animate-ping-slow relative inline-flex rounded-full h-10 w-10 inset-y-[36rem] left-[64rem] bg-sky-500"></span>
  <span class="animate-ping-slow relative inline-flex rounded-full h-14 w-14 inset-y-[2rem] left-[24rem] bg-sky-500"></span>
  <span class="animate-ping-slow relative inline-flex rounded-full h-6 w-6  inset-y-[38rem] left-[6rem] bg-sky-500"></span>
  <span class="animate-ping-moderato relative inline-flex rounded-full h-3 w-3 inset-y-[8rem] left-[64rem] bg-sky-500"></span>
  <span class="animate-ping-moderato relative inline-flex rounded-full h-3 w-3 inset-y-[14rem] left-[35rem] bg-sky-500"></span>
  <span class="animate-ping-moderato relative inline-flex rounded-full h-3 w-3 inset-y-[1rem] left-[8rem] bg-sky-500"></span>
</div>
<div class="flex items-center justify-center h-screen uppercase">
  <div class="text-6xl font-[500] tracking-[1em]">
    <p>quizzi</p>
  </div>
  <div class="absolute cursor-pointer mt-36 tracking-[.75em]">
    <router-link :to="{name : 'QuizList', params:{status: onBar.status}}" class="animate-pulse hover:text-lg">start</router-link>
  </div>
</div>
</template>
 
<style>
</style>