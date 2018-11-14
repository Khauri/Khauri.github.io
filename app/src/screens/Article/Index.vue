<template>
    <page>
        <div slot="body">
            <article-view />
        </div>
    </page>
</template>

<script>
export default {
    beforeRouteEnter(to, from, next){
        next( vm => vm.setData())
    },
    methods : {
        setData(){

        }
    }
}
</script>

<style>

</style>
