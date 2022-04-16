<script setup>
import { useRoute,useRouter } from 'vue-router'
import { ref, onBeforeMount,computed,reactive } from 'vue'
import Quizplay from '../components/QuizPlay.vue'
const {params} = useRoute()
const myrouter = useRouter();
const goBack = () => myrouter.push({ name: "QuizList" , params: { status : 'play' } });
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
let randomQuestion = ref([]);
const randomNum = () => {
//----------randomQuiz--------
if(randomQuestion.value.length < 3){
  do {
    let num = Math.floor(Math.random() * quizList.value.length);
    if (!randomQuestion.value.includes(num)) {
      randomQuestion.value.push(num);
    }
  } while (randomQuestion.value.length <= 2);}
  return randomQuestion.value;
};
//----------Create question---------
const createQuiz = () =>{
    question.value = []
    for(let x in randomQuestion.value){ 
        question.value.push({
            question:quizList.value[randomQuestion.value[x]].question,
            answer:answerCheck(quizList.value[randomQuestion.value[x]].answer),
            option:[
                quizList.value[randomQuestion.value[x]].A,
                quizList.value[randomQuestion.value[x]].B,
                quizList.value[randomQuestion.value[x]].C
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
const getAnswer = event => {
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
  
  <div v-show="start" >
    <Quizplay   :Quiz="question" 
            :getCurrentQuiz="getCurrentQuiz" 
            :complete="quizComplete" 
            :score="score" 
            :currentQuiz="currentQuiz"
            @goBack="goBack" 
            @nextQuest="nextQuest" 
            @getAnswer="getAnswer" />
  </div>

</template>
 
<style scoped>
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
</style>