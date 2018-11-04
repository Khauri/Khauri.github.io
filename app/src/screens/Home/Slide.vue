<template>
    <div class="carousel-slide" v-show="isActive">
        <slot></slot>
    </div>
</template>

<script>
export default {
    inject : ['carousel'],
    props : ['tabLabel'],
    computed : {
        isActive : function(){
            return this.carousel.$children[this.carousel.activeIndex] == this
        },
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
    .carousel-slide{
        position : absolute; 
        left : 0; 
        right : 0; 
        bottom : 0; 
        top : 0;
        background : rgba(0,0,0,0.2);
    }
</style>
