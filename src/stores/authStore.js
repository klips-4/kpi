import {defineStore} from "pinia";
import {fetchWrapper} from "../helpers/fetch-wrapper.js";
import router from "../router/router.js";
import {jwtDecode} from "jwt-decode";

const baseURL = `http://localhost:5092`;

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')),
        returnUrl: null,
        errorMessage: null,
        emailStatus: null,
        decodedUser: null
    }),

    getters: {
        currentUser: (state) => state.decodedUser || {}
    },
    actions: {
        async login(username, password) {
            try {
                const user = await fetchWrapper.post(`${baseURL}/api/auth/login`, {
                    Username: username,
                    Password: password
                });
                this.user = user;
                this.decodeJwtToken();
                localStorage.setItem('user', JSON.stringify(user));
                router.push(this.returnUrl || '/main');
            } catch (error) {
                this.errorMessage = error;

                setTimeout(() => {
                    this.errorMessage = null;
                }, 5000)
            }

        },

        async logout() {
            this.user = null;
            this.decodedUser = null;
            localStorage.removeItem('user')
            router.push('/login');
        },

        decodeJwtToken() {
            if (!this.user?.token) {
                return null;
            }
            let token = this.user.token;
            try {
                this.decodedUser = jwtDecode(token);
                return this.decodedUser

            } catch (err) {
                console.log('Error decoding token: ', err);
                return null;
            }
        }
    }
})



