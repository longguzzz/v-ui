import { createApp } from 'vue'
import './reset.scss'
import './lib/vui.scss'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
