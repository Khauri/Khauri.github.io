<!-- 
    Home Page
-->
<template>
    <div class="container">
        <div class="section-nav">
            <NavBar />
        </div>
        
        <div class="section header">
            <div class="subsection header-text text">
                <h1 class="header-title">Khauri McClain</h1>
                <h3>Software Engineer. Creative Type.</h3>
                <div class="header-social">
                    <fa class="sm-icon" :icon="['fab','github']"/>
                    <fa class="sm-icon" :icon="['fab','twitter']"/>
                    <fa class="sm-icon" :icon="['fab','facebook']"/>
                    <fa class="sm-icon" :icon="['fab','instagram']"/>
                </div>
            </div>
        </div>
        <div class="section about">
            <div class="subsection">
                <div class="subsection text about-text">
                    <h1> About Me... </h1>
                    <div class="about-section">
                        <fa class="sm-icon" :icon="['fas','graduation-cap']"/>
                        <p>B.S. Computer Science from The College of William And Mary</p>
                    </div>
                    <div class="about-section">
                        <fa class="sm-icon" :icon="['fas','asterisk']"/>
                        <p>Jack of all trades and a master of most.</p>
                    </div>
                    <div class="about-section">
                        <fa class="sm-icon" :icon="['fas','hand-rock']"/>
                        <p>Black/African American (Hire me for Diversity)</p>
                    </div>
                    <p>See more...</p>
                </div>
            </div>
            <div class="subsection" style="background:#35CE8D">
                <img class="about-img" src="../../assets/bg2.jpg"/>
            </div>
        </div>
         <div class="section projects">
            <div class="subsection"></div>
            <div class="subsection filled">
                <h1>projects</h1>
            </div>
        </div>
        <div class="footer"></div>
    </div>
</template>

<script>
import { NavBar } from '@/components'
export default {
    components : { NavBar }
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
    .section-nav {
        max-width : 720px;
        width : 720px;
    }
    .section {
        border-radius : 4px;
        position : relative;
        display : flex;
        flex-direction : row;
        min-height : 400px;
        max-width : 720px;
        width : 720px;
        margin-bottom : 20px;
        background : rgba(33,29,28,.85);
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }
    .subsection {
        flex : 1;
        padding : 10;
        overflow : hidden;
    }
    .filled {
        font-size : 2.5em;
        color : white;
        cursor : pointer;
        display : flex; 
        justify-content : center;
        align-items : center;
        opacity : 0;
        position : absolute;
        width : 100%;
        height : 100%;
        background : #35CE8D;
        transition : ease-in-out .5s opacity;

    }
    .section:hover > .filled {
        opacity : 0.5;
        transition : ease-in-out .3s opacity;
    }
    .header {
        background-image: url('../../assets/pic.jpg');
        background-size : contain;
        background-repeat:   no-repeat;
        background-position : center center;
    }
    .projects {
        background-image: url('../../assets/pic2.jpg');
        background-size : contain;
        background-repeat:   no-repeat;
        background-position : center center;
    }
    .header-text {
        padding-left : 80px;
        max-width : 240px;
    }
    .text {
        text-align : left;
        display : flex;
        flex-direction: column;
        justify-content: center;
        align-items : flex-start;
    }
    .header-text > .header-title {
        font-size : 2.5em;
        margin : 0;
    }
    .header-text > .header-social {
        display : flex;
        flex-direction : row;
    }
    .about-text {
        padding : 10px 60px;
    }
    .about-text div {
        margin : 10px 0;
    }
    .about-text p {
        margin : 0 8px;
    }
    .about-section {
        display : flex;
        flex-direction: row;
    }
    .about-img {
        width : 100%;
        height : 100%;
    }
    .sm-icon {
        cursor : pointer;
        margin : 0 5px;
    }
    .footer {
        width : 100%;
        margin-top : 30px;
        background : rgba(0,0,0,.9);
        min-height : 300px;
    }
</style>

