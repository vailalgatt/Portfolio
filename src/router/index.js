import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import Project from '@/components/Project'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
      name: 'Navbar',
      component: Navbar
    },
    {
      path: '/',
      name: 'Project',
      component: Project
    }
  ]
})
