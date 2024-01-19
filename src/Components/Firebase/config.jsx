import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4w3iCU2dA8eVEwOqL99V-EvA-60Epwsk",
  authDomain: "audiolusa-react-js.firebaseapp.com",
  projectId: "audiolusa-react-js",
  storageBucket: "audiolusa-react-js.appspot.com",
  messagingSenderId: "592960427890",
  appId: "1:592960427890:web:0ed93756f0ad59c02f2feb"
};


const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);
