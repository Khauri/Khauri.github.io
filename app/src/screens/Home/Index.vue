<!-- 
    Home Page. 
    The idea is to have a simple carousel where each section "previews" the next page.
    Clicking on the section itself launches a transition where the carousel grows in size
    until the next page is revealed. (Sort of a Maximizaiton Effect)
-->
<template>
    <div class="container">
        <div class="content-wrapper">
            <carousel 
                :loop="true"
                :slideDirection="slideDirection"
                :isExpanded="isExpanded" 
                :activeTabIndex="activeTab">
                <slide :tabLabel="`about`">
                    <about :isExpanded="isExpanded"/>
                </slide>
                <slide :tabLabel="`lab`">
                    <projects :isExpanded="isExpanded"/>
                </slide>
                <slide :tabLabel="`blog`">
                    <blog :isExpanded="isExpanded"/>
                </slide>
                <slide :tabLabel="`contact`">
                    <contact :isExpanded="isExpanded"/>
                </slide>
            </carousel>
            <div class="navigation" v-if="!isExpanded">
                <div 
                    class="nav-tab" 
                    v-for="(tab, index) in navTabs" 
                    :key="`tab-${index}`"
                    @click="isExpanded = true"
                    @mouseover="gotoSlide(index)">
                    {{tab}}
                </div>
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
            carouselLoopTime : 5 * 1000
        }
    },

    methods : {
        toggleExpansion(page){
            // TODO: Remove transition animations and just jump
            this.isExpanded = !this.isExpanded
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
        position : relative;
        z-index : 99;
        display : flex;
        flex-direction: column;
        justify-content: center;
        width : 100%;
        height : 100%;
        overflow : hidden;

    }
    
    .navigation {
        position : absolute;
        top : 400px;
        height : 60px;
        background : #35ce8d;
        width : 720px;
        align-self : center;
        border-radius : 0 0 4px 4px;
        z-index : -1;
        display : flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
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
    }

    .nav-tab:hover{
        background-color : rgba(0,0,0,0.05);
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
</style>

