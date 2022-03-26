import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Genre from '../views/Genre.vue'
import Recommend from '../views/Recommend.vue'
import Lastest from '../views/Lastest.vue'
import Creator from '../views/Creator.vue'

const history = createWebHistory();
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/genre',
        name: 'Genre',
        component: Genre
    },
    {
        path: '/recommend',
        name: 'Recommend',
        component: Recommend
    },
    {
        path: '/lastest',
        name: 'Lastest',
        component: Lastest
    },
    {
        path: '/creator',
        name: 'Creator',
        component: Creator
    },
]

const router = createRouter({history,routes})
export default router