
//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, getDocs} from "firebase/firestore";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkWbp12XRoV38kEajV7hBahdxwUxSXiVc",
  authDomain: "meta-fb.firebaseapp.com",
  projectId: "meta-fb",
  storageBucket: "meta-fb.appspot.com",
  messagingSenderId: "973161692832",
  appId: "1:973161692832:web:82d9c0d61cd734369493c5",
  measurementId: "G-76Q2K0FMJ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

const person = "victor"
const user = auth.currentUser;

export {
    app, db, auth, firebaseConfig, person, user
}