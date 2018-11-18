<template>
    <div :class="[
        'carousel-root',
        isExpanded && 'carousel-root-expand',
        isVertical && 'vertical'
        ]">
        <div class="pages">
            <slot></slot>
        </div>
        <div
            v-if="!isVertical"
            :class="[
            'inner-carousel',
            isExpanded ? `inner-carousel-expanded`:''
            ]">
            <div class="indicators">
                <div 
                    :class="[
                        `indicator`,
                        index-1 == activeIndex ? 'indicator-active' : ''
                    ]" 
                    v-for="index in 4" 
                    :key="`indicator-${index}`"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    provide(){
        return {
            carousel : this
        }
    },

    props : {
        isExpanded : {
            default : false, 
            type : Boolean
        },
        isVertical : {
            default : false,
            type : Boolean
        },
        slideDirection : {
            default : 'right',
        },
        activeTabIndex : {
            default : 0,
            type : Number
        }
    },

    computed : {
        // Returns Slides only 
        slides : function(){
            return this.$children.filter(child => {
                return !child._isCarouselSlide
            })
        },
        slideNames : function(){
            return this.slides.map(slide=>slide.tabLabel)
        },
        tabCount : function(){
            return this.$children.length
        },
        activeIndex(){
            return this.activeTabIndex
        }
    },

    methods : {
        expand(){
            // Animate the positional values
        }
    },

    mounted() {
        this.isReady = true
    },

    data : function(){
        return {
            // HAX(?)
            isReady  : false,
            transitioning : false,
        }
    },
}
</script>

<style scoped>
    .carousel-root {
        width : 100%;
        height : 100%;
        position : relative;
        display : flex;
        flex-direction : column;
        justify-content: center;
        align-items: center;
        /**
            Rounded Rectangle Clip-path!!
            This is what controls the shape of the container 
            Formula: 
                clip-path: inset(0 50% - $width/2 0 calc(50% - $width/2 round $radius)
         **/
        clip-path: inset(
            0
            calc(50% - 360px) 
            calc(100% - 400px)
            calc(50% - 360px) 
            round 
            4px 4px 0px 0px
        );

        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        overflow : hidden;
        transition : ease-in-out all 0.5s;

    }

    .carousel-root.vertical {
        clip-path: inset(0 0 0 0 round 0px);
    }

    .pages { 
        width : 100%;
        height : 100%;
        display : flex;
        justify-content: center;
    }
    .carousel-root.vertical .pages { 
        width : 100%;
        height : 100%;
        display : flex;
        flex-direction : column;
        align-items: center;
    }
    
    .carousel-root-expand {
        clip-path: inset(0 0 0 0 round 0px);
    }

    .indicators {
        display : flex;
        flex-direction : row;
        position : absolute;
        height : 10px;
        padding : 10px 0px;
        bottom : 0;
    }
    .inner-carousel {
        position : absolute;
        top : 0;
        width : 100%;
        display : flex;
        justify-content: center;
        height : 400px;
        transition : ease-out all 0.5s;
        z-index : 9999;
    }
    .inner-carousel-expanded {
        opacity : 0;
        pointer-events: none;
    }
    .indicator {
        width : 10px;
        height : 10px;
        opacity : 0.5;
        margin : 0 5px;
        border-radius : 10px;
        background : white;
        transition : ease-out all 0.5s;
    }
    .inner-carousel-expanded .indicator {
        margin : 0 30px;
    }
    .indicator-active {
        background : white;
        opacity : 1;
    }
    /** Vertical "unpacked" Slides layout*/
    @media only screen and (max-width : 780px){

    }
</style>
