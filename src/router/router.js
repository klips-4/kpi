import {createRouter, createWebHashHistory} from "vue-router";
import AuthLayout from "../layouts/AuthLayout.vue";
import unAuthLayout from "../layouts/UnAuthLayout.vue";
import LoginPage from "../pages/LoginPage.vue";
import MainPage from "../pages/MainPage.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/main',
            name: 'main',
            meta: {layout: AuthLayout},
            component: MainPage
        },
        {
            path: '/login',
            name: 'login',
            meta: {layout: unAuthLayout},
            component: LoginPage
        }
    ]
})

export default router;