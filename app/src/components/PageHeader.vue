<template>
    <div :class="['page-header', isExpanded ? 'page-header-expanded' : '']">
        <div class="page-header-bg">
            <img
                class="page-header-bg-img"
                :src="require(`@/assets/${img}`)" 
                v-if="img">
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    inject : ['page'],
    props : {
        img : {
            default: `pic.jpg`,
            type : String
        },
        isExpanded : {
            default : true, 
            type : Boolean
        }
    }
}
</script>

<style>
    .page-header {
        position : relative;
        max-width : 720px;
        width : 720px;
        min-height : 400px;
        height : 400px;
        display : flex;
        border-radius : 4px 4px 0 0;
        transition : ease-in-out all 1s;
    }
    .page-header-expanded {
        min-height : 250px;
        height : 250px;
    }
    
    .page-header-bg {
        position : absolute;
        top : 0;
        left : 0;
        right : 0;
        bottom : 0;
        overflow : hidden;
        background : black;
    }
    .page-header-bg-img {
        width : 100%;
        height : 400px;
        transition : ease-in-out all 1s;
    }
    .page-header-expanded .page-header-bg-img{
        filter : blur(4px);
        opacity : 0.8;
    }
</style>
