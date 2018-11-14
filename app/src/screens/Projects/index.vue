<template>
    <page 
        :isExpanded="isExpanded"
        :title="'The Lab'"
        :bannerColor="'orange'"
        :img="'lab.png'"
        class="container">
        <!-- Header -->
        <div slot="header" class="header-text text">
            <h3>See what's brewing in the computer lab</h3>
        </div>
        <!-- Body -->
        <div slot="body">
            <p> Here's some projects I've been working on!</p>
        </div>
        <!-- Footer(?) -->
    </page>
</template>

<script>
export default {
    name : "Projects",
    props : {
        isExpanded : {
            default : true,
            type : Boolean
        }
    },
    data(){
        return {}
    },
}
</script>

<style scoped>
    .container {
        color : white;
        background : transparent;
    }

    .about-content{
        align-self:  center;
        max-width : 720px;
        height : 600px;
    }

    .header-text {
        z-index : 1;
        text-align : left;
        max-width : 240px;
    }
</style>
