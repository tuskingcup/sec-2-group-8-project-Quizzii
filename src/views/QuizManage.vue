<script setup>
import Form from '../components/Form.vue'
import Show from '../components/Show.vue'
import Delete from '../components/Delete.vue'
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
  editingQuiz.value = {}
}

//DELETE
const check = ref(false)
const removeQuiz = async (removeQuizid) => {
  const res = await fetch(
    `http://localhost:5000/${params.title}/${removeQuizid}`,
    {
      method: 'DELETE',
    }
  )
  if (res.status === 200) {
    console.log('delete success')
    quizList.value = quizList.value.filter((quiz) => quiz.id !== removeQuizid)
  } else console.log('error, cannot delete quiz')
  check.value = false
}

const deleteQuiz = ref({})
const popUp = (id, quiz) => {
  check.value = true
  deleteQuiz.value = { id: id, quiz: quiz }
}

//CREATE
const createQuiz = async (question, A, B, C, answer) => {
  if ((question && A && B && C && answer != '') || undefined) {
    const res = await fetch(`http://localhost:5000/${params.title}`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        question: question,
        A: A,
        B: B,
        C: C,
        answer: answer.toUpperCase(),
      }),
    })
    if (res.status === 201) {
      console.log('create success')
      const addedQuiz = await res.json()
      quizList.value.push(addedQuiz)
    } else console.log('error, cannot create quiz')
    editingQuiz.value = {}
  }
  console.log('error')
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
    console.log('update success')
  } else console.log('error, cannot update quiz')
  editingQuiz.value = {}
}
</script>

<template>
  <div class="relative my-3">
    <div class="flex items-center justify-between flex-wrap p-3">
      <div class="text-sm lg:flex-grow space-x-5">
        <button class="btn btn-outline rounded-xl" @click="goBack">Back</button>
        <button
          class="btn btn-outline btn-success rounded-xl"
          @click="showForm"
          :disabled="onForm"
        >
          Create Quiz
        </button>
      </div>
    </div>
    <span v-show="onForm">
      <Form
        :currentQuiz="editingQuiz"
        @editQuiz="modifyMode"
        @createQuiz="createQuiz"
        @closeForm="showForm"
      />
    </span>
  </div>
  <Show :quizList="quizList" @editQuiz="editMode" @deleteQuiz="popUp" />
  <Delete :check="check" :delete="deleteQuiz" @confirm="removeQuiz"></Delete>
</template>

<style></style>
