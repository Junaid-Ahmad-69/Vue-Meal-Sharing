import 'ant-design-vue/dist/reset.css'
import './assets/css/main.css'
import './assets/css/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from "pinia";
import Antd from 'ant-design-vue'
import router from "@/router/index.js";

const app = createApp(App)
app.use(createPinia())
app.use(router);
app.use(Antd)
app.mount('#app')
