<template>
    <page :isExpanded="true">
        <div slot="body">
            <article-view :inputArticle="article"/>
        </div>
    </page>
</template>

<script>
import { DB } from '@/util'
export default {
    async beforeRouteEnter(to, from, next){
        // TODO: Instead we should load the whole article here
        // and pass it to article view. This'll stop some loading
        // issues
        let {error, article } = await DB.getArticleBySlug(to.params.slug)
        next( vm => vm.setData(error, article))
    },
    data(){
        return {
            slug : '',
            article : {},
        }
    },
    methods : {
        setData(error, article){
            if(error){
                // redirect to 404?
            }
            this.article = article
        }
    }
}
</script>

<style>

</style>
