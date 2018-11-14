<!-- 
    List articles 
    With lazy loading
-->
<template>
    <div class="container">
        <div
            class="article-box" 
            v-for="(article, i) in articles" 
            :key="`article_${i}`">
                <router-link 
                    :to="`/blog/${article.slug}`">
                    Here we put a happy little image!
                </router-link>
                <div>{{article.title}}</div>
                <div>{{article.creaetedAt}}</div>
        </div>
    </div>
</template>

<script>
import { DB } from '@/util'

export default {
    name : 'article-list',
    props : {
        page : {
            type : Number,
            default : 0
        },
        results : {
            type : Number,
            default : 10
        },
        infiniteScroll : {
            type : Boolean,
            default : true
        },
        select : {
            type : Function
        }
    },
    computed : {
        articles(){
            if(!this.loadedArticles.length){
                const emptyObject = {}
                return new Array(this.results).fill(emptyObject)
            }
            return this.loadedArticles
        }
    },
    data(){
        return {
            loadedArticles : []
        }
    },
    methods : {
        async fetchData(){
            let response = await DB.listArticles({})
            this.loadedArticles = response
        }
    },
    // Load the articles
    mounted(){
        this.fetchData()
    }
}
</script>

<style scoped>
.container {

}
</style>
