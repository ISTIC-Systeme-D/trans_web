<template>
  <div class="vue-template">
    <h2>{{ msg }}</h2>
    <form @submit.prevent="Register">
      <div class="form-group">
        <label>Adresse mail</label>
        <input type="email" class="form-control form-control-lg" v-model="email"/>
      </div>

      <div class="form-group">
        <label>Mot de passe</label>
        <input type="password" class="form-control form-control-lg" v-model="password" />
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">Créer un compte</button>
    </form>
  </div>
</template>

<script>
//fonction Register
import {ref} from 'vue';
import firebase from "../firebase";
require("firebase/auth");
export default {
  setup(){
    const email = ref("");
    const password = ref("");
    const Register = () =>{
      firebase.app
          .auth()
          .createUserWithEmailAndPassword(email.value,password.value)
          .then(user =>{
            alert(user);
          }).catch(err => alert(err.message));


    }
    return{
      Register,
      email,
      password
    }

  },
  name: 'RegisterComp',
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
}/*
.forgot-password
{
  background-color:black !important;
}*/
.form-control{
  width: 50%;
  margin-left: 25%;
  margin-bottom: 20px;
}
.vertical-center .form-control:focus {
  border-color: black;
  box-shadow: none;
}
</style>