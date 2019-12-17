import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Home from '../components/Home'
import Classify from '../components/Classify'
import Shopping from '../components/Shopping'
import My from '../components/My'
import Page from '../components/Page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify,
    },
    {
      path: '/shopping',
      name: 'Shopping',
      component: Shopping,
    },
    {
      path: '/my',
      name: 'My',
      component: My,
    },
    {
      path: '/page',
      name: 'Page',
      component: Page,
    },
  ]
})
