<template>
    <page class="about-container">
        <!-- Header -->
        <page-header :img='"pic.jpg"' :isExpanded="isExpanded">
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
        </page-header>
        <!-- Body -->
        <page-body>
            <h1>About Me</h1>
            <h3>(kah-HAH-ree muh-KLAYN)</h3>
            <p>
                My name is Khauri McClain. I graduated from <a href="wm.edu">The College of William &amp; Mary</a>
                with a bachelor's degree in computer science in 2018.
            </p>
            <h3> FAQ's </h3>
            <b><i>Q: Nice Name. What's It Mean?</i></b>
            <p>It doesn't mean anything.</p>

        </page-body>
        <!-- Footer(?) -->
    </page>
</template>

<script>
import {Page, PageHeader, PageBody} from '@/components'
export default {
    name : "AboutPage",
    props : {
        isExpanded : {
            default : true,
            type : Boolean
        }
    },
    components : { Page, PageHeader, PageBody },
    data(){
        return {}
    },
}
</script>

<style>
    .about-container {
        color : white;
        background: url('../../assets/bg2.jpg');
        background-size : cover;
        background-repeat:   no-repeat;
        background-position : center center;
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
        margin : auto 80px;
    }
    .sm-icon {
        cursor : pointer;
        margin : 0 5px;
    }
</style>
