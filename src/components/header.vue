<template>
  <header>
    <menuIcon></menuIcon>
    <input type="text" v-bind:value="fileInfo.title"/>
    <div class="tools">
      <icon dims="30,30" name="box"></icon>
      <icon dims="30,30" name="save"></icon>
      <icon dims="30,30" name="layout"></icon>
      <icon dims="30,30" name="package"></icon>
      <icon dims="30,30" name="home"></icon>
    </div>
  </header>
</template>

<script>
import menuIcon from './menuIcon.vue'

export default {
  name: 'sqblHeader',
  components: {
    menuIcon: menuIcon
  },
  props: [
    'fileInfo'
  ],
  data () {
    return {

    }
  }
}

/*
  rgba(255, 0, 0, 1) 0%,
  rgba(255, 255, 0, 1) 15%,
  rgba(0, 255, 0, 1) 30%,
  rgba(0, 255, 255, 1) 50%,
  rgba(0, 0, 255, 1) 65%,
  rgba(255, 0, 255, 1) 80%,
  rgba(255, 0, 0, 1) 100%)
*/
</script>

<style scoped>
  header {
    display: block;
    position: relative;
    width: 100vw;
    height: 40px;

    box-sizing: border-box;
    margin: 0px;
    padding: 5px 0px;
    background: rgba(0,0,0,0.5);

    overflow: hidden;
  }

  header .sqbl-icon {
    display: inline-block;
    width: auto;
    height: auto;
    margin: 0;
    padding: 0;

    fill: #55f;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  header .sqbl-icon:hover {
    fill: #f55;
    stroke-width: 2px;
    filter: drop-shadow(0 0 2px #fff);
  }

  header input {
    display: block;
    float: left;

    margin: auto;
    padding: 0;
    width: 50%;
    min-width: 180px;
    height: 100%;

    background: rgba(255,255,255,0.5);
    border: none;
    outline: none;

    font-size: 18px;
    font-family: 'Lobster Two';
    text-align: center;
  }

</style>
