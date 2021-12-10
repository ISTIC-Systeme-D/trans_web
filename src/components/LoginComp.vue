<template>
  <div class="vue-template">
    <h2>{{ msg }}</h2>
    <form @submit.prevent="Login">
      <div class="form-group">
        <label>Adresse mail</label>
        <input type="email" class="form-control form-control-lg" v-model="email"/>
      </div>

      <div class="form-group">
        <label>Mot de passe</label>
        <input type="password" class="form-control form-control-lg" v-model="password" />
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">Se connecter</button>

      <p class="forgot-password text-right mt-2 mb-4">
        <router-link to="/">Mot de passe oublié ?</router-link>
      </p>

      <p class="forgot-password text-right mt-2 mb-4" id="register">
        Besoin d'un compte ? <router-link to="/register">Créer un compte</router-link>
      </p>
    </form>
  </div>
</template>

<script>
//fonction login
import {ref} from 'vue';
import firebase from "../firebase";
require("firebase/auth");

export default {
  setup(){
    const email = ref("");
    const password = ref("");
    const Login = () =>{
      firebase.app
          .auth()
          .signInWithEmailAndPassword(email.value,password.value)
          .then(data =>console.log(data))
          .catch(err=>alert(err.message));
    }
    return{
      Login,
      email,
      password
    }

  },
  name: 'LoginComp',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$primary: crimson;

h2 {
  margin: 20px 0 20px;
  color: black;
}
label{
  color: black;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: $primary;
}
.form-control{
  width: 50%;
  margin-left: 25%;
  margin-bottom: 20px;
}
.vertical-center .form-control:focus {
  border-color: black;
  box-shadow: none;
}
#register{
  color:black;
}
</style>