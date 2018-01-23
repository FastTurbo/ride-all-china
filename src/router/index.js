import Vue from 'vue'
import Router from 'vue-router'
import IndexComponent from '@/components/IndexComponent'


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
      component:(resolve) => {
          require(['../components/LoginComponent.vue'],resolve)
      }
      //LoginComponent
    },
    {
      path:'/findPass',
      name:'findPass',
      component:(resolve) => {
        require(['../components/FindPasswordComponent.vue'],resolve)
      }
    },
    {
      path:'/register',
      name:'register',
      component:(resolve) => {
        require(['../components/RegisterComponent.vue'],resolve)
      }
    }
  ]
})
