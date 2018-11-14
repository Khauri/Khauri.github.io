import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import * as Screens from '@/screens'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Screens.Home
  },
  {
    path: '/about-me',
    name: 'About',
    component: Screens.About
  },
  {
    path: '/projects',
    name : "Projects",
    component : Screens.Projects
  },
  {
    path: '/contact',
    name : "Contact",
    component : Screens.Contact
  },
  {
    path: '/blog',
    name : "Blog",
    component : Screens.Blog
  },
  {
    path: '/blog/:slug',
    name : "Article",
    component : Screens.Article
  },
  {
    path: '/login',
    name: 'Login',
    component : Screens.Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component : Screens.Dashboard,
    meta : {
      requiresAuth : true
    }
  },
  {
    path: '/dashboard/new',
    name: 'NewPost',
    component : Screens.Editor,
    meta : {
      requiresAuth : true
    }
  },
  {
    path: '/dashboard/edit',
    name: 'Editor',
    component : Screens.Editor,
    meta : {
      requiresAuth : true
    }
  },
  {
    path: '*',
    name: '404',
    component : Screens.ErrorPage
  },
]

Vue.use(Router)

let router = new Router({
  mode: 'history', 
  routes
})

router.beforeEach((to, from, next)=>{
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record=>record.meta.requiresAuth)
  if(requiresAuth && !currentUser){
    return next('login')
  }
  next()
})

export default router