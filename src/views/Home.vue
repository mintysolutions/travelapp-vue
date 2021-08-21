<template>
  <div class="home">
    <h1> All Destinations </h1>
    <div class="destinations">
      <router-link
        v-for="dest in destinations"
        :key="dest.id"
        :to="dest.slug"
      > <h2>{{dest.name}}</h2>
        <img :src="`/images/${dest.image}`" alt="">
      </router-link>
    </div>
  </div>
</template>

<script>
import data from '@/data.json'

export default {
  name:'Home',

  data() {
    return {
      destinations: data.destinations
    }
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
