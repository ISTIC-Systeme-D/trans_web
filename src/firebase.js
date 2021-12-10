import firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: "AIzaSyAJ_JWGZWajeSFsu-9xRj7j7glZ6-PFIsw",
    authDomain: "transweb-95021.firebaseapp.com",
    databaseURL: "https://transweb-95021-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "transweb-95021",
    storageBucket: "transweb-95021.appspot.com",
    messagingSenderId: "462217967922",
    appId: "1:462217967922:web:18e3ce183380ff4cc9bf2b",
    measurementId: "G-38TTLBQCSK"
  };
  

  firebase.initializeApp(config);

  export default firebase.database();