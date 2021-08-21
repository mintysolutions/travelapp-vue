<template>
  <section class="destination">
      <h1>{{destination.name}}</h1>
      <div class="destination-details">
          <img :src="`/images/${destination.image}`" :alt="destination.name">
          <p>{{destination.description}}</p>
      </div>
  </section>
</template>

<script>
import data from '@/data.json'

export default {
    name:'DestinationShow',
    computed:{
        destinationId(){
            return parseInt(this.$route.params.id)
        },
        destination(){
            return data.destinations.find(destination => this.destinationId === destination.id)
        }
    }
}
</script>

<style>

</style>