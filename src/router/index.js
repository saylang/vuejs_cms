import Vue from 'vue'
import Router from 'vue-router'
import Guard from '../services/middleware'
import Index from '@/components/home/Index'
import Register from '@/components/auth/Register'
import Login from '@/components/auth/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Index,
      beforeEnter: Guard.auth
    },
    {
      path: '/login',
      name: 'Login',
      meta: {layout: 'landing'},
      component: Login,
      beforeEnter: Guard.guest
    },
    {
      path: '/register',
      name: 'Register',
      meta: {layout: 'landing'},
      component: Register,
      beforeEnter: Guard.guest
    }
  ]
})
