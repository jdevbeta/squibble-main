<template>
  <div id="bgChanger"
    ><span @click=changeBackground class="sample" style="background: #e2e2e2;"></span
    ><span @click=changeBackground class="sample" style="background: linear-gradient(to top right, #f90, #fd0);"></span
    ><span @click=changeBackground class="sample" style="background: linear-gradient(to top right, #f50, #f90);"></span
    ><span @click=changeBackground class="sample" style="background: linear-gradient(to top right, #f20, #f50);"></span
    ><span @click=changeBackground class="sample" style="background: linear-gradient(to top right, #f02, #f05);"></span
    ><span @click=changeBackground class="sample" style="background: linear-gradient(to top right, #f05, #f09);"></span
    ><span @click=changeBackground class="sample" style="background: linear-gradient(to top right, #f09, #f0d);"></span
    ><span @click=changeBackground class="sample" style="background: linear-gradient(to top right, #90f, #d0f);"></span
    ><span @click=changeBackground class="sample" style="background: linear-gradient(to top right, #50f, #90f);"></span
    ><span @click=changeBackground class="sample" style="background: linear-gradient(to top right, #20f, #50f);"></span
    ><span @click=changeBackground class="sample" style="background: linear-gradient(to top right, #02f, #05f);"></span
    ><span @click=changeBackground class="sample" style="background: linear-gradient(to top right, #05f, #09f);"></span
    ><span @click=changeBackground class="sample" style="background: linear-gradient(to top right, #09f, #0df);"></span
    ><span @click=changeBackground class="sample" style="background: linear-gradient(to top right, #0f9, #0fd);"></span
    ><span @click=changeBackground class="sample" style="background: linear-gradient(to top right, #0f5, #0f9);"></span
    ><span @click=changeBackground class="sample" style="background: linear-gradient(to top right, #0f2, #0f5);"></span
    ><span @click=changeBackground class="sample" style="background: linear-gradient(to top right, #2f0, #5f0);"></span
    ><span @click=changeBackground class="sample" style="background: linear-gradient(to top right, #5f0, #9f0);"></span
    ><span @click=changeBackground class="sample" style="background: linear-gradient(to top right, #9f0, #df0);"></span
    ><span @click=changeBackground class="sample" style="background: linear-gradient(to top right, #999, #ddd);"></span
    ><span @click=changeBackground class="sample" style="background: linear-gradient(to top right, #555, #999);"></span
    ><span @click=changeBackground class="sample" style="background: linear-gradient(to top right, #222, #555);"></span
    ></div>
</template>

<script>
export default {
  name: 'bgPalette',
  data () {
    return {

    }
  },
  methods: {
    changeBackground(event){
      var target = event.target;
      document.body.style.background = target.style.background;
      console.log('Background Changed!');
    }
  }
}
</script>

<style scoped>
  div {
    display: block;

    margin: 0;
    padding: 0;
    height: 25px;

    text-align: center;

    opacity: 0.7;
  }

  div:hover {
    opacity: 1;
  }

  .sample {
    display: inline-block;

    box-sizing: border-box;
    width: 4.4vw;
    height: 100%;
    margin: 5px 0 0 0;
    padding: 0;
    
    border: 0.5px solid #000;
    box-shadow: inset 0px 0px 3px -1px #000;

    transition: transform 0.3s ease;
    cursor: pointer;
  }

  .sample:hover {
    transform: translateY(-3px);
  }
</style>
