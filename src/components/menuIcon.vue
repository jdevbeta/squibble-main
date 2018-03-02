<template>
  <div>
  <span @click=toggleMenu>
    <svg v-bind:class=this.menuclass viewBox="0 0 24 24" id="menu" width="30px" height="30px">
      <line class="line1" x1="3" y1="12" x2="21" y2="12"></line>
      <line class="line2" x1="3" y1="6" x2="21" y2="6"></line>
      <line class="line3" x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  </span>
  <transition
      mode="out-in"
      enter-active-class="animated bounceInDown"
      leave-active-class="animated bounceOutLeft"
  >
  <ul v-show=this.active>

  </ul>
  </transition>
  </div>
</template>

<script>
export default {
  name: 'menuIcon',
  methods: {
    toggleMenu: function(){
      console.log("Menu heard a click...");
      console.log("Who's there?");
      this.active = !this.active;
      return this.active;
    },
  },
  computed: {
    menuclass: function(){
      if(this.active == true){
        this.$emit('openmenu');
        return "active";
      } else {
        this.$emit('closemenu');
        return false;
      }
    },
  },
  data () {
    return {
      active: false,
    }
  }
}
</script>

<style scoped>

span {
  display: block;
  float: left;
  margin: 0 10px;
  stroke-width: 3px;
  stroke: #fff;

  cursor: pointer;
}

span svg line {
  transition: transform 1s ease, opacity 0.5s linear;
}

.active .line1 {
  transform-origin: 50% 50%;
  transform: scale(0);
  opacity: 0;
}

.active .line2 {
  transform-origin: 50% 50%;
  transform: translateX(-5px) translateY(4px) rotate(-315deg);
}

.active .line3 {
  transform-origin: 50% 50%;
  transform: translateX(-5px) translateY(-5px) rotate(315deg);
}

ul {
  display: block;
  position: fixed;
  top: 40px;
  left: 0px;
  width: 200px;
  min-height: 100px;
  margin: 0;
  padding: 0;
  background: rgba(0,0,0,0.7);
  list-style: none;
  z-index: 1;
}

</style>
