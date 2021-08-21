import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Brazil from '@/views/Brazil.vue'


const routes = [
    { name:'Home', path:'/', component:Home },
    { name:'About', path:'/about', component:About },
    { name:'Brazil', path:'/brazil', component:Brazil }
]

const router =  createRouter({
    history: createWebHistory(),
    routes
})

export default router