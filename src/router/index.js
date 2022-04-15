import {createRouter,createWebHistory} from 'vue-router'
import Home from '../views/HomePage.vue'
import QuizList from '../views/QuizListPage.vue'
import Quiz from '../views/QuizGame.vue'
import ManageList from '../views/QuizPageManage.vue'
import Manage from '../views/QuizManage.vue'

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
        path : '/quiz-list-page/:title',
        name: 'Quiz',
        component: Quiz,
    },
    {
        path : '/manage-list-page',
        name: 'ManageList',
        component: ManageList
    },
    {
        path : '/manage-list-page/:title',
        name: 'Manage',
        component: Manage
    }
]

const router = createRouter({history,routes})
export default router