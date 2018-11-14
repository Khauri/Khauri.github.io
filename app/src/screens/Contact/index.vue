<template>
    <page 
        :headerImg="'contact.png'"
        :isExpanded="isExpanded"
        class="about-container">
        <!-- Header -->
        <div 
            slot="header" 
            class="header-text text">
            <h1 class="header-title">Contact Me</h1>
            <p>kmcclain@email.wm.edu</p>
            <p>khauri7five7@gmail.com</p>
            <div class="header-social">
                <fa class="sm-icon" :icon="['fab','github']"/>
                <fa class="sm-icon" :icon="['fab','twitter']"/>
                <fa class="sm-icon" :icon="['fab','facebook']"/>
                <fa class="sm-icon" :icon="['fab','instagram']"/>
            </div>
        </div>
        <!-- Body -->
        <article-view slot="body" slug="about-me"/>
        <!-- Footer(?) -->
    </page>
</template>

<script>
import {Page, PageHeader, PageBody, ArticleView} from '@/components'
export default {
    name : "AboutPage",
    props : {
        isExpanded : {
            default : true,
            type : Boolean
        }
    },
    components : { Page, PageHeader, PageBody, ArticleView },
    data(){
        return {}
    },
}
</script>

<style>
    .about-container {
        color : white;
        /* background: url('../../assets/bg2.jpg'); */
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
