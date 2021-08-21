export default {
    methods:{
        destinationRoute(id){
            return {
                name:'destination.show',
                params : {
                    id: id
                }
            }
        }
    }
}