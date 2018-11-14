<template>
    <page 
        :img="'pic.jpg'"
        :title="'Khauri McClain'"
        :bannerColor="'#e42e00'"
        :isExpanded="isExpanded"
        class="container">
        <!-- Header -->
        <div 
            slot="header" >
            <h3> Software Engineer. Creative Type.</h3>
            <p>(Come meet your diversity quota)</p>
        </div>
        <!-- Body -->
        <article-view slot="body" slug="about-me"/>
        <!-- Footer(?) -->
    </page>
</template>

<script>
export default {
    name : "About",
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
        background-size : cover;
        background-repeat:   no-repeat;
        background-position : center center;
    }
    .about-content{
        align-self:  center;
        max-width : 720px;
        height : 600px;
        background : blue;
    }
    .header-text {
        z-index : 1;
        text-align : left;
        max-width : 240px;
        margin : auto 80px;
    }
    .sm-icon {
        cursor : pointer;
        margin : 0 5px;
    }
</style>
