<template>
    <div class="container">
        <a href="#" @click="signInWithGithub">Sign In</a>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name : "login",
    data : function(){
        return {

        }
    },

    beforeCreate() {
        if(firebase.auth().currentUser){
            this.$router.replace('/dashboard')
        }
    },
    
    methods : {
        async signInWithGithub(){
            let provider = new firebase.auth.GithubAuthProvider();
            try {
                const result = await firebase.auth().signInWithPopup(provider)
                this.$router.replace('/dashboard')
            } catch(error) {
                console.log(error)
            }
        }
    },
}
</script>

<style>

</style>
