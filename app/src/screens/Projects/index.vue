<template>
    <page class="project-container">
        <!-- Header -->
        <page-header :img='"pic2.jpg"' :isExpanded="isExpanded">
            <div class="header-text text">
                <h1 class="header-title">The Lab</h1>
            </div>
        </page-header>
        <!-- Body -->
        <page-body>
            <h1>In The Lab</h1>
            <p>
               Here's some projects I've been working on!
            </p>
        </page-body>
        <!-- Footer(?) -->
    </page>
</template>

<script>
import {Page, PageHeader, PageBody} from '@/components'
export default {
    name : "ProjecsPage",
    props : {
        isExpanded : {
            default : true,
            type : Boolean
        }
    },
    components : { Page, PageHeader, PageBody },
    data(){
        return {}
    },
}
</script>

<style>
    .project-container {
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
