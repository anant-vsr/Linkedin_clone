import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDdURyAw4hTRhfv3omlVi3RIzfDBjlNBgg",
    authDomain: "linkedin-clone-998f7.firebaseapp.com",
    projectId: "linkedin-clone-998f7",
    storageBucket: "linkedin-clone-998f7.appspot.com",
    messagingSenderId: "779685774511",
    appId: "1:779685774511:web:1029b75a08698ce276405a",
    measurementId: "G-V8HT5CCKSH"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();
var provider=new firebase.auth.GoogleAuthProvider();
const storage=firebase.storage();

export {auth,provider,storage};
export default db;