import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(
    ),
    routes: [
        {
            path: '/',
            component: () => import('../components/SignUpForm.vue'),
        },
        {
            path: '/counter',
            name: 'counter',
            component: () => import('../components/CounterComponent.vue'),
        },
        {
            path: '/jobs:id',
            name: 'jobs',
            component: () => import('../components/JobsComp.vue'),
        },
    ],
})

export default router
