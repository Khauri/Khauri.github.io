<template>
    <div :class="['container', isExpanded ? 'expanded' : '']">
        <div class="spacer" v-if="!isExpanded" />
        <transition name="fade">
            <navbar class="navbar" v-show="isExpanded"/>
        </transition>
        <div class="header-bg">
            <img
                class="header-bg-img"
                :src="require(`@/assets/${img}`)" 
                v-if="img">
        </div>
        <div class="header-content">
            <div class="title">
                <div class="title-banner" :style="{backgroundColor:bannerColor}" v-if="title"></div>
                <h1 :style="{color:titleColor}">{{title}}</h1>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name : 'page-header',
    inject : ['page'],
    props : {
        img : {
            default: `pic.jpg`,
            type : String
        },
        title : {},
        titleColor : {default:'white'},
        bannerColor : {},
        isExpanded : {
            default : true, 
            type : Boolean
        }
    }
}
</script>

<style scoped>
    .container {
        position : relative;
        max-width : 720px;
        width : 720px;
        min-height : 400px;
        height : 400px;
        display : flex;
        flex-direction : column;
        border-radius : 4px 4px 0 0;
        transition : ease-in-out all 1s;
    }
    .container.expanded {
        min-height : 250px;
        height : 250px;
    }

    h1 {
        margin : 0;
    }

    .title-banner {
        position: absolute;
        z-index: -1;
        left: 0;
        right: -10px;
        background: var(--scheme0);
        -webkit-clip-path: polygon(100% 0,94% 50%,100% 100%,0 100%,0 50%,0 0);
        clip-path: polygon(100% 0,94% 50%,100% 100%,0 100%,0 50%,0 0);
        height: 45px;
    }
    
    .header-bg {
        position : absolute;
        top : 0;
        left : 0;
        right : 0;
        bottom : 0;
        z-index : -1;
        overflow : hidden;
        background : black;
    }
    .header-bg-img {
        width : 100%;
        height : 400px;
        transition : ease-in-out all 1s;
    }
    .container.expanded .header-bg-img {
        filter : blur(4px);
        opacity : 0.8;
    }
    .header-content {
        position : relative;
        max-width : 240px;
        padding : 0 40px;
        margin : auto 0;
        text-align : left;
    }
    .fade-enter {
        opacity : 0;
    }
    .fade-enter-to {
        opacity : 1;
    }
    .fade-leave {
        opacity : 1;
    }
    .fade-leave-to {
        opacity : 0;
    }
    .spacer {
        height : 50px;
        width : 720px;
    }
    .navbar {
        position : sticky;
        background : rgba(0,0,0,0.3);
        background : linear-gradient(black, transparent);
        top : 0;
        width : 720px;
        color : white;
        transition : ease-in-out all 1s;
    }
    .navbar.isScrolling {
        background : white;
    }
</style>
