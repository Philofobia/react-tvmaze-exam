// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXxGHgcN4Amc2URPiDajyVg45Pt5MNosQ",
  authDomain: "react-tvmaze-exam.firebaseapp.com",
  databaseURL: "https://react-tvmaze-exam-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-tvmaze-exam",
  storageBucket: "react-tvmaze-exam.appspot.com",
  messagingSenderId: "27571954317",
  appId: "1:27571954317:web:9b08bc2dd16417dd9878c4",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export default app