import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Popular from '../views/Popular.vue'



const history = createWebHistory();
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/popular',
        name: 'Popular',
        component: Popular
    }
]

const router = createRouter({history,routes})
export default router