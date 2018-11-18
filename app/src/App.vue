<template>
    <div id="app">
        <div class="root">
            <tech-scribble
                v-if="dim.shouldShow"
                class="tech-scribble"
                traceColor="rgba(0,0,0,0.12)"
                traceFillColor="transparent"
                :restartAfter="loopTime"
                :width="dim.width" 
                :height="dim.height"/>
            <div class="router-content">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    data(){
        return {
            loopTime : 8 * 1000,
            dim : {}
        }
    },
    methods:{
        calculateDimension(){
            this.dim = {
                // Don't bother rendering on smaller windows
                shouldShow : document.body.clientWidth > 780,
                width : document.body.clientWidth + 30,
                height : document.body.clientHeight + 30
            }
        }
    },
    mounted(){
        window.addEventListener('resize', this.calculateDimension)
        this.calculateDimension()
    }
}
</script>

<style>
#app, body, html {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color : var(--text0);
  margin : 0;
  padding : 0;
  width : 100%;
  height : 100%;
  overflow : hidden;
}

:root {
    --bg-color: #f0f0f0;
    --bg-color-inv: #000;
    --text0: rgba(0,0,0,.8);
    --text1: rgba(0,0,0,.66);
    --text3: rgba(0,0,0,.38);
    --text-inv0: #fff;
    --text-inv1: hsla(0,0%,100%,.7);
    --text-inv2: hsla(0,0%,100%,.5);
    --scheme0: #e42e00;
    --scheme1: #fffc00;
    --scheme2: #6b006c;
}

.root {
    width : 100%;
    height : 100%;
    overflow : hidden;
    display : flex;
    flex-direction : column;
    align-items: center;
    background : var(--bg-color);
}

.tech-scribble {
    position: absolute;
    top: -15px;
    left: -15px;
    z-index: 8;
}

.router-content {
    position : relative;
    width : 100%;
    height : 100%;
}
</style>
