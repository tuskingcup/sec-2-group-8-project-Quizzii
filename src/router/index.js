import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import QuizPage from '../views/QuizPage.vue'
import QuizPlay from '../views/QuizPlay.vue'

const history = createWebHistory()
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/quiz-page',
    name: 'QuizPage',
    component: QuizPage,
  },
  {
    path: '/quiz-page/:id',
    name: 'QuizPlay',
    component: QuizPlay,
  },
]

const router = createRouter({ history, routes })
export default router
