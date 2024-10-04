import './assets/styles.css'
import router from './router.ts'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(router).mount('#app')
