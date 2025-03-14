import HomeView from '@/views/HomeView.vue'
import ArticleView from '@/views/ArticleView.vue'
import Alert from '../views/AlertView.vue'
import SkinGuard from '../views/SkinGuardView.vue'
import UVMap from '../views/UVMapView.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: HomeView,
  },
  {
    path: '/views/article',
    name: 'article',
    component: ArticleView,
  },
  {
    path: '/views/alert',
    name: 'alert',
    component: Alert,
  },
  {
    path: '/views/skinguard',
    name: 'skinguard',
    component: SkinGuard,
  },
  {
    path: '/views/uvmap',
    name: 'uvmap',
    component: UVMap,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
