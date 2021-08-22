export default {
    methods:{
        destinationRoute(slug){
            return {
                name:'destinationshow',
                params : {
                    slug: slug
                }
            }
        }
    }
}