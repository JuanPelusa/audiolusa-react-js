// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4w3iCU2dA8eVEwOqL99V-EvA-60Epwsk",
  authDomain: "audiolusa-react-js.firebaseapp.com",
  projectId: "audiolusa-react-js",
  storageBucket: "audiolusa-react-js.appspot.com",
  messagingSenderId: "592960427890",
  appId: "1:592960427890:web:0ed93756f0ad59c02f2feb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);


