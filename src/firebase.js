import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeN3jhb-aqg6Uf_fTlf3U90zvj3zru1Zk",
  authDomain: "memes-50241.firebaseapp.com",
  projectId: "memes-50241",
  storageBucket: "memes-50241.appspot.com",
  messagingSenderId: "878069836637",
  appId: "1:878069836637:web:6bea0d681629d8f03256b4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();
const storage   = firebase.storage();

export {
   storage, firestore as default
}

