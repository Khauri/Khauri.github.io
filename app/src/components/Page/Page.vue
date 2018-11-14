<template>
    <div class="page-container">
        <page-header
            :img="img"
            :title="title"
            :bannerColor="bannerColor"
            :titleColor="titleColor"
            :isExpanded="isExpanded">
                <slot name="header"></slot>
        </page-header>
        <page-body 
            :isExpanded="isExpanded">
            <slot name="body"></slot>
        </page-body>
    </div>
</template>

<script>

import PageBody from './PageBody' 
import PageHeader from './PageHeader'

export default {
    name : 'page',
    provide(){
        return {
            page : this
        }
    },
    props : {
        img : {
            type : String,
        },
        title : {
            type : String,
        },
        bannerColor : {},
        titleColor : {},
        isExpanded : {
            default : true,
            type : Boolean
        },
        isHidden : {
            default : false, 
            type : Boolean
        }
    },
}
</script>

<style scoped>
.page-container {
    position : relative;
    width : 100%;
    height : 100%;
    overflow-y : auto;
    /* Positioning */
    display : flex;
    flex-direction : column;
    align-items: center;
}
</style>
