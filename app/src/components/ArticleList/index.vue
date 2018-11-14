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
        <div v-if="!listMode"
            class="article-box" 
            v-for="(article, i) in articles" 
            :key="`article_${i}`">
                <div>
                    <router-link
                        class="article-box-link"
                        v-if="article.slug"
                        :to="`/blog/${article.slug}`">
                            <b>{{article.title}}</b>
                            <div>{{toDate(article.lastModified)}}</div>
                    </router-link>
                    <div 
                        class="article-box-description"
                        v-if="article.slug">
                        {{articlePreview(article.text)}}
                        <router-link :to="`/blog/${article.slug}`">
                        read more
                        </router-link>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import { DB } from '@/util'
import moment from 'moment'

export default {
    name : 'article-list',
    props : {
        page : {
            type : Number,
            default : 0
        },
        tags : {
            type : Array
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
            let response = await DB.listArticles({tags:this.tags})
            this.loadedArticles = response
        },
        selectArticle(article){
            this.$emit('select', article)
        },
        toDate(timestamp){
            if(!timestamp) return "Unknown Time"
            let date = timestamp.toDate()
            return moment(date).fromNow().toString()
            // return timestamp.toDate().toLocaleString()
        },
        // TODO: Better auto-generation
        // But replace with description if it's available
        articlePreview(text){
            if(!text){
                return ""
            }
            text = text
                // strip leading and ending whitespace
                // Remove header
                .replace(/#\s.+\n/,"")
                // Remove all other headers
                .replace(/#{1,3}\s(.*)\n/g,"$1.")
                // Replace newlines with spaces
                .replace(/\n/g, " ")
                .trim()
                .split(/\s/g)
                .slice(0,40)
                .join(" ")
            text += "..."
            return text
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

.article-box {
    width : 100%;
}
.article-box-link {
    padding : 10px 30px;
    color : var(--text0);
    text-decoration-line: none;
    display : flex;
    flex-direction : row;
    justify-content: space-between;
    align-items : center;
}
.article-box-link:hover {
    background : rgba(0,0,0,0.05);
}
.article-box-description{
    padding : 10px 30px;
}

</style>
