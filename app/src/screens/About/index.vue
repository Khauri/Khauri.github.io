<template>
    <div class="about-container">
        <div class="about-header">
            <div class="header-img"></div>
            <div class="header-text text">
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
        <article class="about-content"></article>
    </div>
</template>

<script>
export default {
    name : "AboutPage",
    data(){
        return {}
    },
}
</script>

<style>
    .about-container {
        width : 100%;
        height : 100%;
        display : flex;
        flex-direction : column;
        justify-content: center;
        align-items: center;
        overflow-y : scroll;
        position : relative;
        background: url('../../assets/bg2.jpg');
        background-size : cover;
        background-repeat:   no-repeat;
        background-position : center center;
    }
    .about-header {
        display : flex;
        width : 720px;
        min-height : 400px;
    }
    .about-content{
        align-self:  center;
        max-width : 720px;
        height : 600px;
        background : blue;
    }
    .header-text {
        z-index : 1;
        text-align : left;
        max-width : 240px;
        margin : 80px;
    }
    .header-img{
        position : absolute;
        top : 0;
        left : 0;
        right : 0; 
        height : 400px;
        z-index : 0;
        background-image: url('../../assets/pic.jpg');
        background-size : contain;
        background-repeat:   no-repeat;
        background-position : center center;
    }
    .sm-icon {
        cursor : pointer;
        margin : 0 5px;
    }
</style>
