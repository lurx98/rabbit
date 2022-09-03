import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import '@/assets/styles/common.less'
// 导入路由
import router from '@/router'
const app = createApp(App)
app.use(router)
app.mount('#app')
