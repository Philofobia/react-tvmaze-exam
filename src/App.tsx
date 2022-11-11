import "./App.css";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

//USER STATUS
import { getAuth, createUserWithEmailAndPassword, connectAuthEmulator, signInWithEmailAndPassword } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXxGHgcN4Amc2URPiDajyVg45Pt5MNosQ",
  authDomain: "react-tvmaze-exam.firebaseapp.com",
  projectId: "react-tvmaze-exam",
  storageBucket: "react-tvmaze-exam.appspot.com",
  messagingSenderId: "27571954317",
  appId: "1:27571954317:web:9b08bc2dd16417dd9878c4",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

const auth = getAuth(app);
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

function App() {
  return <h1>MY APP I WISH IT WOULD WORK.</h1>;
}

export default App;
