<template>
  <div>
    <span @click=alignSidebar>
      <icon name="sidebar" dims="25,25"></icon>
    </span><span @click=alignLayers>
      <icon name="layers" dims="25,25"></icon>
    </span><span @click=alignLayout>  
      <icon name="layout" dims="25,25"></icon>
    </span>
  </div>
</template>

<script>
export default {
  name: 'windowTools',
  data () {
    return {
      screen: window.screen
    }
  },
  methods:{
    alignSidebar(){
      console.log('Fullscreen Mode Enabled!');
      window.resizeTo(300,this.screen.availHeight);
      window.moveTo(0,0);
    },
    alignLayers(){

    },
    alignLayout(){
      console.log('Squibble Windowed Mode!');
      var width = this.screen.availWidth/4;
      var height = this.screen.availHeight/5*4;
      window.resizeTo(width,height);
      window.moveTo(0,0);
      window.moveBy(10,10);
    }
  }
}
</script>

<style scoped>
  svg {
    fill: #333;
    cursor: pointer;
  }
</style>
