<!-- 
    Home Page. 
    The idea is to have a simple carousel where each section "previews" the next page.
    Clicking on the section itself launches a transition where the carousel grows in size
    until the next page is revealed. (Sort of a Maximizaiton Effect)
-->
<template>
    <div class="container">
        <div :class="['content-wrapper', expanded && 'expanded']">
            <carousel 
                :isVertical="isVerticalCarousel"
                :loop="true"
                :slideDirection="slideDirection"
                :isExpanded="expanded" 
                :activeTabIndex="activeTab">
                <slide :tabLabel="`about`">
                    <about :isExpanded="expanded"/>
                </slide>
                <slide :tabLabel="`lab`">
                    <projects :isExpanded="expanded"/>
                </slide>
                <slide :tabLabel="`blog`">
                    <blog :isExpanded="expanded"/>
                </slide>
                <slide :tabLabel="`contact`">
                    <contact :isExpanded="expanded"/>
                </slide>
            </carousel>
            
            <!-- <div class="quickems" v-if="!expanded">
                <h3>Download Resume</h3>
            </div> -->
        </div>
        <div class="navigation" v-if="!expanded">
                <div 
                    class="nav-tab" 
                    v-for="(tab, index) in navTabs" 
                    :key="`tab-${index}`"
                    @click="toggleExpansion"
                    @mouseover="gotoSlide(index)">
                    {{tab}}
                </div>
            </div>
    </div>
</template>

<script>
import { CanvasDrip } from '@/components'
import about from '../About'
import projects from '../Projects'
import contact from '../Contact' 
import blog from '../Blog'

import slide from './Slide'
import carousel from './Carousel'

export default {
    components : { 
        CanvasDrip,
        slide, 
        carousel, 
        about,
        projects,
        blog, 
        contact
    },
    props : {
        isExpanded : {
            default : false,
            type : Boolean
        }
    },
    data(){
        return {
            navTabs : ['About', 'Projects', 'Blog', 'Contact'],
            slideDirection : 'right',
            activeTab : 0,
            expanded : this.isExpanded,
            carouselLoopTime : 5 * 1000,
            isVerticalCarousel : false
        }
    },

    methods : {
        toggleExpansion(page){
            // TODO: Remove transition animations and just jump to clicked page
            this.expanded = !this.expanded
            this.clearTimer()
        },
        nextSlide(){
            this.slideDirection = "left"
            this.activeTab = ( this.activeTab + 1 ) % this.navTabs.length
            this.timeout = setTimeout(this.nextSlide, this.carouselLoopTime)
        },
        gotoSlide(slide = 0){
            if(slide > this.activeTab){
                this.slideDirection = "left"
            } else {
                this.slideDirection = "right"
            }
            this.activeTab = slide
            this.resetTimer()
        },
        clearTimer(){
            if(this.timeout){
                clearTimeout(this.timeout)
            }
        },
        resetTimer(){
            this.clearTimer()
            this.timeout = setTimeout(this.nextSlide, this.carouselLoopTime)
        }
    },

    created(){
        this.timeout = null
    },

    mounted(){
        this.resetTimer()
        window.addEventListener('resize', ()=>{
            this.isVerticalCarousel = document.body.clientWidth <= 780
        })
        this.isVerticalCarousel = document.body.clientWidth <= 780
    },

    beforeDestroy() {
        this.clearTimer()
    },
}
</script>

<style scoped>
    .container {
        color : white;
        display : flex;
        flex-direction : column;
        align-items: center;
        width : 100%;
        height : 100%;
        overflow-y : auto;
        background-size : cover;
        background-position : center;
    }
    .content-wrapper{
        /** Relative Positioning Here is pretty important */ 
        position : absolute;
        top : calc(50% - 500px / 2);
        z-index : 99;
        display : flex;
        flex-direction: column;
        justify-content: center;
        width : 100%;
        height : 100%;
        overflow : hidden;
        transition : ease-in-out all .5s;
    }
    .content-wrapper.expanded{
        top : 0;
    }
    .navigation {
        position : absolute;
        top : calc(50% + 300px / 2);

        /* top : 400px; */
        height : 60px;
        background : var(--bg-color);
        width : 720px;
        align-self : center;
        border-radius : 0 0 4px 4px;
        z-index : 99;
        display : flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        background: linear-gradient(0deg,silver 0, var(--bg-color));
    }
    .quickems {
        position : absolute;
        display : flex;
        justify-content: center;
        align-items: center;
        top : 450px;
        height : 50px;
        width : 100%;
        z-index : 999;
        color : var(--text3)
    }
    .nav-tab {
        position : relative;
        z-index : 999;
        cursor : pointer;
        display : flex;
        justify-content: center;
        align-items: center;
        width : 100%;
        height : 100%;
        color: var(--text1);
    }

    .nav-tab:hover{
        background-color : rgba(0,0,0,0.1);
    }

    .footer {
        flex : 0;
        width : 100%;
        height : 300px;
        margin-top : 30px;
        min-height : 300px;
        z-index : -4;
        width : 720px;
    }

    @media only screen and (max-width : 780px){
        .navigation {
            width : 100%;
            top : initial;
            bottom : 0;
        }
        .content-wrapper {
            top : 0;
        }
    }
</style>

