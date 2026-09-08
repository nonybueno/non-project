import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/home', redirect: '/' },
    { path: '/about', name: 'about', component: () => import('@/views/About.vue') },
    { path: '/project', name: 'project', component: () => import('@/views/Project.vue') },
    { path: '/resume', name: 'resume', component: () => import('@/views/Resume.vue') },
    { path: '/contact', name: 'contact', component: () => import('@/views/Contact.vue') },
    { path: '/:pathMatch(.*)*', name: 'not-found', redirect: '/' },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return { el: to.hash, top: 132, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

export default router
