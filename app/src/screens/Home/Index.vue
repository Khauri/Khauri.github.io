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
                :isExpanded="isExpanded" 
                :activeTabIndex="activeTab">
                <slide :tabLabel="`About`">
                    <about :isExpanded="isExpanded"/>
                </slide>
                <slide :tabLabel="`Projects`">
                    <projects :isExpanded="isExpanded"/>
                </slide>
                <slide :tabLabel="`About`">
                    <blog :isExpanded="isExpanded"/>
                </slide>
                <slide :tabLabel="`About`">
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
            <!-- <div class="footer">Hey! Look. Listen man...</div> -->
            <canvas-drip :width="720" :height="500"/>
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
    data(){
        return {
            isExpanded : false,
            navTabs : ['About', 'Projects', 'Blog', 'Contact'],
            activeTab : 0,
            carouselLoopTime : 5 * 1000
        }
    },

    methods : {
        nextSlide(){
            this.activeTab = ( this.activeTab + 1 ) % this.navTabs.length
            setTimeout(this.nextSlide, this.carouselLoopTime)
        },
        gotoSlide(slide){
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

