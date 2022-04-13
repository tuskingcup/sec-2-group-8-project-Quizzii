import {createRouter,createWebHistory} from 'vue-router'
import Home from '../views/HomePage.vue'
import Quiz from '../views/QuizPage.vue'

const history = createWebHistory();
const routes = [
    {
        path : '/',
        name: 'Home',
        component: Home
    },
    {
        path : '/quiz-page',
        name: 'Quiz',
        component: Quiz
    }
]

const router = createRouter({history,routes})
export default router