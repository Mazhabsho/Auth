import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/home/Home.vue"
import Login from "../pages/login/Login.vue"
import Register from "../pages/register/Register.vue"
import Forgot from '../components/forgotPassword/forgotPassword.vue'

const routes = [
    {
        name:'Home',
        path:'/',
        component:Home
    },
    {
      name: 'Login',
      path:"/login",
      component:Login
    },
    {
        name:'Register',
        path:'/register',
        component: Register
    },
    {
        name:'Forgot',
        path:'/forgot',
        component: Forgot
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
});
export default router