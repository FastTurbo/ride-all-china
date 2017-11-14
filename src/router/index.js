import Vue from 'vue'
import Router from 'vue-router'
import IndexComponent from '@/components/IndexComponent'
import LoginComponent from '@/components/LoginComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexComponent
    },
    {
      path:'/login',
      name:'login',
      component:LoginComponent
    }
  ]
})
