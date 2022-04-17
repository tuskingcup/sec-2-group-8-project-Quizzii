<script setup></script>

<template>
  <div class="flex items-center justify-between flex-wrap bg-base-300 p-3">
    <div class="text-sm lg:flex-grow space-x-5">
      <router-link
        :to="{ name: 'QuizList', params: { status: 'play' } }"
        class="hover:text-amber-400"
        >Home</router-link
      >
      <router-link
        :to="{ name: 'QuizList', params: { status: 'manage' } }"
        class="hover:text-amber-400"
        >Manage</router-link
      >
    </div>
  </div>
</template>

<style>
.router-link-active {
  color: #ffc802;
  padding: 5px 5px 5px 5px;
  background-color: rgba(236, 224, 195, 0.147);
  border-radius: 0.5rem;
}
</style>
