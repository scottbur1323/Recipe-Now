import Vue from 'vue'
import Router from 'vue-router'
import Splash from '@/components/Splash'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Splash',
      component: Splash
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
})
