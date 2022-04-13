<script setup></script>

<template>
  <div class="flex flex-wrap justify-center mt-5">
    <div class="card w-96 mx-6 my-5 bg-base shadow-xl image-full" v-for="a in 6">
      <figure>
        <img
          src="https://api.lorem.space/image/movie?w=400&h=225"
          alt="movie"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Shoes!</h2>
        <p>{{a}}If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Let's Quiz</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
