import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const historyBase = typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL ? import.meta.env.BASE_URL : '/'

const router = createRouter({
  history: createWebHistory(historyBase),
  routes,
});

export default router