import {createRouter, createWebHistory} from "vue-router";

import home from '../components/componentsFile/homePage.vue';
import about from '../components/componentsFile/aboutPage.vue';
import notFound from '../components/componentsFile/notFound.vue';
import loginComponent from '../components/componentsFile/login.vue';
import registerComponent from '../components/componentsFile/register.vue';
import dashboardComponent from '../components/componentsFile/dashboard.vue';

const routes =
    [
        {
            path: '/',
            component:home
        },
        {
            path: '/login',
            component:loginComponent
        },
        {
            path: '/about',
            component: about
        },
        {
            path: '/dashboard',
            component: dashboardComponent
        },
        {
            path: '/:pathMatch(.*)*',
            component: notFound,
        }
    ];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
