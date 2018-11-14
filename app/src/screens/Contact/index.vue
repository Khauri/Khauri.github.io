<template>
    <page 
        :img="'contact.png'"
        :isExpanded="isExpanded"
        class="container">
        <!-- Header -->
        <div 
            slot="header">
            <h1 class="header-title">Contact Me</h1>
            <p>kmcclain@email.wm.edu</p>
            <p>khauri7five7@gmail.com</p>
            <div class="header-social">
                <fa class="sm-icon" :icon="['fab','github']"/>
                <fa class="sm-icon" :icon="['fab','twitter']"/>
                <fa class="sm-icon" :icon="['fab','facebook']"/>
                <fa class="sm-icon" :icon="['fab','instagram']"/>
            </div>
        </div>
        <!-- Body -->
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

<style>
    .container {
        color : white;
        /* background: url('../../assets/bg2.jpg'); */
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
    .sm-icon {
        cursor : pointer;
        margin : 0 5px;
    }
</style>
