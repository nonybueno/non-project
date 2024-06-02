import { createRouter, createWebHistory } from 'vue-router'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Project from '@/views/Project.vue'
import Home from '@/views/Home.vue'
import Resume from '@/views/Resume.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      redirect: '/',
      redirect: '/home'
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import("@/views/Home.vue"),
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
      name: "not-found",
      component: () => import("@/views/Home.vue"),
    },
  ]
})

export default router
