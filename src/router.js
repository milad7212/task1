import {createRouter, createWebHashHistory} from 'vue-router'
import HomeComponent from './components/HomeComponent.vue'
import AboutMe from './components/AboutMe.vue'
import TableComponent from './components/TableComponent.vue'

const routes=[
    {path:'/',component:HomeComponent},

    {path:'/about-me',component:AboutMe},
    {path:'/table',component:TableComponent},
   
]


const router=createRouter({
    history:createWebHashHistory(),
    routes
})


export default router