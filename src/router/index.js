import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home.vue';
import Profile from '../views/profile.vue';
import Login from '../views/login.vue';
import Signup from '../views/signup.vue';
import NotFound from '../views/notFound.vue';

const routes = [
    {
        path: "/",
        alias: '/home',
        component: Home
    },
    {
        path: "/profile",
        component: Profile,
        name: 'profile',
    },
    {
        path: "/login",
        component: Login,
        name: 'login',
    },
    {
        path: "/signup",
        component: Signup,
        name: 'signup',
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    },
    // {
    //     path: "/admin/manga/:id",
    //     component: MangaForm,
    //     name: 'editManga',
    //     props: true
    // }, 
    // {
    //     path: '/404',
    //     component: NotFound,
    //     name: 'notFound',
    //     props: true
    // }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
});