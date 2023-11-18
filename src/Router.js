import {createRouter, createWebHistory} from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Empleados from './components/Empleados.vue';

const myRoutes = [
    {
        path: "/", component: Home
    },
    {
        path: "/empleados", component: Empleados
    },
    {
        path: "/login", component: Login
    }
]

const router = createRouter({
    history: createWebHistory(), 
    routes: myRoutes
})
export default router;