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
    background: rgba(255,255,255,0.2);
    box-shadow: -10px 0 20px -10px #111,
      10px 0 20px -10px #111;
    
    font-family: 'BenchNine', Helvetica;
  }

  .sqblForm div {
    display: block;
    position: relative;
  }

  .sqblForm div div {
    display: block;
    position: relative;
  }

  .sqblForm button {
    display: block;
    position: relative;
    margin-left: auto;
    padding: 5px 20px;
    border-top: 0px solid #333;
    border-right: 0px solid #333;
    border-bottom: 1px solid #333;
    border-left: 1px solid #333;
    outline: none;

    border-radius: 0 0 0 5px;

    background: rgba(0,0,0,0.5);
    color: #999;

    font-family: BenchNine;
    font-size: 20px;
    font-weight: bold;

    cursor: pointer;

    transition: all 0.5s ease;
  }

  .sqblForm button:hover {
    background: #333;
    color: #ccc;
  }
  
  .sqblForm h1 {
    display: block;
    margin: 0px;
    margin-top: 20px;

    font-family: 'Lobster Two', Helvetica;
    font-size: 45px;
    font-weight: 300;
    text-align: center;
    text-shadow: 1px 2px 0 rgba(255,255,255,0.2),
      2px 3px 3px rgba(0,0,0,0.5);
    color: #ccc;
    user-select: none;
  }

  .sqblForm label {
    display: block;
    position: absolute;
    top: 10px;
    left: 0;
    width: 100%;

    margin: 0;
    font-size: 18px;
    text-align: center;
    color: #222;

    transition: all 0.5s ease;
    cursor: text;
    user-select: none;
  }

  .sqblForm input[type='text'],
  .sqblForm input[type='password'] {
    display: block;
    width: 90%;

    box-sizing: border-box;
    margin: 20px 5% 0 5%;
    margin-bottom: 10px;
    padding: 5px;
    padding-bottom: 0px;

    background: rgba(0,0,0,0);
    border: 0px solid #000;
    border-bottom: 1px solid #111;
    outline: none;

    font-size: 25px;
    text-align: center;
    transition: all 0.5s ease;
    transform: scale(0.8);
  }

  /*
  .sqblForm input:-webkit-autofill {
    border: 0px solid #000;
    box-shadow: inset 0 0 0 30px #333;
    -webkit-text-fill-color: #777;
  }
  */

  .sqblForm input:focus {
    transform: scale(1);
  }

  .sqblForm input:focus ~ label,
  .sqblForm input:valid ~ label{
    transform: translateY(-27px) translateX(-70px) scale(0.9);
  }

  .sqblForm input[type='submit'] {
    width: 80%;
    margin: 5% 10%;
  }
</style>