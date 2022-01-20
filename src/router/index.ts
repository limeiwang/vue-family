import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Index from '../views/Index.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/dashboard',
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/Index.vue'),
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Index,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Index,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Index,
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
