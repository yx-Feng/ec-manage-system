import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 导入全局样式
import './assets/css/global.css'
import axios from 'axios'
// 配置请求的根目录
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
const app = createApp(App)
app.use(router)
app.config.globalProperties.$axios = axios
app.mount('#app')
