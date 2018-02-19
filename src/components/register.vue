<template>
  <div>
    <div>
    <button @click="$emit('switchForm', 'signIn')">
          <span>Returning User?</span>
    </button>
      <form @submit.prevent>
        <h1>Create an Account</h1>
        <div>
          <input 
            type="text" 
            pattern="[a-zA-Z0-9]+" 
            id="inputUser" 
            title="Use Letters A - Z and Numbers 0 - 9."
            required
          />
          <label for="inputUser"> Username: </label>
        </div>
        <div>
          <input type="text"
            pattern="[a-zA-Z]+"
            id="inputFirst" 
            title="Use Letters A - Z for your First Name."
            required
          />
          <label for="inputFirst"> First Name: </label>
        </div>
        <div>
          <input type="text" 
            pattern="[a-zA-Z]+" 
            id="inputLast" 
            title="Use Letters A - Z for your Last Name."
            required
          />
          <label for="inputLast"> Last Name: </label>
        </div>
        <div>
          <input 
            type="password"
            id="inputPass"
            pattern="(?=.*\d)(?=.*[a-zA-Z]).{4,}"
            title="Password must have a Number and a Letter."
            required
          />
          <label for="inputPass"> Password: </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sqblRegister',
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
