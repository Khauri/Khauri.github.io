<template>
    <page
        :img="'blog.png'"
        title="Blog"
        bannerColor="#6b006c"
        :isExpanded="isExpanded"
        class="blog-container">
         <!-- Header -->
        <div slot="header">
            <h3 class="header-title">Provacative topics from a provacative mind</h3>
        </div>
        <!-- Body -->
        <div slot="body">
            <h1>Latest Blog Posts</h1>
            <article-list v-if="isExpanded"/>
        </div>
    </page>
</template>

<script>
export default {
    async beforeRouteEnter(to, from, next){
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
    }
    .content-body {
        width : 720px;  
    }

    .article-box {
        text-align : left;
    }
</style>
