<template>
  <section v-if="destination" :key="destination.id" class="destination">
      <h1>{{destination.name}}</h1>
      <div class="destination-details">
          <img :src="`/images/${destination.image}`" :alt="destination.name">
          <p>{{destination.description}}</p>
      </div>
  </section>
</template>

<script>
import {getDestination} from '@/services/DestinationService'

export default {
    name:'DestinationShow',
    props:{
        slug:{
            type:String,
            required:true
        }
    },
    data(){
        return {
            destination : null
        }
    },
    async created(){
        this.destination = await getDestination(this.slug)
    }
}
</script>

<style>

</style>