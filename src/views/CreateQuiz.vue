<script setup>
import { ref } from 'vue'
import AddQuestion from '../components/AddQuestion.vue';

const numQuestion = ref('1')
const title = ref('')
const diff = ref('easy')
const desc = ref('')
console.log(diff.value)

</script>
 
<template>
<div>
    <div class="text-6xl">
        Create Your Own Quiz!!!
    </div>
    <div>
        <div>
            <p>Title</p><input type="text" v-model="title" />
            <p for="diff-select">Difficult</p>
            <select id="diff-select" size="3" v-model="diff">
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
            <p>Description</p><input type="text" v-model="desc" />
            <p>Number of question</p><input type="number" v-model="numQuestion" />
        </div>
        <div>
            <div class="my-3" v-for="(data, index) in numQuestion" :key="index">
            <hr>
            Question {{ index+1 }}
            <AddQuestion></AddQuestion>
            <button>save</button>
            </div>
        </div>
    </div>

</div>
</template>
 
<style>

</style>