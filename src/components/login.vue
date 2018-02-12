<template>
  <div>
    <component :is=active.form 
      v-on:switchForm=changeForm>
    </component>
  </div>
</template>

<script>
import signIn from './signIn.vue';
import register from './register.vue';

export default {
  name: 'sqblLogin',
  components: {
    signIn: signIn,
    register: register,
  },
  methods: {
    changeForm(toForm){
        console.log(this);
        this.active.form = toForm;
      return this;
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

<style scoped>

</style>
