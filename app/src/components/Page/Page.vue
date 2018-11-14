<template>
    <div ref="root" class="page-container">
        <page-header
            :showHeader="showHeader"
            :img="img"
            :title="title"
            :bannerColor="bannerColor"
            :titleColor="titleColor"
            :isExpanded="isExpanded"
            :isScrolled="isScrolled">
                <slot name="header"></slot>
        </page-header>
        <page-body 
            :isExpanded="isExpanded">
            <div class="scroll-btn" @click="scrollToTop" v-if="isScrolled">top</div>
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
        showHeader : {
            default : true,
            type : Boolean
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
    data(){
        return {
            isScrolled : false
        }
    },
    methods : {
        scrollToTop(){
            this.$refs.root.scrollTop = 0
        }
    },
    mounted(){
        this.$refs.root.addEventListener('scroll', (e)=>{
            if(e.target.scrollTop >= 10){
                this.isScrolled = true
            }else{
                this.isScrolled = false
            }
        })
    }
}
</script>

<style scoped>
.page-container {
    position : relative;
    width : 100%;
    height : 100%;
    overflow-y : auto;
    /* Positioning */
    z-index : 1;
    display : flex;
    flex-direction : column;
    align-items: center;
    scroll-behavior: smooth;
}
.scroll-btn {
    opacity : 0.5;
    cursor : pointer;
    position : fixed;
    color : black;
    left : calc(50% + 720px / 2 - 25px);
    bottom : 20px;
    min-width : 50px;
    min-height : 50px;
    border-radius : 50%;
    border : 1px solid rgba(0,0,0,0.3);
    background : white;
    display : flex;
    justify-content: center;
    align-items: center;
}
</style>
