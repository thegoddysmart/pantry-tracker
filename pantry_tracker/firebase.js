// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2MNMVh81lokbX-p-Q23Pnt-RO7dDKs3o",
  authDomain: "inventory-management-43ec1.firebaseapp.com",
  projectId: "inventory-management-43ec1",
  storageBucket: "inventory-management-43ec1.appspot.com",
  messagingSenderId: "601577535874",
  appId: "1:601577535874:web:675e7a6f6085d3c1e2b79b",
  measurementId: "G-MC5BQD6R0P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { firestore, auth };