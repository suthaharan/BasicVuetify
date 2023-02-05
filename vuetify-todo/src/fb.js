import firebase from 'firebase/app';
import 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = ({
  apiKey: "AIzaSyBuXDpSeZLkSfa-EwbGTPuZHjB69CiPP6Y",
  authDomain: "vueprojects-5e0f2.firebaseapp.com",
  projectId: "vueprojects-5e0f2",
  storageBucket: "vueprojects-5e0f2.appspot.com",
  messagingSenderId: "503799344530",
  appId: "1:503799344530:web:6d7d9ab212d61538aba54b"
});
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();