import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBTStmk2j4KDSAKOemV16KEdZCADYjSueQ",
  authDomain: "snapchat-clone-3f877.firebaseapp.com",
  projectId: "snapchat-clone-3f877",
  storageBucket: "snapchat-clone-3f877.appspot.com",
  messagingSenderId: "230677205838",
  appId: "1:230677205838:web:135ccedf6e0a98cd33841f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();


export { db, auth, storage, provider };
