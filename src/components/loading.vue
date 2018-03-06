<template>
<div>
  <div class="la-ball-atom la-3x">
      <div class="" style="background: linear-gradient(to top right, #111, #444); filter: drop-shadow(5px -5px 10px #ccc);"></div>
      <div style="color: #f9f; filter: drop-shadow(0 0 7px #111);"></div>
      <div style="color: #9ff; filter: drop-shadow(0 0 7px #111);"></div>
      <div style="color: #ff9; filter: drop-shadow(0 0 7px #111);"></div>
  </div>
  <div class="container">
  <div class="progress">
    <div class="progress-bar" v-bind:style="{width: load.percent+'%'}"></div>
  </div>
</div>

</div>
</template>
<script>
export default {
  name: 'loading',
  computed: {

  },
  created(){
    console.log("Loading Initiated.");
    setTimeout(this.beginLoad, 50);
    return false;
  },
  data () {
    return {
      load: {
        percent: '5',
        delay: '100',
        finalDelay: '700'
      },
      defaultApp: 'navigation',
      url: null,
      urlData: null,
      app: null,
      mem: null
    }
  },
  methods: {
    updateProgress(i){
      this.load.percent = i;
    },
    beginLoad(){
        this.load.percent = 10;
        this.url = location;
        console.log('URL Data Found: '+this.url);
        this.urlData = location.search.substr(1).split('&');
        this.app = this.urlData[0] || this.defaultApp;
        console.log('Preparing to Open: ' +this.app.toUpperCase());
        this.mem = this.urlData[1] || null;
        console.log('Memory Assigned: '+this.mem);
        this.checkLogin();
    },
    checkLogin(){
        this.load.percent = 20;
        
        if(true){
            setTimeout(
                this.authenticateSession,
                this.load.delay
            );
        }
    },
    authenticateSession(){
        this.load.percent = 30;
        if(true){
            setTimeout(
                this.retriveData,
                this.load.delay
            );
        }
    },
    retriveData(){
        this.load.percent = 50;
        console.log('Retrieving Local Data.');
        if(true){
            console.log('Data Located.')
            setTimeout(
                this.cleaningUp,
                this.load.delay
            );
        }
    },
    cleaningUp(){
        this.load.percent = 90;
        if(true){
            setTimeout(
                this.loadingInterface,
                this.load.delay
            );
        }
        console.log('Cleaning Up any Final Steps.')
    },
    loadingInterface(){
        this.load.percent = 100;
        console.log('App Loading, Complete.');
        setTimeout(
            this.openApp, 
            this.load.finalDelay
        );
    },
    openApp(){
        this.$emit('switchApp', this.app);
    }
  }
}
</script>
<style scoped>

.la-ball-atom,
  .la-ball-atom > div {
    position: relative;
    box-sizing: border-box;
}

.la-ball-atom {
    display: block;
    top: 25vh;
    margin: auto;
    padding: 0;
    font-size: 0;
    color: #fff;
}

.la-ball-atom.la-dark {
    color: #333;
}

.la-ball-atom > div {
    display: inline-block;
    float: none;
    background-color: currentColor;
    border: 0 solid currentColor;
}

.la-ball-atom {
    width: 32px;
    height: 32px;
}

.la-ball-atom > div:nth-child(1) {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    width: 60%;
    height: 60%;
    background: #aaa;
    border-radius: 100%;
    transform: translate(-50%, -50%);
    animation: ball-atom-shrink 4.5s infinite linear;
}

.la-ball-atom > div:not(:nth-child(1)) {
    position: absolute;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background: none;
    animation: ball-atom-zindex 1.5s 0s infinite steps(2, end);
}

.la-ball-atom > div:not(:nth-child(1)):before {
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    margin-top: -5px;
    margin-left: -5px;
    content: "";
    background: currentColor;
    border-radius: 50%;
    opacity: .75;
    animation: ball-atom-position 1.5s 0s infinite ease, ball-atom-size 1.5s 0s infinite ease;
}

.la-ball-atom > div:nth-child(2) {
            animation-delay: .75s;
}

.la-ball-atom > div:nth-child(2):before {
            animation-delay: 0s, -1.125s;
}

.la-ball-atom > div:nth-child(3) {
            transform: rotate(120deg);
            animation-delay: -.25s;
}

.la-ball-atom > div:nth-child(3):before {
            animation-delay: -1s, -.75s;
}

.la-ball-atom > div:nth-child(4) {
            transform: rotate(240deg);
            animation-delay: .25s;
}

.la-ball-atom > div:nth-child(4):before {
            animation-delay: -.5s, -.125s;
}

.la-ball-atom.la-sm {
    width: 16px;
    height: 16px;
}

.la-ball-atom.la-sm > div:not(:nth-child(1)):before {
    width: 4px;
    height: 4px;
    margin-top: -2px;
    margin-left: -2px;
}

.la-ball-atom.la-2x {
    width: 64px;
    height: 64px;
}

.la-ball-atom.la-2x > div:not(:nth-child(1)):before {
    width: 20px;
    height: 20px;
    margin-top: -10px;
    margin-left: -10px;
}

.la-ball-atom.la-3x {
    width: 96px;
    height: 96px;
}

.la-ball-atom.la-3x > div:not(:nth-child(1)):before {
    width: 30px;
    height: 30px;
    margin-top: -15px;
    margin-left: -15px;
}

@keyframes ball-atom-position {
    50% {
        top: 100%;
        left: 100%;
    }
}

@keyframes ball-atom-size {
    50% {
      transform: scale(.5, .5);
    }
}

@keyframes ball-atom-zindex {
    50% {
        z-index: 10;
    }
}

@keyframes ball-atom-shrink {
    50% {
      transform: translate(-50%, -50%) scale(.8, .8);
    }
}


.container {
  display: block;
  position: fixed;
  top: 75vh;
  left: 25vw;
  margin: auto;
  width: 50vw;
  text-align: center;
}

.container .progress {
  margin: 0 auto;
  width: 50vw;
}

.progress {
  padding: 2px;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08);
}

.progress-bar {
  height: 10px;
  border-radius: 4px;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.05));
  transition: 0.4s linear;
  transition-property: width, background-color;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.25), inset 0 1px rgba(255, 255, 255, 0.1);
}

#five:checked ~ .progress > .progress-bar {
  width: 5%;
  background-color: #f63a0f;
}

</style>
