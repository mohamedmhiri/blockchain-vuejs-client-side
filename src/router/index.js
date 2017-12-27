import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NewTransaction from '../components/NewTransaction'
import Chain from '../components/Chain'
import Resolve from '../components/Resolve'
import Register from '../components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/new-transaction',
      name: 'new_transaction',
      component: NewTransaction
    },
    {
      path: '/chain',
      name: 'chain',
      component: Chain
    },
    {
      path: '/resolve',
      name: 'resolve',
      component: Resolve
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
