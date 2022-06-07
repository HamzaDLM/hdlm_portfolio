import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import { router } from './router/index'
import i18n from './i18n'
import VuePageTransition from "vue-page-transition"

createApp(App).use(router).use(i18n).use(VuePageTransition).mount('#app')

import 'bootstrap/dist/js/bootstrap.js'