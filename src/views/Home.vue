<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg=""/>
    <p>Bienvenue, {{ name}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {ref, onBeforeMount} from "vue";
import firebase from "../firebase";
require("firebase/auth");
//Pour le logout
export default {
  setup(){
    const name = ref("");
    onBeforeMount(() =>{
      const user = firebase.app.auth().currentUser;
      if(user){
        name.value = user.email.split('@')[0];
      }
    });
    const Logout = ()=>{
      firebase.app
          .auth()
          .signOut()
          .then(()=>console.log("Signed out"))
          .catch(err=>alert(err.message));
    }
    return {
      name,
      Logout
    }
  },

  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
