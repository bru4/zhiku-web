import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/layout/layout'
import Dashboard from '@/pages/dashboard/dashboard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '首页',
      component: Layout,
      redirect: '/dashboard',
      children: [{ path: 'dashboard', component: Dashboard }]
    },
  ]
})
