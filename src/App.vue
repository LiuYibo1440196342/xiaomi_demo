<template>
  <div id="app">
    <router-view/>
    <tabbar v-show="$route.meta.flag"></tabbar>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import tabbar from './components/Tabbar.vue'
import './assets/js/remStyle'
export default {
  name: 'App',
  components:{
    tabbar,
    HelloWorld
  }
}
</script>

<style>
@import './assets/css/reset.css';

</style>
