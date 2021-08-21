import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/Home.vue'


const routes = [
    { name:'Home', path:'/', component:Home },
    { name:'destination.show', path:'/destinations/:id',component:()=>import('@/views/DestinationShow.vue') },
]

const router =  createRouter({
    history: createWebHistory(),
    routes
})

export default router