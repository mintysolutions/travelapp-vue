<template>
  <div id="nav">

    <router-link to="/">Home</router-link> 
    <router-link 
        v-for="dest in destinations"
        :key="dest.id"
        :to="destinationRoute(dest.slug)">
        {{dest.name}}
    </router-link> 
 
  </div>
</template>

<script>
import RouteMixin from '@/mixins/route'
import data from '@/data.json'

export default {
    name:'TheNavigation',
    mixins:[RouteMixin],
    data(){
        return {
            destinations : data.destinations
        }
    }
}
</script>

<style scoped>
    .router-link-active{
        color: white;
        border-bottom: 2px solid white;
    }
</style>