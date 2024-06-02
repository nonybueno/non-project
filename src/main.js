import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'
import { createHead } from '@vueuse/head';

import App from './App.vue'
import router from './router'

const app = createApp(App)
const head = createHead();

app.use(MotionPlugin)
app.use(createPinia())
app.use(router)
app.use(head)

app.mount('#app')
