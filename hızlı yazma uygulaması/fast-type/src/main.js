import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/style.css"
import appAxios from "@/utils/appAxios"

const app = createApp(App)
app.config.globalProperties.$appAxios = appAxios
app.mount('#app')
