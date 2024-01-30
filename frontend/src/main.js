import '../src/style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
//scroll animation
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueCookies from 'vue-cookies'

const app = createApp(App)

import setupInterceptors from './services/setupInterceptors';

app.config.globalProperties.$axios = axios
app.use(createPinia())
app.use(router)
app.mount('#app')

// cookie
app.use(VueCookies, { expires: '7d'})

// axios interceptor
setupInterceptors();

// // carousel
import VueCarousel from 'vue-carousel'
app.use(VueCarousel)