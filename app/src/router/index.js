import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import { Home, ErrorPage, Login, Dashboard } from '@/screens'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component : Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component : Dashboard,
    meta : {
      requiresAuth : true
    }
  },
  {
    path: '*',
    name: '404',
    component : ErrorPage
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