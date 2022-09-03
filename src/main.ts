import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import '@/assets/styles/common.less'

// 导入路由
import router from '@/router'
// 导入pinia
import { createPinia } from 'pinia'
// 全局组件
import XtxUI from './components'
const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(XtxUI)
app.mount('#app')
