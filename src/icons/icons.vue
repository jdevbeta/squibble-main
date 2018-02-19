<template>
    <object type="image/svg+xml" 
        :data=svgPath
        class="icon"
        :style=iconDimensions>
    </object>
</template>
<script>
export default {
  name: 'icons',
  props: {
      name:{
          type: String,
          default: 'grid'
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
        return './src/icons/'+this.name+'.svg';
    },
    iconDimensions: function(){
        console.log(typeof this.dims+'|'+this.dims)
        if(typeof this.dims === 'string'){
            var dimension = this.dims.split(',');
            var heightDim = dimension[1] || dimension[0];
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
    svg {
        fill: currentColor;
    }
</style>