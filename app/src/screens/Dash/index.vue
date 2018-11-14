<template>
    <page :showHeader="false" class="dash-container">
        <div slot="body" class="dash-body">
             <router-link to="/dashboard/new">
                New Article
            </router-link>
            <div class="articles-box">
                <article-list
                    class="article-list"
                    @select="onSelect"
                    :listMode="true"/>
            </div>
           
        </div>
    </page>
</template>

<script>
export default {
    methods : {
        onSelect(article){
            this.$router.push({name:'Editor', params : article, query:{slug:article.slug}})
            console.log(article)
        }
    },
}
</script>

<style scoped>
.dash-container {
    padding-top : 15px;
}
.dash-body {
    margin-top : 30px;
}
.articles-box {
    background : rgba(0,0,0,0.07);
}
.article-list {
    color : var(--text0);
}
</style>
