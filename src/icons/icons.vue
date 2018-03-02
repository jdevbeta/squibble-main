<template>
    <svg :style="iconDimensions" class="sqbl-icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        <use :xlink:href='svgPath'></use>
    </svg>
</template>
<script>
export default {
  name: 'icons',
  props: {
      name:{
          type: String,
          default: 'activity'
      },
      dims:{
          type: Number | String,
          default: '50,50'
      },
      from:{
          type: String,
          default: 'solid'
      },
    },
  computed: {
    svgPath: function(){
        return './src/icons/sprite.svg#'+this.name;
    },
    iconDimensions: function(){
        if(typeof this.dims == 'string' || typeof this.dims == 'number'){
            var dimension = this.dims.split(',');
            var heightDim = dimension[1] || dimension[0];
            console.log('icon| '+this.name.toUpperCase()+'  x'+this.dims);
             return {
                width: dimension[0]+"px",
                height: heightDim+"px"
            }
        }
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
    span, img {
        float: left;
    }
    span {
        display: inline;
        box-sizing: border-box;
    }
    img {
        box-sizing: border-box;
        height: 100%;
        width: 100%;
    }
    object {
        fill: currentColor;
    }
</style>