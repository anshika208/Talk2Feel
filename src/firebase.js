import firebase from "firebase/app";
import  "firebase/auth";


export const auth = firebase.initializeApp( {
  apiKey: "AIzaSyB9-nDJPTlUvGNaajaZlTWTYwu-ANNw4zE",
  authDomain: "talk2feel-86a1c.firebaseapp.com",
  projectId: "talk2feel-86a1c",
  storageBucket: "talk2feel-86a1c.appspot.com",
  messagingSenderId: "704386544410",
  appId: "1:704386544410:web:408faef763e854fc7b32a3"
}).auth(); 