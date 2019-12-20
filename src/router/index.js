import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Home from '../components/Home'
import Classify from '../components/Classify'
import Shopping from '../components/Shopping'
import My from '../components/My'
<<<<<<< HEAD
import Collect from '../components/Collect.vue'
import Add from '../components/Add.vue'
=======
import Page from '../components/Page'
>>>>>>> 68755b672544d56bcade23953f1805582c9bbb34

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        flag:true
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta:{
        flag:true
      }
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify,
      meta:{
        flag:true
      }
    },
    {
      path: '/shopping',
      name: 'Shopping',
      component: Shopping,
      meta:{
        flag:true
      }
    },
    {
      path: '/my',
      name: 'My',
      component: My,
<<<<<<< HEAD
       meta:{
        flag:true
      }
=======
      meta:{
        flag:true
      }
    },
    {
      path: '/collect',
      name: 'Collect',
      component: Collect,
      meta:{
        flag:false
      }
    },{
      path: '/add',
      name: 'Add',
      component: Add,
      meta:{
        flag:false
      }
>>>>>>> 4d134244975597863bb555639fdc7d0ca236f630
    },
    {
      path: '/page',
      name: 'Page',
      component: Page,
      meta:{
        flag:false
      }
    },
  ]
})
