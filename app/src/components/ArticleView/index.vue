<!-- 
    Article View 
    Used to display an article!
-->
<template>
    <div 
        class="content site-article"
        v-html="article.html">
    </div>
</template>

<script>
import { DB } from '@/util'

export default {
    name : 'article-view',
    props : ['inputArticle', 'slug'],
    computed : {
        article(){
            return this.inputArticle || this.loadedArticle
        }
    },
    data(){
        return {
            loadedArticle : {}
        }
    },
    async mounted(){
        if(this.inputArticle || !this.slug){
            return
        }
        // Load the article from the database
        let {error, data, ref} = await DB.getArticleBySlug(this.slug)
        if(error){
            return
        }
        this.loadedArticle = data
    }
}
</script>

<style scoped>
  .site-article {
    text-align : left;
    line-height : 1.55em;
    color : rgba(0,0,0,0.8);
  }
  .site-article h1 {

  }
  .site-article h2 {
    
  }
  .site-article h3 {
    
  }
  .site-article h4 {
    
  }
</style>
