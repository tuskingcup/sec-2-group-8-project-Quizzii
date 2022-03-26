<script setup>

</script>
 
<template>
<div class="sticky">
    <div class="flex bg-green-800 px-20 py-3  justify-between">
        <div class="flex justify-between text-slate-900 ">
            <router-link :to="{name:'Home'}">
                <img src="../assets/Zonetoon.png" alt="Zonetoon" width="50px" height="50px" class="mr-10">
            </router-link>
            <ul class="flex justify-between items-center font-bold text-xl ">
                <li class="mx-7 hover:text-yellow-300"><router-link :to="{name:'Genre'}">ประเภท</router-link></li>
                <li class="mx-7 hover:text-yellow-300"><router-link :to="{name:'Recommend'}">ยอดนิยม</router-link></li>
                <li class="mx-7 hover:text-yellow-300"><router-link :to="{name:'Lastest'}">ใหม่ล่าสุด</router-link></li>
            </ul>
        </div>
        <div class="flex items-center">
            <router-link :to="{name:'Creator'}">
                <div class="rounded-3xl bg-black text-white border-solid border-2 border-white hover:bg-slate-800 mx-5 px-7 py-1">
                    เผยแพร่
                </div>
            </router-link>
            <label class="flex relative">
            <span class="sr-only">Search</span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#1e293b">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            </span>
        <input class="placeholder:text-slate-400 text-slate-900 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
        placeholder="Search for movies" type="text" name="search"/>
        </label>
    </div>
  </div>
</div>
</template>

<style>

</style>