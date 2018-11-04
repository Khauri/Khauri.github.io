<!-- 
    Home Page. 
    The idea is to have a simple carousel where each section "previews" the next page.
    Clicking on the section itself launches a transition where the carousel grows in size
    until the next page is revealed. (Sort of a Maximizaiton Effect)
-->
<template>
    <div class="container">
        <div class="section-nav">
            <NavBar />
        </div>
        <div class="content-wrapper">
            <carousel :loop="true">
                <slide :tabLabel="`About`">
                    <about />
                </slide>
            </carousel>
            <div class="navigation">
                <div class="nav-tab">
                    About Me
                </div>
                <div class="nav-tab">
                    Projects
                </div>
                <div class="nav-tab">
                    Blog
                </div>
                <div class="nav-tab">
                    Contact
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { NavBar } from '@/components'
import about from '../About'
import slide from './Slide'
import carousel from './Carousel'
export default {
    components : { NavBar, slide, carousel, about }
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
        background : rgba(0,0,0,.12);
        /* background-image : url("../../assets/bg2.jpg"); */
        background-size : cover;
        background-position : center;
    }
    .content-wrapper{
        /** Relative Positioning Here is pretty important */ 
        position : relative;
        display : flex;
        flex-direction: column;
        justify-content: center;
        width : 100%;
        height : 100%;

    }
    .section-nav {
        flex : 0;
        width : 720px;
    }
    
    .navigation {
        position : absolute;
        top : 400px;
        height : 60px;
        width : 100%;
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

    .footer {
        flex : 0;
        width : 100%;
        height : 300px;
        margin-top : 30px;
        background : rgba(0,0,0,.9);
        min-height : 300px;
    }
</style>

