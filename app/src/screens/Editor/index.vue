<!-- 
    Dashboard. 
        Features: 
            See all published articles
            Create/Edit/Delete an Article
-->
<template>
    <div class="container">
        <div class="md-editor">
            <showdown 
                :previewClass="'site-article'"
                :previewLocation="previewLocation"
                :showPreview="false"
                :inputText="article.text"
                @submit="save">
                <div slot="left">
                    <input v-model="article.title" placeholder="Title">
                </div>
            </showdown>
        </div>
    </div>
</template>

<script>
import { NavBar, Showdown} from '@/components'
import { DB } from '@/util'

export default {
    components : {NavBar, Showdown},
    // Load the thing to edit before entering this route
    async beforeRouteEnter (to, from, next) {
        let {error, data, ref} = await DB.getArticleBySlug(to.params.slug)
        next( vm => vm.setData(error, data, ref))
    },
    // when route changes and this component is already rendered,
    async beforeRouteUpdate (to, from, next) {
        let {error, data, ref} = await DB.getArticleBySlug(to.params.slug)
        this.setData(error, data, ref)
        next()
    },

    beforeRouteLeave (to, from, next) {
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
            unsavedChanges : false
        }
    },

    methods : {
        async create(d){
            try {
                let { data, ref } = await DB.createArticle({
                    title : this.article.title,
                    ...d
                })
                this.dbRef = ref
                // virtually update the window route
                window.history.pushState(null,{},`/dashboard/edit/${data.slug}`)
            } catch (error) {
                // article already exists most likely
            }
        },

        async update(data){
            await DB.updateArticle(this.dbRef, {title : this.article.title, ...data})
            // Display "Saved" feedback
        },

        save(data){
            if(!this.article.title){
                // Gotta set that young title lmao
                console.error("Missing Title")
                return
            }
            if(!this.dbRef){
                this.create(data)
            }else{
                this.update(data)
            }
        },

        setData(error, data, ref){
            if(error){
                console.log(error)
                return
                // Redirect or crash(?)
            }
            this.dbRef = ref
            this.article = { title:data.title, text:data.text}
        }
    }
}
</script>

<style scoped>
    .container {
        position : relative;
        width : 100%;
        height : 100%;
        display : flex;
        justify-content: center;
        overflow : scroll;
    }
    .md-editor {
        width : 720px;
        height : 100%;
        padding : 0 10px;
    }
</style>
