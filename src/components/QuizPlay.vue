<script setup>
defineEmits(['goBack','nextQuest','getAnswer'])
defineProps({
    Quiz :{
        type: Array,
        require: true
    },
    getCurrentQuiz :{
        type: Object,
        require: true
    },
    complete:{
        type: Boolean,
    },
    score : {
        type: Number
    },
    currentQuiz : {
        type: Number
    },
})
</script>
 
<template>
<div class="app" >
    <h1>Quiz</h1>

    <section v-if="!complete" class="quiz" >
        <div class="quiz-info">
            <span class="question" >{{ getCurrentQuiz.question }}</span>
            <span class="score" > score : {{ score }}/{{ Quiz.length }}</span>
        </div>
        <div class="options">
            <label v-for="(option, index) in getCurrentQuiz.option" :key="index"
                :class="`option ${  getCurrentQuiz.select != null && index != getCurrentQuiz.select
                            ? 'disabled'
                            : ''               
                    }`">
                <input type="checkbox"
                :name="getCurrentQuiz.index" 
                :value="index"
                :v-model="getCurrentQuiz.select"
                :disable="getCurrentQuiz.select"
                @change="$emit('getAnswer', $event)">
                <span>{{ option }}</span>
            </label>
        </div>
        <button @click="$emit('nextQuest')" :disabled="!getCurrentQuiz.select">
        {{
            getCurrentQuiz.index == Quiz.length -1
            ? 'Finish'
            : getCurrentQuiz.select == null
                ? 'select answer'
                : 'next'
        }}
        </button>
    </section>

    <section v-else>
        <h2> You have finished the quiz! </h2>
        <p>Your score : {{ score }}/{{ Quiz.length }}</p>
        <button @click="$emit('goBack')" class="mt-5">Back</button> 
    </section>
  </div>

</template>
 
<style scoped>
.app {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    min-height: 100vh;
}
body {
    background-color: #271c36;
    color: #fff;
}
h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
}
.quiz {
    padding: 1rem;
    width: 100%;
    max-height: 640px;
}
.quiz-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
}
.quiz-info .question{
    color: #8f8f8f;
    font-size: 1.25rem;
}
.quiz-info .score{
    color: #fff;
    font-size: 1.25rem;
}
.options {
    margin-bottom: 1rem;
}
.option {
    display: block;
    padding: 1rem;
    background-color: #271c36;
    margin-bottom: 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
}
.option:hover {
    background-color: #2d213f;
}
.option:last-of-type{
    margin-bottom: 0;
}
.option.disabled{
    opacity: 0.5;
}
.option input {
    display: none;
}
button {
    appearance: none;
    outline: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem 1rem;
    background-color: #2cce7d;
    color: #2d213f;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.25rem;
    border-radius: 0.5rem;
}
button:disabled{
    opacity: 0.5;
}
h2 {
     font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
}
p {
    color: #8f8f8f;
    font-size:  1.25rem;
    text-align: center;
}
</style>