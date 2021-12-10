<template>
  <div id="nav">
  <nav class="container navbar navbar-expand-lg navbar-light bg-light">
    <img alt="Vue logo" id="logotrans" src="@/assets/logonv2x.png">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav mx-auto">
            <router-link to="/" class="nav-item nav-link">Home</router-link>
            <router-link to="/Login" class="nav-item nav-link">Login</router-link>
            <router-link to="/Saisie" class="nav-item nav-link">Nouvelle saisie</router-link>
            <router-link to="/Liste" class="nav-item nav-link">Liste des entrées</router-link>
            <router-link to="/Notification" class="nav-item nav-link">Notification</router-link>
        </div>
        <!--<div class = "dropdown"> 
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
        </div>
        
        <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit" id="search">Search</button>
        </form>-->
        <router-link to="/login"  @click="Logout"><i class="fas fa-sign-out-alt fa-2x"></i></router-link>
    </div>
  </nav>
 </div>
  <router-view/>
</template>

<!--Il faut être loggé avant de pouvoir aller sur Home et le reste du site-->
<script>
import {onBeforeMount, ref} from "vue";
import { useRouter, useRoute } from 'vue-router';
import firebase from "./firebase";
require("firebase/auth");
export default {
  setup(){
    const router = useRouter();
    const route = useRoute();
    onBeforeMount(()=> {
      firebase.app.auth().onAuthStateChanged((user) => {
        if (!user){
          router.replace('/login');
        }else if(route.path == "/login" || route.path =="/register"){
          router.replace('/');
        }
      });
    });
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


}
</script>

<style lang="scss">
$primary: crimson;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #557492;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a:hover {
  color: grey;
  //border-radius: .5rem;
}

#nav a.router-link-exact-active {
  color: whitesmoke;
  background: $primary;
  border-radius: .5rem;
}

#search {
  border-color: $primary;
  color: $primary;
}
#search:hover{
  color: whitesmoke;
  background-color: $primary;
}
#logotrans{
    height: auto; 
    width: auto; 
    max-width: 75px; 
    max-height: 75px;
}
</style>
