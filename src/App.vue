<template>
  <div id="app">
    <router-view/>
    <tabbar></tabbar>
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
