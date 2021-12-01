import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlk0tjaPdUF7e-Bx3wf1XdZmJ9CujADwM",
  authDomain: "trans-web-9934b.firebaseapp.com",
  projectId: "trans-web-9934b",
  storageBucket: "trans-web-9934b.appspot.com",
  messagingSenderId: "192784180320",
  appId: "1:192784180320:web:2b604ff819f36c43d8cf05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


*/
createApp(App).use(router).mount('#app')
