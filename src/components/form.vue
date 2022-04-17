<script setup>
import { reactive, ref, computed } from 'vue'
defineEmits(['createQuiz', 'closeForm', 'editQuiz'])
const props = defineProps({
  currentQuiz: {
    type: Object,
    default: {},
  },
})
const newQuiz = computed(() => {
  return {
    id: props.currentQuiz.id,
    question: props.currentQuiz.question,
    A: props.currentQuiz.A,
    B: props.currentQuiz.B,
    C: props.currentQuiz.C,
    D: props.currentQuiz.D,
    answer:
      props.currentQuiz.answer == undefined ? '' : props.currentQuiz.answer,
  }
})
</script>

<template>
  <div
    class="animate-fade-in-down overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 md:h-full"
  >
    <div class="relative p-4 w-full max-w-2xl h-full mx-auto">
      <!-- content -->
      <div class="fixed inset-0 bg-gray-400 bg-opacity-50"></div>
      <div class="relative rounded-lg shadow dark:bg-gray-700">
        <!-- header -->
        <div
          class="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600"
        >
          <div
            class="text-xl font-semibold tracking-[.15em] uppercase lg:text-2xl dark:text-white"
          >
            <h1 v-if="newQuiz.id !== undefined">Editor</h1>
            <h1 v-else>Create</h1>
          </div>
          <button
            type="reset"
            @click="$emit('closeForm')"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="defaultModal"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <!-- body -->
        <div class="p-6 space-y-6">
          <form>
            <div class="p-2 border-[0.75px] border-white rounded-xl">
              <h1 class="text-center my-3">Question</h1>
              <textarea
                class="textarea w-full px-3 py-2 bg-gray-300 text-black"
                rows="3"
                placeholder="Ex: 1 + 1 = ?"
                v-model="newQuiz.question"
              ></textarea>
            </div>

            <div class="p-2 border-[0.75px] border-white rounded-xl my-5">
              <div class="mx-3">
                <div class="my-3">
                  <p>Choice A</p>
                  <input
                    type="text"
                    v-model="newQuiz.A"
                    placeholder="Ex: 5"
                    class="input input-bordered w-full bg-gray-300 text-black"
                  />
                </div>
                <div class="my-3">
                  <p>Choice B</p>
                  <input
                    type="text"
                    v-model="newQuiz.B"
                    placeholder="Ex: 2"
                    class="input input-bordered w-full bg-gray-300 text-black"
                  />
                </div>
                <div class="my-3">
                  <p>Choice C</p>
                  <input
                    type="text"
                    v-model="newQuiz.C"
                    placeholder="Ex: 3"
                    class="input input-bordered w-full bg-gray-300 text-black"
                  />
                </div>
              </div>
            </div>
            <div class="p-2 border-[0.75px] border-white rounded-xl my-5">
              <div class="mx-3">
                <div class="my-3">
                  <select
                    v-model="newQuiz.answer"
                    class="select bg-gray-300 w-full text-black"
                  >
                    <option value disabled>Select Answer</option>
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
        <div
          class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"
        >
          <button
            class="btn btn-outline"
            v-if="newQuiz.id !== undefined"
            type="reset"
            @click="$emit('editQuiz', newQuiz)"
          >
            Save
          </button>
          <button
            class="btn btn-outline"
            v-else
            type="reset"
            @click="
              $emit(
                'createQuiz',
                newQuiz.question,
                newQuiz.A,
                newQuiz.B,
                newQuiz.C,
                newQuiz.answer
              )
            "
          >
            Create
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
select {
  overflow-y: hidden; /* Hide vertical scrollbar */
  overflow-x: hidden; /* Hide horizontal scrollbar */
}
</style>
