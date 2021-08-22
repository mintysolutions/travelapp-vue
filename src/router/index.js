import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/Home.vue'


const routes = [
    { name:'Home', path:'/', component:Home },
    
    { 
        name:'destinationshow',
        props:route => {id: parseInt(route.params.id)},
        path:'/destinations/:slug',
        component:()=>import('@/views/DestinationShow.vue') 
    }
    
]

const router =  createRouter({
    history: createWebHistory(),
    routes
})

export default router