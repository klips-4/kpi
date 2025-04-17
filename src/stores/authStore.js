import {defineStore} from "pinia";
import {fetchWrapper} from "../helpers/fetch-wrapper.js";
import router from "../router/router.js";

const baseURL = `http://localhost:5092`;

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')),
        returnUrl: null,
        errorMessage: null,
        emailStatus: null
    }),
    actions: {
        async login(username, password) {
            try {
                const user = await fetchWrapper.post(`${baseURL}/api/auth/login`, {
                    Username: username,
                    Password: password
                });
                this.user = user
                localStorage.setItem('user', JSON.stringify(user))
                router.push(this.returnUrl || '/main');
            } catch (error) {
                 this.errorMessage = error

                setTimeout(() => {
                    this.errorMessage = null;
                }, 5000)
            }

        },

        async logout() {
            this.user = null;
            localStorage.removeItem('user')
            router.push('/login');
        }
    }
})



