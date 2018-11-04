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
        position : relative;
        background: url('../../assets/bg2.jpg');
        background-size : cover;
        background-repeat:   no-repeat;
        background-position : center center;
    }
    .about-header {
        display : flex;
        flex-direction : column;
        height : 400px;
    }
    .subsection { 
        z-index : 1;
    }
    .header-text {
        z-index : 1;
        text-align : left;
        max-width : 240px;
        padding-left : 25%;
        padding-top : 80px;
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
