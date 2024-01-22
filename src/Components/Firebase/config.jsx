import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4w3iCU2dA8eVEwOqL99V-EvA-60Epwsk",
  authDomain: "audiolusa-react-js.firebaseapp.com",
  projectId: "audiolusa-react-js",
  storageBucket: "audiolusa-react-js.appspot.com",
  messagingSenderId: "592960427890",
  appId: "1:592960427890:web:0ed93756f0ad59c02f2feb"
};


const app = initializeApp(firebaseConfig); 
const firestore = getFirestore(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, firestore, onAuthStateChanged, db};
