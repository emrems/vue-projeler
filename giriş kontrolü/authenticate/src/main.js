import { createApp } from 'vue'
import App from './App.vue'
import router from  "@/router/index"
import store from '@/store/index'
import appAxios from './utils'

const app = createApp(App)
app.use(store)
app.use(router)
app.config.globalProperties.$appAxios = appAxios
app.mount('#app')
