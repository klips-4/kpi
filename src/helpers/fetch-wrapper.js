import {useAuthStore} from "../stores/authStore.js";

export const fetchWrapper = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE')
};

function request(method) {
    return (url, body) => {
        const requestOptions = {
            method,
            headers: authHeader(url)
        };
        if (body) {
            requestOptions.headers['Content-Type'] = 'application/json';
            requestOptions.body = JSON.stringify(body);
        }
        return fetch(url, requestOptions).then(handleResponse);
    }
}

function authHeader(url) {
    const {user} = useAuthStore();
    const isLoggedIn = !!user?.token;
    // const isApiUrl = url.startsWith(import.meta.env.VITE_API_URL); //дополнительно проверять
    if (isLoggedIn){
        return {Authorization: `Bearer ${user.token}`};
    } else {
        return {}
    }
}

function handleResponse(response) {
    return response.text().then(text => {
        if (response.ok) {
            return text ? JSON.parse(text) : {};
        } else {
            const error = text || response.statusText;
            const { user, logout } = useAuthStore();
            if ([401, 403].includes(response.status) && user) {
                logout();
            }
            return Promise.reject(error);
        }
    });
}