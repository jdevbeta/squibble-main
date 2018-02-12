<template>
  <div>
    <button @click="$emit('switchForm', 'register')">
        <span>New User?</span>
    </button>
    <div>
      <form @submit.prevent ref="form">
        <h1>Sign In</h1>
        <label> Username: </label>
        <input 
          type="text" 
          pattern="[a-zA-Z0-9]+" 
          id="inputUser"
          title="Use Letters A - Z and Numbers 0 - 9."
        />
        <label> Password: </label>
        <input 
          type="password"
          id="inputPass"
          pattern="(?=.*\d)(?=.*[a-zA-Z]).{4,}"
          title="Password must have a Number and a Letter. Minimum of 4 Characters."
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'signIn',
  methods: {
    switchForm(){
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
