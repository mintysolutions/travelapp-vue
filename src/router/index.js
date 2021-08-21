import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/Home.vue'


const routes = [
    { name:'Home', path:'/', component:Home },

    { name:'Brazil', path:'/brazil', component:() => import('@/views/Brazil.vue')},
    { name:'Hawaii', path:'/hawaii', component:() => import('@/views/Hawaii.vue') },
    { name:'Jamaica', path:'/jamaica', component:() => import('@/views/Jamaica.vue') },
    { name:'Panama', path:'/panama', component:() => import('@/views/Panama.vue') }
]

const router =  createRouter({
    history: createWebHistory(),
    routes
})

export default router