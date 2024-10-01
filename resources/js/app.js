import './bootstrap';

import {createApp} from "vue";

import app from '../js/components/app.vue';
import router from "../js/router/index.js";

createApp(app).use(router).mount('#app')
