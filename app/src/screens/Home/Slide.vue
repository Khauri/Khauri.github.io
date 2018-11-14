<template>
    <transition 
        :name="`${slideDirection}-slide`">
            <div 
                v-show="isActive" 
                :class="['carousel-slide', isExapnded ? 'carousel-slide-expanded' : '']">
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
        },
        slideDirection : function(){
            return this.carousel.slideDirection
        },
    },
    
    data : function(){
        return {
            _isCarouselSlide : true,
        }
    }
}
</script>

<style>
    /** Transition slide -> left **/ 
    .left-slide-enter { 
        transform : translate(100%);
    }
    .left-slide-enter-to { 
        transform : translate(0%);
    }

    .left-slide-leave { 
        transform : translate(0%);
    }
    
    .left-slide-leave-to { 
        transform : translate(-100%);
    }

    /** Transition slide -> right **/ 
    .right-slide-enter { 
        transform : translate(-100%);
    }
    .right-slide-enter-to { 
        transform : translate(0%);
    }

    .right-slide-leave { 
        transform : translate(0%);
    }
    
    .right-slide-leave-to { 
        transform : translate(100%);
    }

    .left-slide-enter-active, 
    .left-slide-leave-active, 
    .right-slide-enter-active, 
    .right-slide-leave-active { 
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
