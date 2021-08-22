<template>
  
  <TheNavigation/>

  <div class="container">
      <router-view :key="$route.path"></router-view>
  
  </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation.vue'

export default {
  name:'App',
  components:{
    TheNavigation
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
