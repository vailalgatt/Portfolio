import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Project from '@/components/Project'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'About',
      component: About
    },
    {
      path: '/',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/',
      name: 'Project',
      component: Project
    }
  ]
})
