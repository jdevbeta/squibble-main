<template>
  <div>
    <transition
      mode="out-in"
      enter-active-class="animated flipInY"
      leave-active-class="animated flipOutY"
    >
    <component :is=active.form
      v-on:switchForm=changeForm
      v-on:triggerSubmission=submitLogin
      class="sqblForm"
    >
    </component>
    </transition>
  </div>
</template>

<script>
import signIn from './signIn.vue';
import sqblRegister from './register.vue';

export default {
  name: 'sqblLogin',
  components: {
    signIn: signIn,
    register: sqblRegister
  },
  methods: {
    changeForm(toForm){
        this.active.form = toForm;
      return this;
    },
    submitLogin(){
      this.$emit('switchApp', 'navigation');
    }
  },
  data () {
    return {
      active: {
        form: 'signIn',
      }
    }
  }
}
</script>

<style>
  .sqblForm {
    display: inline-block;
    position: relative;
    margin-top: 50px;
    width: 70%;
    min-width: 250px;
    height: auto;
    border: 1px solid #333;
  }

  .sqblForm button {
    display: block;
    float: right;
    
    padding: 10px;
    border-top: 0px solid #333;
    border-right: 0px solid #333;
    border-bottom: 1px solid #333;
    border-left: 1px solid #333;
    outline: none;

    font-size: 18px;
    color: #777;

    cursor: pointer;

    transition: all 0.5s ease;
  }

  .sqblForm button:hover {
    background: #333;
    color: #ccc;
  }
  
  .sqblForm h1 {
    display: inline-block;
    margin: 30px;
  }

  .sqblForm label {
    display: block;
    width: auto;

    margin: 0 15px;
    font-size: 18px;
    text-align: left;
  }

  .sqblForm input {
    display: block;
    width: 90%;

    box-sizing: border-box;
    margin: 0 5%;
    margin-bottom: 10px;
    padding: 5px;

    text-align: center;
  }

  .sqblForm input:focus {
    transform: scale(1.2);
  }

  .sqblForm input[type='submit'] {
    width: 80%;
    margin: 5% 10%;
  }
</style>