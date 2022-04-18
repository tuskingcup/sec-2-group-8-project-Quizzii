import {createRouter,createWebHistory} from 'vue-router'
import Home from '../views/HomePage.vue'
import QuizList from '../views/QuizListPage.vue'
import QuizGame from '../views/QuizGame.vue'
import QuizManage from '../views/QuizManage.vue'
import NotFound from '../views/NotFound.vue'


const history = createWebHistory();
const routes = [
    {
        path: '/:catchNotMatchPath(.*)',
        name: 'NotFound',
        component: NotFound
    },
    {
        path : '/',
        name: 'Home',
        component: Home
    },
    {
        path : '/quiz-list-page/:status',
        name: 'QuizList',
        component: QuizList
    },
    {
        path : '/quiz-list-page/:status/:title',
        name: 'Quiz',
        component: QuizGame,
    },
    {
        path : '/manage-list-page/:status/:title',
        name: 'Manage',
        component: QuizManage
    }
]

const router = createRouter({history,routes})
export default router