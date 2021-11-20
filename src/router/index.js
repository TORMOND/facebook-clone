import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/NewPage',
    name: 'NewPage',
   
    component: function () {
      return import( '../views/NewPage.vue')
    }
  },
  {
    path: '/Login',
    name: 'Login',
   
    component: function () {
      return import( '../views/LogIn.vue')
    }
  },
  {
    path: '/Navigation',
    name: 'Navigation',
   
    component: function () {
      return import( '../views/Navigation.vue')
    }
  },
  {
    path: '/signUp',
    name: 'signUp',
   
    component: function () {
      return import('../views/signUp.vue')
    }
  },
  {
    path: '/profile',
    name: 'profile',
   
    component: function () {
      return import( '../views/Profile.vue')
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
