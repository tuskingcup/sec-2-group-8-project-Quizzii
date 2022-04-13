import {createRouter,createWebHistory} from 'vue-router'
import Home from '../views/HomePage.vue'
import QuizPage from '../views/QuizPage.vue'
import QuizPlay from '../views/Quiz.vue';

const history = createWebHistory();
const routes = [
    {
        path : '/',
        name: 'Home',
        component: Home
    },
    {
        path : '/quiz-page',
        name: 'QuizPage',
        component: QuizPage
    },
    {
        path : '/quiz-play/category/:category',
        name: 'QuizPlay',
        component: QuizPlay
    }
]

const router = createRouter({history,routes})
export default router