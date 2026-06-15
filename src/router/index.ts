import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { showInNavBar: true, title: 'DET GROR!', requiresAuth: false, hideOnMobile: false },
      component: () => import('@/components/Home.vue')
    },
    {
      path: '/more',
      name: 'more',
      meta: { showInNavBar: true, title: 'LAD DET GRO', requiresAuth: false, hideOnMobile: false },
      component: () => import('@/components/More.vue')
    },    
    {
      path: '/fgu',
      name: 'fgu',
      meta: { showInNavBar: true, title: 'Haven på FGU', requiresAuth: false, hideOnMobile: false },
      component: () => import('@/components/FGU.vue')
    },
    {
      path: '/spisgroentdage',
      name: 'spisgroentdage',
      meta: { showInNavBar: true, title: 'Spis Grønt Dage', requiresAuth: false, hideOnMobile: false },
      component: () => import('@/components/SpisGroentDage.vue')
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      meta: { showInNavBar: true, title: 'Kontakt', requiresAuth: false, hideOnMobile: false },
      component: () => import('@/components/Kontakt.vue')
    },      
    {
      path: '/links',
      name: 'links',
      meta: { showInNavBar: true, title: 'Links', requiresAuth: false, hideOnMobile: false },
      component: () => import('@/components/Links.vue')
    }       
  ],
});

export default router