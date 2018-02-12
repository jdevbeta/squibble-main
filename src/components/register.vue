<template>
  <div>
    <button @click="$emit('switchForm', 'signIn')">
          <span>Returning User?</span>
    </button>
    <div>
      <form @submit.prevent ref="form">
        <h1>Create an Account</h1>
        <label> Username: </label>
        <input 
          type="text" 
          pattern="[a-zA-Z0-9]+" 
          id="inputUser" 
          title="Use Letters A - Z and Numbers 0 - 9."
        />
        <label> First Name: </label>
        <input type="text"
          pattern="[a-zA-Z]+"
          id="inputFirst" 
          title="Use Letters A - Z for your First Name."
        />
        <label> Last Name: </label>
        <input type="text" 
          pattern="[a-zA-Z]+" 
          id="inputLast" 
          title="Use Letters A - Z for your Last Name."
        />
        <label> Password: </label>
        <input 
          type="password"
          id="inputPass"
          pattern="(?=.*\d)(?=.*[a-zA-Z]).{4,}"
          title="Password must have a Number and a Letter."
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
