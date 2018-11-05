<template>
    <transition name="slide">
        <div :class="['carousel-slide', isExapnded ? 'carousel-slide-expanded' : '']" v-if="isActive">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
export default {
    inject : ['carousel'],
    props : ['tabLabel'],
    computed : {
        isActive : function(){
            return this.carousel.$children[this.carousel.activeIndex] == this
        },
        isExapnded : function(){
            return this.carousel.isExpanded
        }
    },
    mounted(){
        // console.log(this.tabLabel)
    },
    data : function(){
        return {
            _isCarouselSlide : true
        }
    }
}
</script>

<style>
    .slide-enter { 
        transform : translate(100%);
    }
    .slide-enter-to { 
        transform : translate(0%);
    }

    .slide-leave { 
        transform : translate(0%);
    }
    
    .slide-leave-to { 
        transform : translate(-100%);
    }

    .slide-enter-active, .slide-leave-active { 
        position : absolute;
        transition: all .5s cubic-bezier(0.77, 0, 0.175, 1);
    }
    .carousel-slide{
        /*  */
        width : 720px;
        height : 400px;
        justify-self: center;
        overflow : hidden;
    }
    .carousel-slide-expanded {
        position : absolute; 
        left : 0; 
        right : 0; 
        bottom : 0; 
        top : 0;
        width : 100%;
        height : 100%;
    }
</style>
