import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Home from '../components/Home'
import Classify from '../components/Classify'
import Shopping from '../components/Shopping'
import My from '../components/My'
import Collect from '../components/Collect.vue'
import Add from '../components/Add.vue'

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
    },
  ]
})
