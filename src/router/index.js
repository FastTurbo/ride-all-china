import Vue from 'vue'
import Router from 'vue-router'
import IndexComponent from '@/components/IndexComponent'
import LoginComponent from '@/components/LoginComponent'
import FindPasswordComponent from '@/components/FindPasswordComponent'
import RegisterComponent from '@/components/RegisterComponent'

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
    },
    {
      path:'/findPass',
      name:'findPass',
      component:FindPasswordComponent
    },
    {
      path:'/register',
      name:'register',
      component:RegisterComponent
    }
  ]
})
