<template>
  <div class="login">
    <h3>Login Page</h3>
    <input 
      type="text" 
      v-model="email" 
      placeholder="Email address" 
      class="input" 
      required>
    <br/>
    <input 
      type="password" 
      v-model="password"
      placeholder="Password" 
      class="input" 
      required>
    <br/>
    <button v-on:click="login" class="button">Enter</button>
    <p><router-link to="/signup">
      New Here? Create a new account
    </router-link></p>
  </div>
</template>

<script>
  import firebase from 'firebase'
  export default {
    name: 'login',
    data: function() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login () {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((user) => {
          this.$router.replace('/comics')
        }).catch((err) => {
          alert(err.message)
        })
      }
    }
  }
</script>


<style scoped>
  .sign-up {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 10px;
    width: 10%;
    cursor: pointer;
  }
  span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
  }
</style>