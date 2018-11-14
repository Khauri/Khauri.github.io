<template>
    <page
        :img="'blog.png'"
        :isExpanded="isExpanded"
        class="blog-container">
         <!-- Header -->
        <div slot="header" class="header-text text">
            <h1 class="header-title">Blog</h1>
        </div>
        <!-- Body -->
        <div slot="body">
            <h1>Latest Blog Posts</h1>
            <article-list v-if="isExpanded"/>
        </div>
    </page>
</template>

<script>
import {Page, PageHeader, PageBody, ArticleList} from '@/components'

export default {
    components : { Page, PageHeader, PageBody, ArticleList },

    async beforeRouteEnter(to, from, next){
        // Get all the articles (based on params?)
        // console.log(to.params)
        next()
    },

    async beforeRouteUpdate(to, from, next){
        next()
    },

    props : {
        isExpanded : {
            default : true,
            type : Boolean
        }
    },

    data(){
        return {
            articles : []
        }
    },

    methods : {

    }
}
</script>

<style scoped>
    .container {
        flex : 1;
        display : flex;
        justify-content: center;
    }
    .content-body {
        width : 720px;  
    }

    .article-box {
        text-align : left;
    }
</style>
