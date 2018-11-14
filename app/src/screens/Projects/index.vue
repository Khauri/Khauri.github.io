<template>
    <page 
        :isExpanded="isExpanded"
        :img="'lab.png'"
        class="container">
        <!-- Header -->
        <div slot="header" class="header-text text">
            <h1 class="header-title">The Lab</h1>
        </div>
        <!-- Body -->
        <div slot="body">
            <h1>In The Lab</h1>
            <p>
               Here's some projects I've been working on!
            </p>
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
