import Vue from 'vue'
import Router from 'vue-router'
import IndexComponent from '@/components/IndexComponent'
import Home from '@/components/Home'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {path:'/home',component:IndexComponent,name:'Home'},
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
    },
    {
      path:'/login',
      name:'login',
      component:(resolve) => {
          require(['../components/LoginComponent.vue'],resolve)
      }
      //LoginComponent
    }
  ]
})
