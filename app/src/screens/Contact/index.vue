<template>
    <page 
        :img="'contact.png'"
        :isExpanded="isExpanded"
        class="container">
        <!-- Header -->
        <div slot="header">
            <h1 class="header-title">Contact Me</h1>
            <a class="clickable" href="mailto://khauri7five7@gmail.com">khauri7five7@gmail.com</a>
            <a class="clickable" href="tel://7579320574">(757) 932-0574</a>
            <div class="header-social">
                <a class="clickable" href="https://github.com/khauri"> <fa class="sm-icon" :icon="['fab','github']"/> </a>
                <a class="clickable" href="https://github.com/khauri"><fa class="sm-icon" :icon="['fab','twitter']"/></a>
                <a class="clickable" href="https://github.com/khauri"><fa class="sm-icon" :icon="['fab','facebook']"/></a>
                <a class="clickable" href="https://github.com/khauri"><fa class="sm-icon" :icon="['fab','instagram']"/></a>
            </div>
        </div>
        <!-- Body -->
        <div slot="body">
            <h1>Plz Hire Me Thanks.</h1>
            <p>I spend a lot of time on this website to impress you.</p>
            <p>Yes, specifically you, Josh.</p>
        </div>
        <!-- Footer(?) -->
    </page>
</template>

<script>
export default {
    name : "Contact",
    props : {
        isExpanded : {
            default : true,
            type : Boolean
        }
    },
    data(){
        return {}
    },
}
</script>

<style scoped>
    .container {
        color : white;
        /* background: url('../../assets/bg2.jpg'); */
        background-size : cover;
        background-repeat:   no-repeat;
        background-position : center center;
    }
    .header { 
        
    }
    .about-content{
        align-self:  center;
        max-width : 720px;
        height : 600px;
        background : blue;
    }
    .clickable {
        margin : 10px;
        color : white;
        cursor : pointer;
        text-decoration-style : none;
        text-decoration-line: none;
    }
    .sm-icon {
        cursor : pointer;
        margin : 0 5px;
    }
</style>
