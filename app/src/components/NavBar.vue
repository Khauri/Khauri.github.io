<template>
    <div class="nav-root">
        <div class="header">
            <router-link to="/" class="nav-header">
                <h3>KM</h3>
            </router-link>
        </div>
        <div class="links">
            <router-link class="nav-link" to="/about-me">
                ABOUT
            </router-link>
            <router-link class="nav-link" to="/projects">
                PROJECTS
            </router-link>
            <router-link class="nav-link" to="/blog">
                BLOG
            </router-link>
            <router-link class="nav-link" to="/contact">
                CONTACT
            </router-link>
            <!-- <a href="#" class="nav-link" @click="signOut">Sign Out</a> -->
        </div>
        
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name : 'navbar',
    methods : {
        async signOut(){
            await firebase.auth().signOut()
            this.$router.replace('/')
        }
    }
}
</script>

<style scoped> 
    * {
        margin : 0;
    }
    .nav-root {
        padding : 20px 0px;
        color : rgba(0,0,0,.8);
        display : flex;
        flex-direction: row;
        justify-content: space-between;
        align-items : center;
    }
    .nav-header {
        color : inherit;
        text-decoration-line : none;
    }
    .nav-link {
        color : inherit;
        text-decoration-line: none;
        margin : 0 3px;
    }
    .nav-link:hover{
        color : #6BA292;
    }
</style>
