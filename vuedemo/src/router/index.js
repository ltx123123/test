import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      meta:{
        title: 'login'
      },
      redirect: {
        name: '登录页'
      }
    },
    {
      path: '/login',
      meta:{
        title: '登录'
      },
      name: 'login',
      component: () => import('@/components/login/login')
    },
    {
      path: '/test',
      meta: {
        title: 'test'
      },
      name: 'test',
      component: () => import('@/components/HelloWorld')
    }
  ]
})
