<script setup>
import { reactive,ref,computed } from 'vue'

defineEmits(['createQuiz','closeForm','editQuiz'])

const props = defineProps({
    currentQuiz : {
        type: Object,
       default: {}
    }
})

const newQuiz = computed(() => {  
    return {    id: props.currentQuiz.id,
                question : props.currentQuiz.question ,
                A: props.currentQuiz.A,
                B: props.currentQuiz.B,
                C: props.currentQuiz.C,
                D: props.currentQuiz.D,
                answer: props.currentQuiz.answer
    }
})

</script>

<template>
<br>
<div>
  <h1 v-if="newQuiz.id !== undefined">Editor</h1>
  <h1 v-else>Create</h1>
</div>
<div>
    <form>
        <div class="div-containter-input">
        <div class="div-input">
        <label style="color:white;">question : </label>
        <input type="text" placeholder="Ex: 1 + 1 = ?" v-model="newQuiz.question"/>
      </div>
    </div><br>
     <div class="div-containter-input">
        <div class="div-input">
        <label style="color:white;">Choice A : </label>
        <input type="text" placeholder="Ex: 5" v-model="newQuiz.A"/>
      </div>
    </div><br>
     <div class="div-containter-input">
        <div class="div-input">
        <label style="color:white;">Choice B: </label>
        <input type="text" placeholder="Ex: 2" v-model="newQuiz.B"/>
      </div>
    </div><br>
     <div class="div-containter-input">
        <div class="div-input">
        <label style="color:white;">Choice C : </label>
        <input type="text" placeholder="Ex: 6" v-model="newQuiz.C"/>
      </div>
    </div><br>
     <div class="div-containter-input">
        <div class="div-input">
        <label style="color:white;">Answer : </label>
        <input type="text" placeholder="Ex: B" v-model="newQuiz.answer"/> 
      </div>
    </div><br>
    <div>
      <button v-if="newQuiz.id !== undefined" type="reset" @click="$emit('editQuiz',newQuiz)" >Save</button>
      <button v-else type="reset"  @click="$emit('createQuiz',newQuiz.question,newQuiz.A,newQuiz.B,newQuiz.C,newQuiz.answer)" >Create</button> &nbsp;
      <button type="reset" @click="$emit('closeForm') " >Cancel</button>
    </div><br>
    </form>
</div>

</template>
 
<style>

</style>