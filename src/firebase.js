import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBE356T6zCekRNtMXNMlnP7EdSgnSGLmic",
  authDomain: "disneyplus-clone-4515a.firebaseapp.com",
  projectId: "disneyplus-clone-4515a",
  storageBucket: "disneyplus-clone-4515a.appspot.com",
  messagingSenderId: "608848748632",
  appId: "1:608848748632:web:0af4e22f7b270e429faa2d",
  measurementId: "G-XMQF2MMKFD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { firebase, db, auth, provider, storage };
export default db;
