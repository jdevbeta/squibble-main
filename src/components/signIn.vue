<template>
  <div>
    <div>
    <button @click="$emit('switchForm', 'register')">
        <span>New User?</span>
    </button>
      <form @submit.prevent="$emit('triggerSubmission')" ref="form">
        <h1>Sign In</h1>
        <div>
          <input 
            type="text"
            id="inputUser"
            title="Use Letters A - Z and Numbers 0 - 9."
            required
          />
          <label for="inputUser"> Username </label>
        </div>
        <div>
          <input 
            type="password"
            id="inputPass"
            title="Password must have a Number and a Letter. Minimum of 4 Characters."
            required
          />
          <label for="inputPass"> Password </label>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>


export default {
  name: 'signIn',
  components: {
  },
  methods: {
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
