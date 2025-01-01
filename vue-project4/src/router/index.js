import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },

    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/http',
      name: 'http',
      component: () => import('../views/OverHttp.vue'),
    },
    {
      path: '/json',
      name: 'json',
      component: () => import('../views/OverJson.vue'),
    },
    {
      path: '/axios',
      name: 'axios',
      component: () => import('../views/OverAxios.vue'),
    },
  ],
})

export default router
