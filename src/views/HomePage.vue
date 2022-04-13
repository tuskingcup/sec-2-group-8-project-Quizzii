<script setup>
fetch('https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple')
.then((res) => res.json())
.then((data) => console.log(data))

// fetch('http://localhost:5000')
// .then((res) => console.log(res))
</script>
 
<template>
<div class="md:absolute">
  <span class="animate-ping-fast relative inline-flex rounded-full h-12 w-12 md:inset-y-[23rem] md:left-[12rem] bg-sky-500"></span>
  <span class="animate-ping-fast relative inline-flex rounded-full h-5 w-5 md:inset-y-[17rem] md:left-[49rem] bg-sky-300"></span>
  <span class="animate-ping-fast relative inline-flex rounded-full h-3 w-3  md:inset-y-[10rem] md:left-[6rem] bg-sky-400"></span>
  <span class="animate-ping-slow relative inline-flex rounded-full h-10 w-10 md:inset-y-[36rem] md:left-[64rem] bg-sky-500"></span>
  <span class="animate-ping-slow relative inline-flex rounded-full h-14 w-14 md:inset-y-[2rem] md:left-[24rem] bg-sky-500"></span>
  <span class="animate-ping-slow relative inline-flex rounded-full h-6 w-6  md:inset-y-[38rem] md:left-[6rem] bg-sky-500"></span>
  <span class="animate-ping-moderato relative inline-flex rounded-full h-3 w-3 md:inset-y-[8rem] md:left-[64rem] bg-sky-500"></span>
  <span class="animate-ping-moderato relative inline-flex rounded-full h-3 w-3 md:inset-y-[14rem] md:left-[35rem] bg-sky-500"></span>
  <span class="animate-ping-moderato relative inline-flex rounded-full h-3 w-3 md:inset-y-[1rem] md:left-[8rem] bg-sky-500"></span>
</div>
<div class="flex items-center justify-center h-screen uppercase">
  <div class="text-6xl font-[500] tracking-[1em]">
    <p>quiz</p>
  </div>
  <div class="absolute cursor-pointer mt-36 tracking-[.75em]">
    <router-link :to="{name : 'Quiz'}" class="animate-pulse hover:text-lg">start</router-link>
  </div>
</div>
</template>
 
<style>

</style>