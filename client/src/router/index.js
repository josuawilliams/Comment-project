import Vue from 'vue'
import VueRouter from 'vue-router'
import loginPage from '../views/loginPage.vue'
import DashboardPage from '../views/DashboardPage.vue'
import register from '../views/register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: loginPage
  },
  {
    path: '/',
    name: 'dashboard',
    component: DashboardPage
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if(!localStorage.getItem("access_token")&& to.name=='dashboard'){
    next({name : 'login'})
  }
  if(localStorage.getItem("access_token")&& to.name=='login'){
    next({name : 'dashboard'})
  }
  if(localStorage.getItem("access_token")&& to.name=='register'){
    next({name : 'dashboard'})
  }
  next()
})

export default router
