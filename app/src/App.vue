<template>
  <div id="app">
    <div class="root">
      <div class="section-nav">
          <NavBar />
      </div>
      <div class="router-content">
        <transition name="fade">
          <router-view/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import { NavBar } from '@/components'
  export default {
    name: 'App',
    components : {NavBar}
  }
</script>

<style>
  #app, body, html {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin : 0;
    padding : 0;
    width : 100%;
    height : 100%;
  }
  .section-nav {
    width : 720px;
  }
  .root {
    width : 100%;
    height : 100%;
    overflow : hidden;
    display : flex;
    flex-direction : column;
    align-items: center;
    background : rgba(0,0,0,.12);
  }
  .router-content {
    position : relative;
    width : 100%;
    height : 100%;
  }
  /** Quick n' Dirty Route Transitions */ 
  .fade-enter {
    opacity : 0;
  }
  .fade-enter-to {
    opacity : 1;
  }
  .fade-leave {
    opacity : 1;
  }
  .fade-leave-to {
    opacity : 0;
  }
  .fade-enter-active, .fade-leave-active {
    position : absolute;
    top : 0;
    left : 0;
    right : 0;
    bottom : 0;
    transition : ease-in-out all .5s;
  }
</style>
