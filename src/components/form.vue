<script setup>
import { reactive, ref, computed } from 'vue'

defineEmits(['createQuiz', 'closeForm', 'editQuiz'])

const props = defineProps({
  currentQuiz: {
    type: Object,
    default: {}
  }
})

const newQuiz = computed(() => {
  return {
    id: props.currentQuiz.id,
    question: props.currentQuiz.question,
    A: props.currentQuiz.A,
    B: props.currentQuiz.B,
    C: props.currentQuiz.C,
    D: props.currentQuiz.D,
    answer: props.currentQuiz.answer
  }
})
</script>

<template>
  <div class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 md:h-full">
    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
      <!-- content -->
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div class="relative mx-auto my-auto translate-x-2/4 rounded-lg shadow dark:bg-gray-700">
        <!-- header -->
        <div class="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
          <div class="text-xl font-semibold tracking-[.15em] uppercase lg:text-2xl dark:text-white">
            <h1 v-if="newQuiz.id !== undefined">Editor</h1>
            <h1 v-else>Create</h1>
          </div>
          <button type="reset" @click="$emit('closeForm')"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="defaultModal">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        <!-- body -->
        <div class="p-6 space-y-6">
          <form>
            <div class="p-2 border-[0.75px] border-white rounded-xl">
              <h1 class="text-center my-3">Question</h1>
              <textarea class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring" rows="3"
                placeholder="Ex: 1 + 1 = ?" v-model="newQuiz.question"></textarea>
            </div>

            <div class="p-2 border-[0.75px] border-white rounded-xl my-5">
              <div class="mx-3">
                <div class="my-3">
                  <p>Choice A</p>
                  <input type="text" v-model="newQuiz.A" placeholder="Ex: 5"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div class="my-3">
                  <p>Choice B</p>
                  <input type="text" v-model="newQuiz.B" placeholder="Ex: 2"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div class="my-3">
                  <p>Choice C</p>
                  <input type="text" v-model="newQuiz.C" placeholder="Ex: 3"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
              </div>
            </div>
            <div class="p-2 border-[0.75px] border-white rounded-xl my-5">
              <div class="mx-3">
                <div class="my-3">
                  <p>Answer</p>
                  <!-- <input type="text" v-model="newQuiz.answer" placeholder="Ex: A"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /> -->
                
                <select v-model="newQuiz.answer">
                  <option value="">Please select one</option>
                  <option value="A">A</option>
                   <option value="B">B</option>
                    <option value="C">C</option>
                </select>
                </div>
              </div>
            </div>
          </form>
        </div>
        <!-- Modal footer -->
        <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
          <button v-if="newQuiz.id !== undefined" type="reset" @click="$emit('editQuiz', newQuiz)">
            Save
          </button>
          <button v-else type="reset" @click="
            $emit(
              'createQuiz',
              newQuiz.question,
              newQuiz.A,
              newQuiz.B,
              newQuiz.C,
              newQuiz.answer
            )
          ">
            Create
          </button>
          &nbsp;
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>
