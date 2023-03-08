import firebase from 'firebase/app';
import 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = ({
  apiKey: "API KEY GOES HERE",
  authDomain: "PROJECTS.firebaseapp.com",
  projectId: "PROJECT-ID",
  storageBucket: "STORAGE-BUCKET.appspot.com",
  messagingSenderId: "SENDER ID GOES HERE",
  appId: "APP ID GOES HERE"
});
const firebaseApp = firebase.initializeApp(firebaseConfig);
// export const db = firebaseApp.firestore();

// connection to firestore
const db = firebaseApp.firestore();

// to address recent changes in firestore
db.settings({timestampsInSnapshots: true});

export default db;