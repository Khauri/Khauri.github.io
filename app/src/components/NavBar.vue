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
        min-height : 50px;
        display : flex;
        flex-direction: row;
        justify-content: space-between;
        align-items : center;
    }
    .nav-header {
        color : inherit;
        text-decoration-line : none;
    }
    .header, .links {
        padding : 0 20px;
    }
    .nav-link {
        color : inherit;
        opacity : 0.8;
        text-decoration-line: none;
        margin : 0 3px;
    }
    .nav-link:hover{
        opacity : 1;
    }
</style>
