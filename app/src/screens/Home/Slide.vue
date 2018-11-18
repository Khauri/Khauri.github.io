<template>
    <transition 
        :name="`${slideDirection}-slide`">
            <div 
                v-show="isActive" 
                :class="[
                    'carousel-slide', 
                    isExapnded && 'carousel-slide-expanded',
                    isCurrent && 'curr',
                    isNext && 'next',
                    isPrev && 'prev'
                ]">
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
            if(this.isCurrent || this.isNext || this.isPrev){
                return true
            }
        },
        isCurrent : function(){
            let activeIindex = this.carousel.activeIndex
            return this.carousel.$children[activeIindex] == this
        },
        isPrev : function(){
            if(!this.isVertical){
                return false
            }
            let activeIindex = this.carousel.activeIndex
            let count = this.carousel.$children.length
            // Kinda lazy but w/e this is my site  I do what I want
            if(activeIindex == 0){
                return this.carousel.$children[count - 1] == this
            }
            return this.carousel.$children[(activeIindex - 1) % count] == this
        },
        isNext : function(){
            if(!this.isVertical){
                return false
            }
            let activeIindex = this.carousel.activeIndex
            let count = this.carousel.$children.length
            return this.carousel.$children[(activeIindex + 1) % count] == this
        },
        isExapnded : function(){
            return this.carousel.isExpanded
        },
        slideDirection : function(){
            return this.carousel.slideDirection
        },
        isVertical : function(){
            return this.carousel.isVertical
        }
    },
    
    data : function(){
        return {
            _isCarouselSlide : true,
        }
    }
}
</script>

<style scoped>
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
    
    .carousel-slide {
        /*  */
        width : 720px;
        /* height : 400px; */
        justify-self: center;
        overflow : hidden;
    }
    
    .carousel-slide-expanded {
        position : absolute; 
        left : 0 !important; 
        right : 0 !important; 
        bottom : 0 !important; 
        top : 0 !important;
        width : 100% !important;
        height : 100% !important;
    }
    @media only screen and (max-width : 780px){
        .carousel-slide {
            position : absolute;
            width : 100%;
            height : initial;
            overflow : hidden;
            transition : all .5s cubic-bezier(0.77, 0, 0.175, 1);
        }
       
        .next {
            transform: translate(0, 100%);
            opacity : 0.7;
            z-index : 98;
        }
        .curr {
            transform: translate(0, 0);
            height : 400px;
            z-index : 99;
        }
        .prev {
            transform: translate(0, -100%);
            opacity : 0.3;
            z-index : 98;
        }

        .left-slide-enter { 
            transform : translate(0, 200%);
        }
        .left-slide-enter-to { 
            transform : translate(0, 100%);
        }

        .left-slide-leave { 
            transform : translate(0, -100%);
        }
        
        .left-slide-leave-to { 
            transform : translate(0, -200%);
        }

        /** Transition slide -> right **/ 
        .right-slide-enter { 
            transform : translate(0, -200%);
        }
        .right-slide-enter-to { 
            transform : translate(0, -100%);
        }

        .right-slide-leave { 
            transform : translate(0, 100%);
        }
        
        .right-slide-leave-to { 
            transform : translate(0, 200%);
        }

        .left-slide-enter-active, 
        .left-slide-leave-active, 
        .right-slide-enter-active, 
        .right-slide-leave-active { 
            position : absolute;
            transition: all .5s cubic-bezier(0.77, 0, 0.175, 1);
        }
    }
</style>
