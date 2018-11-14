<template>
    <div class="container">
        <div class="box">
            <fa size="6x" class="gh-icon" :icon="['fab','github']"/>
            <h2>Sign In With Github</h2>
            <p>To continue to the dashboard sign in with Github</p>
            <div class="sign-in-btn" @click="signInWithGithub">Sign In</div>
            <small>
                Hello lost travelers and hackers. If you've ended up here by
                mistake, press <router-link to="/">here</router-link> once 
                you're done reflecting on your life.
            </small>
        </div>
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

<style scoped>
.container {
    display : flex;
    width : 100%;
    height : 100%;
    justify-content: center;
    align-items: center;
}
.box {
    border-radius : 0 8px;
    background : white;
    padding : 15px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    width : 400px;
    height : 400px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content: space-evenly;
}
.sign-in-btn {
    cursor : pointer;
    width : 100%;
    padding : 5px 0;
    border : 1px solid rgba(0,0,0,0.12);
    background : white;
    border-radius : 4px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition : ease-in-out all .2s;
}
.sign-in-btn:hover {
    background : white;
    transform: scale(1.01);
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
</style>
