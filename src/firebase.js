
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import {initializeApp} from 'firebase/app'
const firebaseConfig = {
  apiKey: "AIzaSyAvGRcxMhCjLoYa4EBSTWuQdtT-mzuvDTw",
  authDomain: "netflix-clone-298ae.firebaseapp.com",
  projectId: "netflix-clone-298ae",
  storageBucket: "netflix-clone-298ae.appspot.com",
  messagingSenderId: "657644230796",
  appId: "1:657644230796:web:1a73796691475ee388c3a9"
};


const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth;
const auth = getAuth(firebaseApp);

export {auth};
// export default db;