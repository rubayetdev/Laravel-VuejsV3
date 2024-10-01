import {createRouter, createWebHistory} from "vue-router";

import home from '../components/componentsFile/homePage.vue';
import about from '../components/componentsFile/aboutPage.vue';
import notFound from '../components/componentsFile/notFound.vue';

const routes =
    [
        {
            path: '/',
            component:home
        },
        {
            path: '/about',
            component: about
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
