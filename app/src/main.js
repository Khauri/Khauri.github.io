// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import firebase from 'firebase'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGraduationCap, faHandRock, faAsterisk } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import * as components from '@/components'

import App from './App'
import router from './router'

Vue.config.productionTip = false
// Font Awesome Related Stuff
library.add(
  // Brand icons
  faFacebook, 
  faGithub, 
  faTwitter, 
  faInstagram,
  // Other stuff 
  faGraduationCap,
  faHandRock,
  faAsterisk
)
Vue.component('fa', FontAwesomeIcon)
// For registering global components automatically
const globalComponents = {}
for(let key in components){
  let component = components[key]
  if(component.name){
    Vue.component(component.name, component)
    globalComponents[name] = component
  }
}

// TODO: Load this from a firebase_config.json
const config = {
  apiKey: "AIzaSyAFyr4VHDb_p-WxE7Ts07prh4v6g4sv-us",
  authDomain: "khaurim-resume-portfolio.firebaseapp.com",
  databaseURL: "https://khaurim-resume-portfolio.firebaseio.com",
  projectId: "khaurim-resume-portfolio",
  storageBucket: "khaurim-resume-portfolio.appspot.com",
  messagingSenderId: "308996037513"
}

firebase.initializeApp(config)
// Silence dumb warning about timestamps
firebase.firestore().settings({timestampsInSnapshots:true});
// Ensure firebase auth state is ready before creating the rest of the application
let unsub = firebase.auth().onAuthStateChanged( (user) => {
  new Vue({
    el: '#app',
    router,
    components: { App, ...globalComponents },
    template: '<App/>'
  })
  unsub()
})

/* eslint-disable no-new */

