<!-- 
    List articles 
    With lazy loading
-->
<template>
    <div class="container">
        <div v-if="listMode"
            class="article-list-item"
            v-for="(article, i) in articles"
            :key="`article_${i}`"
            @click="selectArticle(article)">
            <div>
                <div v-if="article.title">{{article.title}}</div>
                <div v-if="article.lastModified">{{toDate(article.lastModified)}}</div>
            </div>
            <div class="article-list-controls">
                <button>DELETE</button>
                <button>EDIT</button>
            </div>
        </div>
        <div v-else
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
        },
        listMode : {
            default : false,
            type : Boolean
        },
        fillEmpty : {
            default : false,
            type : Boolean
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
        },
        selectArticle(article){
            this.$emit('select', article)
        },
        toDate(timestamp){
            if(!timestamp) return "Unknown Time"
            return timestamp.toDate().toLocaleString()
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
.article-list-item {
    padding : 10px;
    min-height : 50px;
    cursor : pointer;
    display : flex;
    flex-direction : row;
    justify-content: space-between;
    align-items : center;
}
.article-list-item:hover {
    background : rgba(0,0,0,0.1);
}

.article-list-controls {
    display : flex;
    flex-direction : row;
    justify-content : space-around;
}

</style>
