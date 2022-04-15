<script setup>
import { useRoute,useRouter } from 'vue-router'
import { ref, onBeforeMount,computed,reactive } from 'vue'

const {params} = useRoute()
const myrouter = useRouter();
const goBack = () => myrouter.push({ name: "QuizList" });

const quizList = ref([])
console.log(params.title)

const getQuiz = async(param) => {
    const res = await fetch(`http://localhost:5000/${param}`)
    quizList.value = await res.json()
}

onBeforeMount(async() => {
    await getQuiz(params.title)
})

//---------create--Quiz-------

const question = ref([{}]);
const start = ref(false)

const startQuiz = () => {
  randomNum()
  createQuiz()
  start.value = true
  console.log(question)
};

let array = ref([]);

const randomNum = () => {
//----------randomQuiz--------
if(array.value.length < 3){
  do {
    let num = Math.floor(Math.random() * quizList.value.length);
    if (!array.value.includes(num)) {
      array.value.push(num);
    }
  } while (array.value.length <= 2);}
  return array.value;
};
//----------Create question---------
const createQuiz = () =>{
    question.value = []
    for(let x in array.value){ 
        question.value.push({
            question:quizList.value[array.value[x]].question,
            answer:answerCheck(quizList.value[array.value[x]].answer),
            option:[
                quizList.value[array.value[x]].A,
                quizList.value[array.value[x]].B,
                quizList.value[array.value[x]].C
            ],
            select: null
        })
    }
}
//------------Convert ans to index-------------
const answerCheck = (ans) => {
    ans.toUpperCase();
    let num = 0;
    if(ans === "A")
    {
        num = 0;
    }else if(ans === "B")
    {
        num = 1;
    } else if(ans === "C")
    {
        num = 2;
    }
    return num;
}

//--------------Quiz Controll---------------


const quizComplete = ref(false)
const currentQuiz = ref(0)

let score = ref(0)
const scoreCal = computed(() => {
    let value = 0
    if(num.value === 1){
    question.value.map(q =>{
        if(q.select == q.answer){
                value ++
        }
    })
    }
    return value
})


const getCurrentQuiz = computed(() => {
    let quest = question.value[currentQuiz.value]
    console.log(quest)
    quest.index = currentQuiz.value
    return quest
})

const getAnswer = event =>{
    question.value[currentQuiz.value].select = event.target.value
    event.target.value = null
}

let num = ref(0)
const nextQuest = () => {
    num.value += 1    
    if(currentQuiz.value < question.value.length -1){  
        currentQuiz.value++
    }else{
        quizComplete.value = true
    }
    score.value = scoreCal.value
    const wait = () => { num.value -= 1 }
    const time = setTimeout(wait,100)    
}



</script>

<template>

 <div v-show="start ? false : true " style="margin-right: 20%; margin-left: 45%; margin-top: 20%">
    <button @click="goBack">Back</button> &nbsp;
    <button @click="startQuiz">Start</button>
  </div>
  <div v-show="start" class="app" >
    <h1>Quiz</h1>

    <section v-if="!quizComplete" class="quiz" >
        <div class="quiz-info">
            <span class="question" >{{ getCurrentQuiz.question }}</span>
            <span class="score" > score : {{ score }}/{{ question.length }}</span>
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
                @change="getAnswer">
                <span>{{ option }}</span>
            </label>
        </div>
        <button @click="nextQuest" :disabled="!getCurrentQuiz.select">
        {{
            getCurrentQuiz.index == question.length -1
            ? 'Finish'
            : getCurrentQuiz.select == null
                ? 'select answer'
                : 'next'
        }}
        </button>
    </section>

    <section v-else>
        <h2> You have finished the quiz! </h2>
        <p>Your score : {{ score }}/{{ question.length }}</p>
        <button @click="goBack">Back</button> 
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