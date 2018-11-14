<!-- 
    Dashboard. 
        Features: 
            See all published articles
            Create/Edit/Delete an Article
-->
<template>
    <page 
        :showHeader="false"
        class="container">
        <div slot="body" class="md-editor">
            <showdown 
                :previewClass="'site-article'"
                :previewLocation="previewLocation"
                :showPreview="false"
                :inputText="article.text"
                :isValid="isValid"
                @submit="save">
                <div slot="left">
                    <input class="title-input" v-model="article.title" placeholder="Title">
                </div>
            </showdown>
        </div>
    </page>
</template>

<script>
import { DB } from '@/util'

export default {
    // Load the thing to edit before entering this route
    async beforeRouteEnter (to, from, next) {
        if(to.params.article){
            return next( vm => vm.setArticle(null, to.params.article))
        }
        let {error, article} = await DB.getArticleBySlug(to.query.slug)
        next( vm => vm.setArticle(error, article) )
    },
    // when route changes and this component is already rendered,
    async beforeRouteUpdate (to, from, next) {
        let {error, data, ref} = await DB.getArticleBySlug(to.params.slug)
        this.setData(error, data, ref)
        next()
    },

    beforeRouteLeave (to, from, next) {
        if(this.isValid){
            return next()
        }
        // Ask if should save changes
        const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
        if (answer) {
            next()
        } else {
            next(false)
        }
    },

    data(){
        return {
            previewLocation : 'right',
            article : {},
            title : undefined,
            inputText : '',
            dbRef : null,
            unsavedChanges : false,
            isValid : false
        }
    },

    methods : {
        async create(d){
            let { error, article } = await DB.createArticle({
                title : this.article.title,
                ...d
            })
            // virtually update the window route
            window.history.pushState(null,{},`/dashboard/edit?slug=${data.slug}`)
        },

        async update(data){
            await DB.updateArticle(this.article.id, {title : this.article.title, ...data})
            this.isValid = true
            // Display "Saved" feedback
        },

        save(data){
            if(!this.article.title){
                // Gotta set that young title lmao
                console.error("Missing Title")
                return
            }
            if(!this.article.id){
                this.create(data)
            }else{
                this.update(data)
            }
            console.log("Saved")
        },

        setArticle(error, article){
            if(error){
                console.log(error)
                return
                // Redirect or crash(?)
            }
            // this.dbRef = ref
            this.article = article
        }
    }
}
</script>

<style scoped>
.container {
    position : relative;
    height : 100%;
}
.md-editor {
    height : 480px;
}
.title-input{
    padding : 5px;
    margin : 0 8px;
    background : transparent;
    outline : none;
    border : none;
    border-bottom : 1px solid rgba(0,0,0,0.12);
    outline-color: transparent;
    outline-style: none;
}
.title-input:focus{
    background : white;
}
</style>
