<template>
  <div>
    App
    <transition>
      <component :is=active.app>
      </component>
    </transition>
  </div>
</template>

<script>
import sqblLogin from './components/login.vue';

export default {
  name: 'app',
  components: {
    login: sqblLogin,
  },
  data () {
    return {
      active: {
        app: 'login'
      }
    }
  }
}
</script>

<style>

</style>
