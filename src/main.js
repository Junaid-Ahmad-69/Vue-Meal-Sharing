import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from "pinia";
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import router from "@/router/index.js";

const app = createApp(App)
app.use(createPinia())
app.use(router);
app.use(Antd)
app.mount('#app')
