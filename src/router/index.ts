import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/layout/index.vue'
import Login from '@/views/login/index.vue'
import Home from '@/views/home/index.vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: '/category/:id',
          component: () => import('@/views/category/index.vue')
        },
        {
          path: '/category/sub/:id',
          component: () => import('@/views/category/Sub.vue')
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
export default router
