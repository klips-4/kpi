import {createRouter, createWebHashHistory} from "vue-router";
import AuthLayout from "../layouts/AuthLayout.vue";
import unAuthLayout from "../layouts/UnAuthLayout.vue";
import LoginPage from "../pages/LoginPage.vue";
import MainPage from "../pages/MainPage.vue";
import {useAuthStore} from "@/stores/authStore.js";

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
            path: '/details/:employeeId',
            name: 'details',
            meta: {layout: AuthLayout},
            component: () => import('../pages/EmployeePage.vue')
        },
        {
            path: '/login',
            name: 'login',
            meta: {layout: unAuthLayout},
            component: LoginPage
        }
    ]
})

router.beforeEach( async(to) => {
    const publicPage=['/login'];
    const authRequired = !publicPage.includes(to.path);
    const auth= useAuthStore();

    if (authRequired && !auth.user){
        auth.returnUrl = to.fullPath;
        return '/login'
    }
})

export default router;