import { createApp } from 'vue';
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.css";
import {createPinia} from "pinia";
import router from "./router/router.js";
import '../src/assets/styles/style.scss'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia);
app.use(router);
app.mount('#app');
