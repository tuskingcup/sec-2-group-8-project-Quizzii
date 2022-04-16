Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@Runlertjit 
tuskingcup
/
sec-2-group-8-project-zonetoon
Private
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
sec-2-group-8-project-zonetoon/src/views/QuizGame.vue

Wasin 1.2.5.3
Latest commit f4df5e6 11 hours ago
 History
 0 contributors
151 lines (125 sloc)  3.3 KB
   
<script setup>
import { useRoute,useRouter } from 'vue-router'
import { ref, onBeforeMount,computed,reactive } from 'vue'
import play from '../components/QuizPlay.vue'
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
  
  <div v-show="start" >
    <play   :Quiz="question" 
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