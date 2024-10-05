import './assets/styles.css'
import './assets/estilos/estilos_basicos.css'
import router from './router.ts'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(router).mount('#app')
