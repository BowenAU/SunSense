
import Alert from '../views/AlertView.vue'
import Home from '../views/HomeView.vue'
import SkinGuard from '../views/SkinGuardView.vue'
import UVForecast from '../views/UVForecastView.vue'
import UVMap from '../views/UVMapView.vue'

import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: '/',
        name: 'index',
        component: Home 
    },
    {
      path: '/views/alert',
      name: 'alert',
      component: Alert 
    },
    {
        path: '/views/skinguard',
        name: 'skinguard',
        component: SkinGuard 
    },
    {
      path: '/views/uvforecast',
      name: 'uvforecast',
      component: UVForecast
    },
    {
      path: '/views/uvmap',
      name: 'uvmap',
      component: UVMap
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
