<script setup>
import Form from '../components/form.vue'
import Show from '../components/show.vue'
import { useRoute, useRouter } from 'vue-router'
import { onBeforeMount, ref } from 'vue'

const { params } = useRoute()
const myrouter = useRouter()
const goBack = () => myrouter.push({ name: 'ManageList' })

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
const removeQuiz = async (removeNoteid) => {
  const res = await fetch(
    `http://localhost:5000/${params.title}/${removeNoteid}`,
    {
      method: 'DELETE'
    }
  )
  if (res.status === 200) {
    console.log('delete success')
    quizList.value = quizList.value.filter((note) => note.id !== removeNoteid)
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
    const addedNote = await res.json()
    quizList.value.push(addedNote)
  } else console.log('error, cannot create note')
  editingNote.value = {}
}

//EDIT
const editingNote = ref({})
const editMode = async (editNote) => {
  editingNote.value = editNote
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
    const modifyNote = await res.json()
    quizList.value = quizList.value.map((note) =>
      note.id === modifyNote.id
        ? {
            ...note,
            question: modifyNote.question,
            a: modifyNote.a,
            b: modifyNote.b,
            c: modifyNote.c,
            answer: modifyNote.answer
          }
        : note
    )
    console.log('update success')
  } else console.log('error, cannot update note')
  editingNote.value = {}
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
