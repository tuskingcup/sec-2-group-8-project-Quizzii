import {createRouter,createWebHistory} from 'vue-router'
import Home from '../views/HomePage.vue'
import QuizList from '../views/QuizListPage.vue'
import Quiz from '../views/QuizPage.vue'
import NotFound from '../views/NotFound.vue'
import CreateQuiz from '../views/CreateQuiz.vue'

const history = createWebHistory();
const routes = [
    {
        path : '/',
        name: 'Home',
        component: Home
    },
    {
        path : '/quiz-list-page',
        name: 'QuizList',
        component: QuizList
    },
    {
        path : '/quiz-page/:id',
        name: 'Quiz',
        component: Quiz,
    },
    {
        path : '/create-quiz',
        name: 'CreateQuiz',
        component: CreateQuiz,
    },
    {
        path: '/:catchNotMatchPath(.*)',
        name: 'NotFound',
        component: NotFound
    }
]

const router = createRouter({history,routes})
export default router