<script setup>
import Form from '../components/form.vue'
import Show from '../components/show.vue'
import { useRoute, useRouter } from 'vue-router'
import { onBeforeMount, ref } from 'vue'

const { params } = useRoute()
const myrouter = useRouter()
const goBack = () => myrouter.go(-1)

const quizList = ref([])
console.log(params.title)

const getQuiz = async () => {
  const res = await fetch(`http://localhost:5000/${params.title}`)
  quizList.value = await res.json()
}

onBeforeMount(async () => {
  await getQuiz()
})

//-----On-Off---From----

const onForm = ref(false)
const showForm = () => {
  if (onForm.value === false) {
    onForm.value = true
  } else {
    onForm.value = false
  }
  editingNote.value = {}
}

//DELETE
const removeQuiz = async (removeQuizid) => {
  const res = await fetch(
    `http://localhost:5000/${params.title}/${removeQuizid}`,
    {
      method: 'DELETE'
    }
  )
  if (res.status === 200) {
    console.log('delete success')
    quizList.value = quizList.value.filter((note) => note.id !== removeQuizid)
  } else console.log('error, cannot delete note')
}

const popUp = (id, quiz) => {
  if (
    confirm(`Do you want to delete this quiz? \n Id : ${id} \n Quiz : ${quiz}`)
  ) {
    removeQuiz(id)
  } else {
    console.log('cancel delete')
  }
}

//CREATE
const createQuiz = async (question, A, B, C, answer) => {
  const res = await fetch(`http://localhost:5000/${params.title}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      question: question,
      A: A,
      B: B,
      C: C,
      answer: answer.toUpperCase()
    })
  })
  if (res.status === 201) {
    console.log('create success')
    const addedQuiz = await res.json()
    quizList.value.push(addedQuiz)
  } else console.log('error, cannot create quiz')
  editingQuiz.value = {}
}

//EDIT
const editingQuiz = ref({})
const editMode = async (editQuiz) => {
  editingQuiz.value = editQuiz
  if (onForm.value === false) {
    onForm.value = true
  }
}
const modifyMode = async (edit) => {
  const res = await fetch(`http://localhost:5000/${params.title}/${edit.id}`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      question: edit.question,
      A: edit.A,
      B: edit.B,
      C: edit.C,
      answer: edit.answer.toUpperCase()
    })
  })
  if (res.status === 200) {
    const modifyQuiz = await res.json()
    quizList.value = quizList.value.map((quiz) =>
      quiz.id === modifyQuiz.id
        ? {
            ...quiz,
            question: modifyQuiz.question,
            a: modifyQuiz.a,
            b: modifyQuiz.b,
            c: modifyQuiz.c,
            answer: modifyQuiz.answer
          }
        : quiz
    )
  }
  editingQuiz.value = {}
}
</script>

<template>
  <div class="relative my-3">
    <div class="flex items-center justify-between flex-wrap p-3">
      <div class="text-sm lg:flex-grow space-x-5">
      <button class="py-3 px-6 border rounded-xl" @click="goBack">Back</button>
      <button class="py-3 px-6 border rounded-xl" @click="showForm" :disabled="onForm">Create Quiz</button>
      </div>
    </div>
      <span v-show="onForm">
        <Form
          :currentQuiz="editingNote"
          @editQuiz="modifyMode"
          @createQuiz="createQuiz"
          @closeForm="showForm"
        />
      </span>
  </div>
  <Show :quizList="quizList" @editNote="editMode" @deleteNote="popUp" />
</template>

<style>
</style>
