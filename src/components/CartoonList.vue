<script setup>
const props = defineProps({
  cartoonList: {
    type: Array,
    require: true,
  },
  currentHover: {
    type: String,
    require: true,
  },
  checkHover: {
    type: Boolean,
    require: true,
  },
})
</script>

<template>
  <div class="flex flex-wrap justify-center mt-5">
    <div
      id="listcartoons"
      :class="'card-box w-72 h-96 rounded overflow-hidden shadow-lg m-5 transform transition duration-500 hover:scale-110'"
      :style="[currentHover === key ? {'background-image' : '', 'background-size': 'cover'} : {'background-image': 'url(' + cartoon.img + ')', 'background-size': 'cover'}]"
      v-for="(cartoon, key) in cartoonList"
      @mouseover="currentHover = key, checkHover = true"
      @mouseleave="currentHover = null, checkHover = false"
    >
    <div class="m-2" v-show="currentHover === key ">
        <p class="text-lg font-semibold mt-3 px-2 flex-1 ">{{cartoon.name}}</p>
        <p class="px-2 text-sm">{{cartoon.writer}}</p>
        <p class="my-3 px-2">{{cartoon.synopsis}}</p>
    </div>
      
    </div>
  </div>
</template>

<style scoped></style>
